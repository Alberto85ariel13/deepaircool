import type { Metadata } from 'next';
import { company, type Locale } from '@/data/site';

const socialImage = {
  url: `${company.url}/images/van-social.jpg`,
  width: 1200,
  height: 630,
  type: 'image/jpeg',
  alt: 'Furgoneta de Deep Air Cool Solutions en Miami',
};

export function socialMetadata(locale: Locale, title: string, description: string, path: string): Pick<Metadata, 'openGraph' | 'twitter'> {
  return {
    openGraph: {
      type: 'website', siteName: company.name, locale: locale === 'es' ? 'es_US' : 'en_US',
      title, description, url: `${company.url}${path}`, images: [socialImage],
    },
    twitter: { card: 'summary_large_image', title, description, images: [socialImage.url] },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: 'Deep Air Cool Solutions | HVAC y Refrigeración en Miami', template: '%s | Deep Air Cool Solutions' },
  description: 'Instalación, mantenimiento y reparación de aire acondicionado, HVAC y refrigeración en Miami. Servicio de emergencia 24/7. Llama al (305) 481-2522.',
};
