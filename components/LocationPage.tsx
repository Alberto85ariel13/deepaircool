import Link from 'next/link';
import { locationPath, locations, type Location } from '@/data/locations';
import { company, copy, homePath, services, servicePath, type Locale } from '@/data/site';
import { Arrow, Header } from './Header';
import { Footer } from './HomePage';
import { MotionImage, Reveal } from './MotionImage';

export function LocationPage({ locale, location }: { locale: Locale; location: Location }) {
  const t = copy[locale];
  const path = locationPath(locale, location.slug);
  const home = homePath(locale);
  const selectedServices = location.serviceSlugs.map(slug => services.find(service => service.slug === slug)!);
  const imageAlt = location.image === '/images/van.webp'
    ? locale === 'es' ? 'Furgoneta de Deep Air Cool Solutions' : 'Deep Air Cool Solutions service van'
    : services.find(service => service.image === location.image)?.imageAlt[locale] ?? company.name;
  const currentIndex = locations.findIndex(item => item.slug === location.slug);
  const relatedLocations = Array.from({ length: 4 }, (_, offset) => locations[(currentIndex + offset + 1) % locations.length]);
  const otherServices = services.filter(service => !location.serviceSlugs.includes(service.slug));
  const serviceNames = selectedServices.map(service => service.title[locale]);
  const faq = [
    {
      question: locale === 'es' ? `¿Qué servicios ofrecen en ${location.name}?` : `Which services are available in ${location.name}?`,
      answer: locale === 'es'
        ? `Puedes consultar por ${serviceNames.join(', ')} y otros servicios de climatización y refrigeración que ofrecemos. Llama para explicar qué necesita tu equipo.`
        : `Ask about ${serviceNames.join(', ')} and our other cooling and refrigeration services. Call to explain what your equipment needs.`,
    },
    { question: location.question[locale], answer: location.answer[locale] },
    {
      question: locale === 'es' ? `¿Cómo solicito servicio en ${location.name}?` : `How do I request service in ${location.name}?`,
      answer: locale === 'es'
        ? `Llama al ${company.phone} o escribe a ${company.email} e indica tu ubicación, el tipo de equipo y el problema.`
        : `Call ${company.phone} or email ${company.email} with your location, equipment type and a description of the issue.`,
    },
  ];
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      {
        '@type': 'Service', '@id': `${company.url}${path}#service`, name: location.headline[locale],
        description: location.intro[locale], url: `${company.url}${path}`,
        provider: { '@id': `${company.url}/#business` },
        areaServed: { '@type': 'Place', name: `${location.name}, FL` },
        serviceType: serviceNames,
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: t.nav[0], item: `${company.url}${home}` },
          { '@type': 'ListItem', position: 2, name: `${location.name}, FL`, item: `${company.url}${path}` },
        ],
      },
    ],
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <Header locale={locale} locationSlug={location.slug} />
    <main>
      <section className="service-page-hero location-hero">
        <MotionImage src={location.image} alt={imageAlt} sizes="100vw" parallax />
        <div className="service-page-overlay" />
        <div className="container service-page-hero-content">
          <nav className="location-breadcrumbs" aria-label={locale === 'es' ? 'Ruta de navegación' : 'Breadcrumb'}>
            <Link href={home}>{t.nav[0]}</Link><span aria-hidden="true">/</span><span>{location.name}, FL</span>
          </nav>
          <h1>{location.headline[locale]}</h1>
          <p>{location.intro[locale]}</p>
          <a href={company.phoneHref} className="button">{t.call} <Arrow /></a>
        </div>
      </section>

      <section className="location-services section-pad">
        <div className="container">
          <Reveal className="location-section-heading">
            <h2>{location.sectionTitle[locale]}</h2>
            <p>{location.context[locale]}</p>
          </Reveal>
          <div className="location-service-list">
            {selectedServices.map((service, index) => <Link className="location-service" key={service.slug} href={servicePath(locale, service.slug)}>
              <span className="location-service-index">0{index + 1}</span>
              <span><strong>{service.title[locale]}</strong><small>{service.summary[locale]}</small></span>
              <Arrow />
            </Link>)}
          </div>
          <p className="location-other-services">
            {locale === 'es' ? 'También ofrecemos:' : 'We also offer:'}{' '}
            {otherServices.map((service, index) => <span key={service.slug}><Link href={servicePath(locale, service.slug)}>{service.title[locale]}</Link>{index < otherServices.length - 1 ? ' · ' : ''}</span>)}
          </p>
        </div>
      </section>

      <section className="location-callout">
        <div className="container location-callout-inner">
          <h2>{locale === 'es' ? `¿Necesitas servicio en ${location.name}?` : `Need service in ${location.name}?`}</h2>
          <div><p>{locale === 'es' ? 'Cuéntanos qué equipo tienes y qué está ocurriendo. La forma más rápida de comenzar es llamarnos.' : 'Tell us about your equipment and what is happening. Calling is the fastest way to get started.'}</p><a href={company.phoneHref} className="button">{t.call} <Arrow /></a></div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="container faq-grid">
          <h2>{locale === 'es' ? `Preguntas sobre el servicio en ${location.name}` : `Questions about service in ${location.name}`}</h2>
          <div>{faq.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="location-more section-pad">
        <div className="container"><h2>{locale === 'es' ? 'Otras áreas de servicio' : 'Other service areas'}</h2>
          <div className="location-more-links">{relatedLocations.map(item => <Link href={locationPath(locale, item.slug)} key={item.slug}>{item.name}<Arrow /></Link>)}</div>
          <Link className="inline-link location-all-areas" href={`${home}#areas`}>{locale === 'es' ? 'Ver todas las áreas' : 'View all service areas'} <Arrow /></Link>
        </div>
      </section>
    </main>
    <Footer locale={locale} locationSlug={location.slug} />
    <div className="mobile-call"><a href={company.phoneHref}>{t.call} · {company.phone} <Arrow /></a></div>
  </>;
}
