import Image from 'next/image';
import Link from 'next/link';
import { company, copy, homePath, services, servicePath, type Locale } from '@/data/site';
import { locationPath, locations } from '@/data/locations';
import { homeSeo } from '@/data/seo';
import { Arrow, Header } from './Header';
import { Hero } from './Hero';
import { GoogleReviews } from './GoogleReviews';
import { MotionImage, Reveal } from './MotionImage';
import { ParallaxBackground } from './ParallaxBackground';
import { ServiceList } from './ServiceList';

function JsonLd({ locale }: { locale: Locale }) {
  const home = `${company.url}${homePath(locale)}`;
  const graph = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', '@id': `${company.url}/#website`, url: company.url, name: company.name, inLanguage: ['es', 'en'] },
      { '@type': 'HVACBusiness', '@id': `${company.url}/#business`, name: company.name, url: company.url, telephone: '+1-305-481-2522', email: company.email, image: `${company.url}/images/van.webp`, sameAs: [company.googleMapsUrl], areaServed: company.areas.map(name => ({ '@type': 'Place', name })), availableLanguage: ['es', 'en'], openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '20:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '08:00', closes: '18:00' },
      ] },
      { '@type': 'WebPage', '@id': home, url: home, inLanguage: locale, name: homeSeo[locale].title, description: homeSeo[locale].description, isPartOf: { '@id': `${company.url}/#website` }, about: { '@id': `${company.url}/#business` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const work = [
    { image: '/images/service-equipment.webp', alt: locale === 'es' ? 'Equipo y herramientas de servicio HVAC' : 'HVAC service equipment and tools', label: t.workLabels[0] },
    { image: '/images/commercial-unit.webp', alt: locale === 'es' ? 'Unidad HVAC fotografiada durante un trabajo' : 'HVAC unit photographed during field work', label: t.workLabels[1] },
    { image: '/images/air-handler.webp', alt: locale === 'es' ? 'Equipo HVAC abierto para revisión' : 'HVAC equipment opened for inspection', label: t.workLabels[2] },
    { image: '/images/coil.webp', alt: locale === 'es' ? 'Detalle de un serpentín de aire acondicionado' : 'Detail of an air conditioning coil', label: t.workLabels[3] },
    { image: '/images/condenser.webp', alt: locale === 'es' ? 'Unidad exterior de aire acondicionado' : 'Outdoor air conditioning unit', label: t.workLabels[4] },
    { image: '/images/rooftop-hvac-fieldwork.webp', alt: locale === 'es' ? 'Rack de compresores para refrigeración comercial en una azotea' : 'Compressor rack for commercial refrigeration on a rooftop', label: t.workLabels[5] },
  ];
  return <><JsonLd locale={locale} /><Header locale={locale} /><main>
    <Hero locale={locale} />
    <section className="intro-section section-pad"><ParallaxBackground src="/images/intro-home.webp" /><div className="container intro-grid"><Reveal><h2>{t.intro}</h2></Reveal><Reveal className="intro-side"><p>{t.introText}</p><a href={company.phoneHref} className="inline-link">{t.call} <Arrow /></a></Reveal></div></section>
    <section id="servicios" className="services-section section-pad"><div className="container"><Reveal className="section-heading"><div><h2>{t.servicesTitle}</h2></div><p>{t.servicesText}</p></Reveal><ServiceList locale={locale} /></div></section>
    <section id="proyectos" className="work-section section-pad"><div className="container"><Reveal className="work-heading"><h2>{t.workTitle}</h2><p>{t.workText}</p></Reveal><div className="work-layout"><Reveal className="work-item work-item-large"><MotionImage src={work[0].image} alt={work[0].alt} sizes="(max-width: 700px) 100vw, 57vw" parallax /><p>{work[0].label}</p></Reveal><div className="work-side">{work.slice(1, 3).map(item => <Reveal className="work-item" key={item.image}><MotionImage src={item.image} alt={item.alt} sizes="(max-width: 700px) 100vw, 33vw" parallax /><p>{item.label}</p></Reveal>)}</div></div><div className="work-secondary">{work.slice(3, 5).map(item => <Reveal className="work-item" key={item.image}><MotionImage src={item.image} alt={item.alt} sizes="(max-width: 700px) 100vw, 45vw" parallax /><p>{item.label}</p></Reveal>)}</div><Reveal className="work-item work-feature"><MotionImage src={work[5].image} alt={work[5].alt} sizes="(max-width: 700px) 100vw, 90vw" parallax /><p>{work[5].label}</p></Reveal></div></section>
    <GoogleReviews locale={locale} />
    <section id="nosotros" className="about-section"><div className="about-image"><MotionImage src="/images/technician.webp" alt={locale === 'es' ? 'Técnico de Deep Air Cool Solutions trabajando en una instalación' : 'Deep Air Cool Solutions technician at work'} sizes="(max-width: 900px) 100vw, 52vw" parallax /></div><div className="about-content"><Reveal><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><div className="about-facts"><span>HVAC</span><span>AC</span><span>24/7</span></div><a href={company.phoneHref} className="button button-dark">{t.call} <Arrow /></a></Reveal></div></section>
    <section id="areas" className="area-section section-pad"><div className="container area-grid"><Reveal><h2>{t.areaTitle}</h2><p>{t.areaText}</p></Reveal><Reveal><ul className="area-list">{locations.map(location => <li key={location.slug}><Link href={locationPath(locale, location.slug)}>{location.name}</Link></li>)}</ul></Reveal></div></section>
    <section className="faq-section section-pad"><div className="container faq-grid"><h2>{t.faqTitle}</h2><div>{t.faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section id="contacto" className="closing-section"><MotionImage src="/images/compressor.webp" alt={locale === 'es' ? 'Compresor de refrigeración durante un trabajo de servicio' : 'Refrigeration compressor during service work'} sizes="100vw" parallax /><div className="closing-overlay" /><div className="container closing-content"><Reveal><h2>{t.closingTitle}</h2><p>{t.closingText}</p><div className="closing-actions"><a href={company.phoneHref} className="button">{t.call} <Arrow /></a><a href={company.emailHref} className="text-button">{company.email}</a></div><a href={company.phoneHref} className="closing-phone">{company.phone}</a></Reveal></div></section>
  </main><Footer locale={locale} /><div className="mobile-call"><a href={company.phoneHref}>{t.call} · {company.phone} <Arrow /></a></div></>;
}

export function Footer({ locale, serviceSlug, locationSlug }: { locale: Locale; serviceSlug?: string; locationSlug?: string }) {
  const t = copy[locale]; const home = homePath(locale);
  const otherLocale = locale === 'es' ? 'en' : 'es';
  const switchHref = locationSlug ? locationPath(otherLocale, locationSlug) : serviceSlug ? servicePath(otherLocale, serviceSlug) : homePath(otherLocale);
  return <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Link href={home} aria-label={company.name}><Image src="/images/logo-lockup.png" alt="Deep Air Cool Solutions" width={220} height={76} /></Link><p>{locale === 'es' ? 'Aire acondicionado, HVAC y refrigeración para Miami.' : 'Air conditioning, HVAC and refrigeration for Miami.'}</p></div><div><h3>{t.services}</h3><ul>{services.map(s => <li key={s.slug}><Link href={servicePath(locale, s.slug)}>{s.title[locale]}</Link></li>)}</ul></div><div><h3>{t.serviceArea}</h3><ul className="footer-locations">{locations.map(location => <li key={location.slug}><Link href={locationPath(locale, location.slug)}>{location.name}</Link></li>)}</ul><h3 className="footer-subtitle">{t.contact}</h3><a href={company.phoneHref}>{company.phone}</a><a href={company.emailHref}>{company.email}</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {company.name}</span><span>{t.hours}<br />{t.emergencyHours}</span><Link href={switchHref} hrefLang={otherLocale}>{locale === 'es' ? 'English' : 'Español'}</Link></div></footer>;
}
