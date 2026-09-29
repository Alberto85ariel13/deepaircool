import type { Metadata } from 'next';
import { HomePage } from '@/components/HomePage';
import { homeSeo } from '@/data/seo';
import { socialMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  title: { absolute: `${homeSeo.es.title} | Deep Air Cool Solutions` },
  description: homeSeo.es.description,
  alternates: { canonical: '/', languages: { es: '/', en: '/en' } },
  ...socialMetadata('es', `${homeSeo.es.title} | Deep Air Cool Solutions`, homeSeo.es.description, '/'),
};

export default function Page() { return <HomePage locale="es" />; }
