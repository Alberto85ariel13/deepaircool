'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { company, copy, type Locale } from '@/data/site';
import { Arrow } from './Header';
import { HeroContact } from './HeroContact';
import { HeroAirflow } from './HeroAirflow';
import { useIsMobile } from './useIsMobile';

export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale]; const ref = useRef<HTMLElement>(null); const reduced = useReducedMotion(); const mobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageYDesktop = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return <section ref={ref} id="inicio" className="hero hero-commercial">
    <div className="hero-visual">
      <motion.div className="hero-image" style={{ y: reduced || mobile ? 0 : imageYDesktop }}>
        <Image src="/images/commercial-hero.webp" alt={locale === 'es' ? 'Imagen de climatización comercial y equipos HVAC de Deep Air Cool Solutions' : 'Deep Air Cool Solutions commercial air conditioning and HVAC illustration'} fill priority sizes="100vw" className="object-cover" />
        <div className="hero-shade" />
        <HeroAirflow />
      </motion.div>
    </div>
    <div className="hero-content container">
      <div className="hero-copy">
      <h1>{t.heroTitle}</h1>
      <p className="hero-description">{t.heroText}</p>
      <div className="hero-buttons"><a className="button" href={company.phoneHref}>{t.call} <Arrow /></a><a className="hero-phone" href={company.phoneHref}>{company.phone}</a></div>
      <HeroContact locale={locale} />
      <div className="hero-assurance">{t.heroProof.map(item => <span key={item}>{item}</span>)}</div>
      </div>
    </div>
  </section>;
}
