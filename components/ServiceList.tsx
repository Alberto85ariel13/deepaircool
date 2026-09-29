'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { copy, services, servicePath, type Locale } from '@/data/site';
import { Arrow } from './Header';

export function ServiceList({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0); const t = copy[locale];
  return <div className="service-grid">
    <div className="service-list">{services.map((service, index) => <Link onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} key={service.slug} href={servicePath(locale, service.slug)} className={`service-row ${active === index ? 'active' : ''}`}>
      <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
      <span className="service-copy"><strong>{service.title[locale]}</strong><small>{service.summary[locale]}</small></span>
      <Arrow />
    </Link>)}</div>
    <div className="service-visual"><AnimatePresence mode="wait"><motion.div key={services[active].slug} initial={{ opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="service-visual-image"><Image src={services[active].image} alt={services[active].imageAlt[locale]} fill sizes="(max-width: 900px) 100vw, 43vw" className="object-cover" /></motion.div></AnimatePresence><span className="service-visual-caption">{t.explore} <Arrow /></span></div>
  </div>;
}
