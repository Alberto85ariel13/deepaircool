'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { company, services, type Locale } from '@/data/site';
import { locations } from '@/data/locations';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Arrow } from './Header';

const contactCopy = {
  es: {
    title: 'Solicitar servicio por WhatsApp', subtitle: 'Cuéntanos qué necesita tu equipo',
    name: 'Nombre', namePlaceholder: 'Tu nombre', phone: 'Teléfono', phonePlaceholder: '(305) 555-0123',
    service: 'Servicio', chooseService: 'Selecciona un servicio', otherService: 'Necesito orientación',
    location: 'Ubicación', chooseLocation: 'Selecciona tu zona', otherLocation: 'Otra zona',
    message: '¿Qué está ocurriendo?', messagePlaceholder: 'Describe brevemente el problema o el trabajo que necesitas.',
    optional: 'opcional', submit: 'Continuar en WhatsApp',
    note: 'Se abrirá WhatsApp con tu solicitud lista para revisar y enviar.',
    fallback: '¿No se abrió WhatsApp?', reopen: 'Abrir mi solicitud',
    nameError: 'Introduce tu nombre.', phoneError: 'Introduce un teléfono válido.',
    panelTitle: 'Tu solicitud de servicio', close: 'Cerrar formulario',
  },
  en: {
    title: 'Request service on WhatsApp', subtitle: 'Tell us what your system needs',
    name: 'Name', namePlaceholder: 'Your name', phone: 'Phone', phonePlaceholder: '(305) 555-0123',
    service: 'Service', chooseService: 'Select a service', otherService: 'Help me choose',
    location: 'Location', chooseLocation: 'Select your area', otherLocation: 'Another area',
    message: 'What is happening?', messagePlaceholder: 'Briefly describe the issue or the work you need.',
    optional: 'optional', submit: 'Continue to WhatsApp',
    note: 'WhatsApp will open with your request ready to review and send.',
    fallback: 'WhatsApp did not open?', reopen: 'Open my request',
    nameError: 'Enter your name.', phoneError: 'Enter a valid phone number.',
    panelTitle: 'Your service request', close: 'Close form',
  },
} as const;

export function WhatsAppIcon({ className = '' }: { className?: string }) {
  return <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.7 11.7a8.7 8.7 0 0 1-12.9 7.6L3 20.6l1.3-4.7a8.7 8.7 0 1 1 16.4-4.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.1 7.8c.3-.3.6-.2.8.1l1 1.8c.1.2.1.5-.1.7l-.7.8c.7 1.4 1.8 2.5 3.3 3.2l.8-.9c.2-.2.4-.2.6-.1l1.8.9c.4.2.4.5.3.8-.3 1-1.2 1.5-2.2 1.3-3.6-.7-6.4-3.6-7-6.9-.2-.7.3-1.4 1.4-1.7Z" fill="currentColor"/></svg>;
}

