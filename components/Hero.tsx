'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { company, copy, type Locale } from '@/data/site';
import { Arrow } from './Header';
import { useIsMobile } from './useIsMobile';

export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale]; const ref = useRef<HTMLElement>(null); const reduced = useReducedMotion(); const mobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageYDesktop = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const imageYMobile = useTransform(scrollYProgress, [0, 1], [0, 42]);
  const textYDesktop = useTransform(scrollYProgress, [0, 1], [0, -95]);
  const textYMobile = useTransform(scrollYProgress, [0, 1], [0, -32]);
  return <section ref={ref} id="inicio" className="hero">
    <motion.div className="hero-image" style={{ y: reduced ? 0 : mobile ? imageYMobile : imageYDesktop }} initial={reduced ? false : { scale: 1.045 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }}>
      <Image src="/images/van.webp" alt={locale === 'es' ? 'Furgoneta de Deep Air Cool Solutions en Miami' : 'Deep Air Cool Solutions service van in Miami'} fill priority sizes="100vw" className="object-cover" />
    </motion.div>
    <div className="hero-shade" />
    <motion.div className="hero-content container" style={{ y: reduced ? 0 : mobile ? textYMobile : textYDesktop }}>
      <p className="hero-location">{t.heroEyebrow}</p>
      <h1>{t.heroTitle}</h1>
      <p className="hero-description">{t.heroText}</p>
      <div className="hero-buttons"><a className="button" href={company.phoneHref}>{t.call} <Arrow /></a><a className="text-button" href="#servicios">{t.services} <Arrow /></a></div>
    </motion.div>
    <div className="hero-bottom container"><span>{company.phone}</span><div>{t.heroProof.map(item => <span key={item}>{item}</span>)}</div></div>
  </section>;
}
