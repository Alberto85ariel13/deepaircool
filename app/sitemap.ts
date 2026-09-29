import type { MetadataRoute } from 'next';
import { company, servicePath, services } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/en', ...services.flatMap(service => [servicePath('es', service.slug), servicePath('en', service.slug)])];
  return paths.map(path => ({ url: `${company.url}${path}`, changeFrequency: path === '/' || path === '/en' ? 'monthly' : 'yearly', priority: path === '/' ? 1 : path === '/en' ? 0.9 : 0.7 }));
}
