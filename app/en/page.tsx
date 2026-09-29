import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';
import { homeSeo } from '@/data/seo';
import { socialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: `${homeSeo.en.title} | Deep Air Cool Solutions` },
  description: homeSeo.en.description,
  alternates: { canonical: '/en', languages: { es: '/', en: '/en' } },
  ...socialMetadata('en', `${homeSeo.en.title} | Deep Air Cool Solutions`, homeSeo.en.description, '/en'),
};

export default function EnglishPage() { return <HomePage locale="en" />; }
