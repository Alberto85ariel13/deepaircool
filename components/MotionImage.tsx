'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useIsMobile } from './useIsMobile';

type Props = { src: string; alt: string; className?: string; priority?: boolean; sizes: string; parallax?: boolean };

export function MotionImage({ src, alt, className = '', priority = false, sizes, parallax = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yDesktop = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const yMobile = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);
  return (
    <div ref={ref} className={`image-frame ${className}`}>
      <motion.div className="image-motion" style={{ y: parallax && !reduced ? mobile ? yMobile : yDesktop : 0 }}>
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </motion.div>
    </div>
  );
}

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 1, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}>{children}</motion.div>;
}