export function HeroContact({ locale }: { locale: Locale }) {
  const t = contactCopy[locale];
  const [requestUrl, setRequestUrl] = useState('');
  const [open, setOpen] = useState(false);
  const [panelHeight, setPanelHeight] = useState(520);
  const [panelLift, setPanelLift] = useState(0);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function closeForm(restoreFocus = false) {
    const details = detailsRef.current;
    if (!details) return;
    details.open = false;
    if (restoreFocus) details.querySelector('summary')?.focus({ preventScroll: true });
  }

  useEffect(() => {
    if (!open) return;
    const details = detailsRef.current;
    const summary = details?.querySelector('summary');
    if (!details || !summary) return;

    const measurePanel = () => {
      const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 76;
      const viewportTop = window.visualViewport?.offsetTop ?? 0;
      const viewportBottom = viewportTop + (window.visualViewport?.height ?? window.innerHeight);
      const callBarHeight = document.querySelector('.mobile-call')?.getBoundingClientRect().height ?? 0;
      const anchoredBottom = summary.getBoundingClientRect().top - 12;
      const visibleBottom = Math.min(anchoredBottom, viewportBottom - callBarHeight - 12);
      return {
        height: Math.floor(visibleBottom - Math.max(headerBottom, viewportTop) - 12),
        lift: Math.max(0, Math.ceil(anchoredBottom - visibleBottom)),
      };
    };
    const updatePosition = () => {
      const bounds = measurePanel();
      setPanelHeight(Math.max(100, Math.min(620, bounds.height)));
      setPanelLift(bounds.lift);
    };
    updatePosition();
    const available = measurePanel().height;
    if (available < 300) {
      window.scrollBy({ top: available - 300, behavior: 'instant' });
      updatePosition();
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!details.contains(event.target as Node)) closeForm();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); closeForm(true); }
    };
    window.addEventListener('scroll', updatePosition, { passive: true });
    window.addEventListener('resize', updatePosition);
    window.visualViewport?.addEventListener('resize', updatePosition);
    window.visualViewport?.addEventListener('scroll', updatePosition);
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
      window.visualViewport?.removeEventListener('resize', updatePosition);
      window.visualViewport?.removeEventListener('scroll', updatePosition);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? '').trim();
    const nameInput = event.currentTarget.elements.namedItem('name') as HTMLInputElement;
    const phoneInput = event.currentTarget.elements.namedItem('phone') as HTMLInputElement;
    const phoneDigits = value('phone').replace(/\D/g, '');
    nameInput.setCustomValidity(value('name').length < 2 ? t.nameError : '');
    phoneInput.setCustomValidity(phoneDigits.length < 7 || phoneDigits.length > 15 ? t.phoneError : '');
    if (!event.currentTarget.reportValidity()) return;
    const url = buildWhatsAppUrl(company.whatsappNumber, locale, {
      name: value('name'), phone: value('phone'), service: value('service'),
      location: value('location'), message: value('message'),
    });
    setRequestUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return <details ref={detailsRef} className="hero-contact" onToggle={event => setOpen(event.currentTarget.open)}>
    <summary>
      <WhatsAppIcon />
      <span className="hero-contact-label"><strong>{t.title}</strong><small>{t.subtitle}</small></span>
      <svg className="hero-contact-chevron" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </summary>
    <form className="hero-contact-form" aria-label={t.panelTitle} style={{ maxHeight: panelHeight, bottom: `calc(100% + 12px + ${panelLift}px)` }} onSubmit={handleSubmit} onChange={() => setRequestUrl('')}>
      <div className="hero-contact-panel-heading"><strong>{t.panelTitle}</strong><button className="hero-contact-close" type="button" onClick={() => closeForm(true)} aria-label={t.close}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="m4 4 10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg></button></div>
      <div className="hero-contact-fields">
        <label htmlFor="hero-contact-name">{t.name}<span aria-hidden="true"> *</span><input id="hero-contact-name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} required minLength={2} maxLength={100} onInput={event => event.currentTarget.setCustomValidity('')} /></label>
        <label htmlFor="hero-contact-phone">{t.phone}<span aria-hidden="true"> *</span><input id="hero-contact-phone" name="phone" type="tel" autoComplete="tel" placeholder={t.phonePlaceholder} required minLength={7} maxLength={25} pattern={'[+0-9\\(\\) .\\-]{7,25}'} onInput={event => event.currentTarget.setCustomValidity('')} /></label>
        <label htmlFor="hero-contact-service">{t.service}<span aria-hidden="true"> *</span><select id="hero-contact-service" name="service" required defaultValue=""><option value="" disabled>{t.chooseService}</option>{services.map(service => <option key={service.slug} value={service.title[locale]}>{service.title[locale]}</option>)}<option value={t.otherService}>{t.otherService}</option></select></label>
        <label htmlFor="hero-contact-location">{t.location} <small>({t.optional})</small><select id="hero-contact-location" name="location" defaultValue=""><option value="">{t.chooseLocation}</option>{locations.map(location => <option key={location.slug} value={location.name}>{location.name}</option>)}<option value={t.otherLocation}>{t.otherLocation}</option></select></label>
        <label className="hero-contact-message" htmlFor="hero-contact-message">{t.message} <small>({t.optional})</small><textarea id="hero-contact-message" name="message" rows={2} maxLength={1000} placeholder={t.messagePlaceholder} /></label>
      </div>
      <button className="button hero-contact-submit" type="submit"><WhatsAppIcon />{t.submit}<Arrow /></button>
      <p className="hero-contact-note">{t.note}</p>
      {requestUrl && <p className="hero-contact-fallback" role="status">{t.fallback} <a href={requestUrl} target="_blank" rel="noopener noreferrer">{t.reopen} <Arrow /></a></p>}
    </form>
  </details>;
}
