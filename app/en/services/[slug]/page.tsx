import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/ServicePage';
import { servicePath, services } from '@/data/site';
import { serviceSeo } from '@/data/seo';
import { socialMetadata } from '@/lib/metadata';

export function generateStaticParams() { return services.map(service => ({ slug: service.slugEn })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = services.find(item => item.slugEn === slug); if (!service) return {};
  const seo = serviceSeo[service.slug].en;
  return { title: seo.title, description: seo.description, alternates: { canonical: servicePath('en', slug), languages: { es: servicePath('es', slug), en: servicePath('en', slug) } }, ...socialMetadata('en', `${seo.title} | Deep Air Cool Solutions`, seo.description, servicePath('en', slug)) };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(item => item.slugEn === slug); if (!service) notFound(); return <ServicePage locale="en" service={service} />; }
