'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useIsMobile } from './useIsMobile';

export function ParallaxBackground({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const mobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const desktopY = useTransform(scrollYProgress, [0, 1], [-320, 320]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [-260, 260]);

  return (
    <div ref={ref} className="intro-background" aria-hidden="true">
      <motion.div
        className="intro-background-image"
        style={{ y: reducedMotion ? 0 : mobile ? mobileY : desktopY }}
      >
        <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
    </div>
  );
}
