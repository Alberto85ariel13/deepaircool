import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocationPage } from '@/components/LocationPage';
import { locationPath, locations } from '@/data/locations';
import { socialMetadata } from '@/lib/metadata';

export const dynamicParams = false;
export function generateStaticParams() { return locations.map(location => ({ location: location.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location: slug } = await params;
  const location = locations.find(item => item.slug === slug);
  if (!location) return {};
  const title = location.headline.en;
  const description = `${location.intro.en} Call (305) 481-2522.`;
  const path = locationPath('en', slug);
  return {
    title, description, robots: { index: true, follow: true },
    alternates: { canonical: path, languages: { es: locationPath('es', slug), en: path } },
    ...socialMetadata('en', `${title} | Deep Air Cool Solutions`, description, path),
  };
}

export default async function Page({ params }: { params: Promise<{ location: string }> }) {
  const { location: slug } = await params;
  const location = locations.find(item => item.slug === slug);
  if (!location) notFound();
  return <LocationPage locale="en" location={location} />;
}
