import Link from 'next/link';
import { company, copy, homePath, services, servicePath, type Locale, type Service } from '@/data/site';
import { serviceSeo } from '@/data/seo';
import { Arrow, Header } from './Header';
import { MotionImage, Reveal } from './MotionImage';
import { Footer } from './HomePage';

export function ServicePage({ locale, service }: { locale: Locale; service: Service }) {
  const t = copy[locale]; const path = servicePath(locale, service.slug); const related = services.filter(item => item.slug !== service.slug).slice(0, 3);
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', name: service.title[locale], description: service.detail[locale], url: `${company.url}${path}`, provider: { '@id': `${company.url}/#business` }, areaServed: company.areas.map(name => ({ '@type': 'Place', name })) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.nav[0], item: `${company.url}${homePath(locale)}` },
      { '@type': 'ListItem', position: 2, name: service.title[locale], item: `${company.url}${path}` },
    ] },
  ] };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /><Header locale={locale} serviceSlug={service.slug} /><main>
    <section className="service-page-hero"><MotionImage src={service.image} alt={service.imageAlt[locale]} sizes="100vw" parallax /><div className="service-page-overlay" /><div className="container service-page-hero-content"><p className="hero-location">MIAMI · {locale === 'es' ? 'SERVICIOS' : 'SERVICES'}</p><h1>{service.title[locale]}</h1><p>{service.summary[locale]}</p><a href={company.phoneHref} className="button">{t.call} <Arrow /></a></div></section>
    <section className="section-pad"><div className="container service-detail"><Reveal><h2>{serviceSeo[service.slug][locale].heading}</h2><p>{service.detail[locale]}</p><a href={company.phoneHref} className="inline-link">{company.phone} <Arrow /></a></Reveal><aside><h3>{locale === 'es' ? 'Qué cubre el servicio' : 'What this service covers'}</h3><ul>{service.points[locale].map(point => <li key={point}>{point}</li>)}</ul><p>{t.serviceCtaText}</p></aside></div></section>
    <section className="service-more"><div className="container"><h2>{locale === 'es' ? 'Otros servicios' : 'Other services'}</h2><div className="service-more-links">{related.map(item => <Link key={item.slug} href={servicePath(locale, item.slug)}>{item.title[locale]} <Arrow /></Link>)}</div></div></section>
    <section className="closing-section service-closing"><div className="container closing-content"><h2>{t.closingTitle}</h2><p>{t.closingText}</p><a className="button" href={company.phoneHref}>{t.call} <Arrow /></a></div></section>
  </main><Footer locale={locale} serviceSlug={service.slug} /><div className="mobile-call"><a href={company.phoneHref}>{t.call} · {company.phone} <Arrow /></a></div></>;
}
