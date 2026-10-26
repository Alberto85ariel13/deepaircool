'use client';

import { useEffect, useId, useRef, useState, type CSSProperties } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

// Coordinates follow the three ceiling outlets in the 2560 × 1440 artwork.
const streams = [
  {
    name: 'front', count: 11, start: [180, 159], spread: [115, 8], end: [-60, 450], fan: [485, 14],
    control1: [160, 240], control1Spread: [135, 6], control2: [50, 340], control2Spread: [265, 28],
    duration: 3.6,
  },
  {
    name: 'middle', count: 13, start: [740, 248], spread: [95, 8], end: [550, 550], fan: [660, 15],
    control1: [720, 335], control1Spread: [110, 8], control2: [660, 425], control2Spread: [300, 18],
    duration: 4.2,
  },
  {
    name: 'rear', count: 7, start: [580, 438], spread: [60, 3], end: [410, 590], fan: [260, 5],
    control1: [567, 480], control1Spread: [60, 3], control2: [520, 525], control2Spread: [90, 4],
    duration: 3.2,
  },
];

function coordinate(start: number[], spread: number[], fraction: number) {
  return `${start[0] + spread[0] * fraction} ${start[1] + spread[1] * fraction}`;
}

export function HeroAirflow() {
  const id = useId().replace(/:/g, '');
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { amount: 0.05 });
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setVisible(document.visibilityState === 'visible');
    onVisibility();
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return <svg ref={ref} className="hero-airflow" viewBox="0 0 2560 1440" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false" data-running={inView && visible && !reduced}>
    <defs>
      <filter id={`${id}-soft`} x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" /></filter>
      {streams.map(stream => <linearGradient key={stream.name} id={`${id}-${stream.name}`} gradientUnits="userSpaceOnUse" x1={stream.start[0]} y1={stream.start[1]} x2={stream.start[0]} y2={stream.end[1]}>
        <stop offset="0" stopColor="#bcefff" stopOpacity="0.12" />
        <stop offset="0.16" stopColor="#a9ebff" stopOpacity="0.85" />
        <stop offset="0.55" stopColor="#70d9fa" stopOpacity="0.55" />
        <stop offset="1" stopColor="#70d9fa" stopOpacity="0" />
      </linearGradient>)}
    </defs>
    {streams.map(stream => <g key={stream.name} fill="none" stroke={`url(#${id}-${stream.name})`} strokeLinecap="round">
      {Array.from({ length: stream.count }, (_, index) => {
        const fraction = index / (stream.count - 1);
        const d = `M ${coordinate(stream.start, stream.spread, fraction)} C ${coordinate(stream.control1, stream.control1Spread, fraction)}, ${coordinate(stream.control2, stream.control2Spread, fraction)}, ${coordinate(stream.end, stream.fan, fraction)}`;
        const style = {
          '--airflow-duration': `${stream.duration + (index % 3) * 0.12}s`,
          '--airflow-delay': `${-index * 0.18 - 0.8}s`,
        } as CSSProperties;
        return <g key={index}>
          <path className="airflow-streak airflow-soft" d={d} pathLength="100" strokeWidth="11" strokeDasharray="42 58" filter={`url(#${id}-soft)`} style={style} />
          <path className="airflow-streak airflow-core" d={d} pathLength="100" strokeWidth="3.2" strokeDasharray="42 58" style={style} />
        </g>;
      })}
    </g>)}
  </svg>;
}
