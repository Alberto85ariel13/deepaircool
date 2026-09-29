'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { company, copy, homePath, servicePath, type Locale } from '@/data/site';
import { locationPath } from '@/data/locations';

export function Header({ locale, serviceSlug, locationSlug }: { locale: Locale; serviceSlug?: string; locationSlug?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = copy[locale];
  const home = homePath(locale);
  const otherLocale = locale === 'es' ? 'en' : 'es';
  const switchHref = locationSlug ? locationPath(otherLocale, locationSlug) : serviceSlug ? servicePath(otherLocale, serviceSlug) : locale === 'es' ? '/en' : '/';
  const links = ['#inicio', '#servicios', '#nosotros', '#proyectos', '#resenas', '#contacto'];
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  return <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
    <div className="header-inner">
      <Link href={home} className="brand" aria-label={`${company.name} — ${t.nav[0]}`} onClick={() => setOpen(false)}>
        <Image src="/images/logo-lockup.png" alt="Deep Air Cool Solutions" width={182} height={63} priority className="brand-logo" />
      </Link>
      <nav className="desktop-nav" aria-label={locale === 'es' ? 'Navegación principal' : 'Main navigation'}>
        {links.map((href, i) => <Link key={href} href={`${home}${href}`} className="nav-link">{t.nav[i]}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="language-link" href={switchHref} hrefLang={locale === 'es' ? 'en' : 'es'} aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}>{locale === 'es' ? 'EN' : 'ES'}</Link>
        <a className="header-phone" href={company.phoneHref}>{company.phone}</a>
        <a className="button button-small desktop-cta" href={company.phoneHref}>{t.request} <Arrow /></a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.close : t.menu} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </div>
    <nav id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-label={locale === 'es' ? 'Navegación móvil' : 'Mobile navigation'}>
      {links.map((href, i) => <Link key={href} href={`${home}${href}`} onClick={() => setOpen(false)}>{t.nav[i]}</Link>)}
      <a href={company.phoneHref} className="button" onClick={() => setOpen(false)}>{t.call} <Arrow /></a>
    </nav>
  </header>;
}

export function Arrow() { return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3.5 9h10m-4.5-4.5L13.5 9 9 13.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>; }
