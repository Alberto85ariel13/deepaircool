import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/ServicePage';
import { servicePath, services } from '@/data/site';
import { serviceSeo } from '@/data/seo';
import { socialMetadata } from '@/lib/metadata';

export function generateStaticParams() { return services.map(service => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = services.find(item => item.slug === slug); if (!service) return {};
  const seo = serviceSeo[service.slug].es;
  return { title: seo.title, description: seo.description, alternates: { canonical: servicePath('es', slug), languages: { es: servicePath('es', slug), en: servicePath('en', slug) } }, ...socialMetadata('es', `${seo.title} | Deep Air Cool Solutions`, seo.description, servicePath('es', slug)) };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find(item => item.slug === slug); if (!service) notFound(); return <ServicePage locale="es" service={service} />; }
