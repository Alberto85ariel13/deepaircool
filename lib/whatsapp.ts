import type { Locale } from '@/data/site';

export type ServiceRequest = {
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
};

export function buildWhatsAppUrl(number: string, locale: Locale, request: ServiceRequest) {
  const es = locale === 'es';
  const lines = [
    es ? 'Hola, Deep Air Cool Solutions. Quiero solicitar servicio.' : 'Hello, Deep Air Cool Solutions. I would like to request service.',
    '',
    `${es ? 'Nombre' : 'Name'}: ${request.name.trim()}`,
    `${es ? 'Teléfono' : 'Phone'}: ${request.phone.trim()}`,
    `${es ? 'Servicio' : 'Service'}: ${request.service.trim()}`,
    request.location.trim() ? `${es ? 'Ubicación' : 'Location'}: ${request.location.trim()}` : '',
    request.message.trim() ? `${es ? 'Mensaje' : 'Message'}: ${request.message.trim()}` : '',
  ].filter((line, index) => line || index === 1);

  return `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(lines.join('\n'))}`;
}
