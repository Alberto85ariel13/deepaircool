import type { MetadataRoute } from 'next';
import { company, servicePath, services } from '@/data/site';
import { locationPath, locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/en', ...services.flatMap(service => [servicePath('es', service.slug), servicePath('en', service.slug)])];
  const existing = paths.map(path => ({ url: `${company.url}${path}`, changeFrequency: path === '/' || path === '/en' ? 'monthly' as const : 'yearly' as const, priority: path === '/' ? 1 : path === '/en' ? 0.9 : 0.7 }));
  const locationPages = locations.flatMap(location => (['es', 'en'] as const).map(locale => ({
    url: `${company.url}${locationPath(locale, location.slug)}`,
    lastModified: new Date('2026-09-29'),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  })));
  return [...existing, ...locationPages];
}
