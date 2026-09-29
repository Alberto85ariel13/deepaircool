export type Locale = 'es' | 'en';

export const company = {
  name: 'Deep Air Cool Solutions',
  phone: '(305) 481-2522',
  phoneHref: 'tel:+13054812522',
  email: 'contact@deepaircool.com',
  emailHref: 'mailto:contact@deepaircool.com',
  url: 'https://deepaircool.com',
  googleMapsUrl: 'https://maps.app.goo.gl/oFMaDLb18t4ZUCBj7',
  areas: ['Miami', 'Hialeah', 'Doral', 'Kendall', 'Coral Gables', 'Aventura', 'Miami Lakes', 'Homestead', 'Sweetwater', 'Miami Gardens', 'Opa-locka', 'Medley'],
};

export type Service = {
  slug: string;
  slugEn: string;
  image: string;
  imageAlt: Record<Locale, string>;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  detail: Record<Locale, string>;
  points: Record<Locale, string[]>;
};

export const services: Service[] = [
  {
    slug: 'instalacion-aire-acondicionado', slugEn: 'air-conditioning-installation', image: '/images/ac-installation.webp',
    imageAlt: { es: 'Unidad exterior de aire acondicionado instalada en una vivienda', en: 'Outdoor air conditioning unit installed at a home' },
    title: { es: 'Instalación de aire acondicionado', en: 'Air conditioning installation' },
    summary: { es: 'Sistemas split, multi-split y centrales para espacios residenciales y comerciales.', en: 'Split, multi-split and central systems for homes and commercial spaces.' },
    detail: { es: 'Diseñamos e instalamos sistemas de climatización según las necesidades del espacio. El servicio incluye opciones de sistemas split, multi-split y centrales, además de ductos, difusores y termostatos.', en: 'We design and install climate systems around each space. Our work includes split, multi-split and central systems, as well as ducts, diffusers and thermostats.' },
    points: { es: ['Sistemas split y multi-split', 'Sistemas centrales', 'Ductos y termostatos'], en: ['Split and multi-split systems', 'Central systems', 'Ducts and thermostats'] },
  },
  {
    slug: 'refrigeracion-comercial', slugEn: 'commercial-refrigeration', image: '/images/compressor.webp',
    imageAlt: { es: 'Compresor de refrigeración durante un trabajo de servicio', en: 'Refrigeration compressor during service work' },
    title: { es: 'Refrigeración comercial e industrial', en: 'Commercial & industrial refrigeration' },
    summary: { es: 'Instalación y mantenimiento de cámaras frías y equipos de refrigeración.', en: 'Installation and maintenance for cold rooms and refrigeration equipment.' },
    detail: { es: 'Atendemos sistemas de refrigeración para restaurantes, supermercados y otros espacios comerciales e industriales, incluidas cámaras frías, vitrinas y compresores.', en: 'We work on refrigeration systems for restaurants, supermarkets and other commercial and industrial spaces, including cold rooms, display cases and compressors.' },
    points: { es: ['Cámaras frías', 'Vitrinas y mostradores', 'Compresores'], en: ['Cold rooms', 'Display cases', 'Compressors'] },
  },
  {
    slug: 'mantenimiento-hvac', slugEn: 'preventive-maintenance', image: '/images/technician.webp',
    imageAlt: { es: 'Técnico de Deep Air Cool Solutions trabajando en una unidad interior', en: 'Deep Air Cool Solutions technician working on an indoor unit' },
    title: { es: 'Mantenimiento preventivo', en: 'Preventive maintenance' },
    summary: { es: 'Cuidado periódico para conservar el rendimiento de equipos HVAC y refrigeración.', en: 'Scheduled care to maintain HVAC and refrigeration performance.' },
    detail: { es: 'El mantenimiento periódico ayuda a detectar problemas y conservar la eficiencia de los equipos. El trabajo puede incluir limpieza de filtros y bobinas, revisión de refrigerante y diagnóstico electrónico.', en: 'Scheduled maintenance helps identify issues and keep equipment efficient. Work may include filter and coil cleaning, refrigerant checks and electronic diagnostics.' },
    points: { es: ['Filtros y bobinas', 'Revisión de refrigerante', 'Diagnóstico electrónico'], en: ['Filters and coils', 'Refrigerant checks', 'Electronic diagnostics'] },
  },
  {
    slug: 'reparacion-hvac', slugEn: 'hvac-repair', image: '/images/air-handler.webp',
    imageAlt: { es: 'Equipo HVAC abierto para diagnóstico y reparación', en: 'HVAC equipment opened for diagnosis and repair' },
    title: { es: 'Reparación de equipos', en: 'HVAC & equipment repair' },
    summary: { es: 'Diagnóstico y reparación de fallas en climatización y refrigeración.', en: 'Diagnosis and repair of cooling and refrigeration faults.' },
    detail: { es: 'Diagnosticamos fallas en sistemas de aire acondicionado y refrigeración para identificar la reparación necesaria y devolver el equipo a servicio.', en: 'We diagnose faults in air conditioning and refrigeration systems, identify the needed repair and work to return the equipment to service.' },
    points: { es: ['Diagnóstico en sitio', 'Aire acondicionado', 'Refrigeración'], en: ['On-site diagnosis', 'Air conditioning', 'Refrigeration'] },
  },
  {
    slug: 'limpieza-ductos', slugEn: 'air-duct-cleaning', image: '/images/technician-vent.webp',
    imageAlt: { es: 'Técnico trabajando junto a un ducto interior', en: 'Technician working beside an indoor duct' },
    title: { es: 'Limpieza de ductos', en: 'Air duct cleaning' },
    summary: { es: 'Limpieza del sistema de distribución de aire y sus componentes.', en: 'Cleaning for air distribution systems and components.' },
    detail: { es: 'Limpiamos ductos de aire y componentes del sistema de distribución para espacios residenciales y comerciales en Miami.', en: 'We clean air ducts and air distribution system components for residential and commercial spaces in Miami.' },
    points: { es: ['Ductos de aire', 'Componentes del sistema', 'Servicio residencial y comercial'], en: ['Air ducts', 'System components', 'Residential and commercial service'] },
  },
  {
    slug: 'eficiencia-energetica', slugEn: 'energy-efficiency', image: '/images/condenser.webp',
    imageAlt: { es: 'Unidad condensadora de aire acondicionado en revisión', en: 'Air conditioning condenser unit under inspection' },
    title: { es: 'Eficiencia energética', en: 'Energy efficiency' },
    summary: { es: 'Revisión y optimización de sistemas de climatización existentes.', en: 'Assessment and optimization of existing cooling systems.' },
    detail: { es: 'Revisamos sistemas de aire acondicionado existentes y las opciones de actualización de equipos o tecnología inverter para mejorar su funcionamiento.', en: 'We assess existing air conditioning systems and options for equipment upgrades or inverter technology to improve how they operate.' },
    points: { es: ['Revisión del sistema', 'Actualización de equipos', 'Tecnología inverter'], en: ['System assessment', 'Equipment upgrades', 'Inverter technology'] },
  },
  {
    slug: 'emergencia-hvac', slugEn: 'emergency-hvac-service', image: '/images/service-equipment.webp',
    imageAlt: { es: 'Equipo de servicio HVAC preparado para una intervención', en: 'HVAC service equipment ready for a job' },
    title: { es: 'Emergencias 24/7', en: '24/7 emergency service' },
    summary: { es: 'Atención para fallas críticas de aire acondicionado y refrigeración, día y noche.', en: 'Help for critical air conditioning and refrigeration faults, day or night.' },
    detail: { es: 'La atención de emergencia está disponible las 24 horas, todos los días. Si un sistema de climatización o refrigeración falla, llámanos para explicar el problema y solicitar servicio.', en: 'Emergency service is available around the clock. If a cooling or refrigeration system fails, call us to explain the issue and request help.' },
    points: { es: ['Disponible 24/7', 'HVAC y refrigeración', 'Llamada directa'], en: ['Available 24/7', 'HVAC and refrigeration', 'Direct phone contact'] },
  },
];

export const copy = {
  es: {
    nav: ['Inicio', 'Servicios', 'Nosotros', 'Proyectos', 'Reseñas', 'Contacto'],
    call: 'Llamar ahora', request: 'Solicitar servicio', menu: 'Abrir menú', close: 'Cerrar menú',
    heroEyebrow: 'MIAMI · HVAC · REFRIGERACIÓN', heroTitle: 'Cuando el aire importa, respondemos.',
    heroText: 'Instalación, mantenimiento y reparación de aire acondicionado y refrigeración para hogares y negocios en Miami. Emergencias disponibles 24/7.',
    heroProof: ['Servicio 24/7', 'Residencial y comercial', 'Miami y alrededores'],
    intro: 'El confort de una casa y la continuidad de un negocio dependen de sistemas que funcionan bien.',
    introText: 'Deep Air Cool Solutions trabaja en climatización y refrigeración con atención para espacios residenciales, comerciales e industriales en el área de Miami.',
    servicesTitle: 'Soluciones para cada sistema.', servicesText: 'Del diagnóstico a la instalación: servicio técnico para mantener tus espacios a la temperatura adecuada.',
    explore: 'Explorar servicio', workTitle: 'Nuestro trabajo, en campo.', workText: 'Equipos reales, intervenciones reales. Una mirada al trabajo técnico detrás de cada servicio.',
    aboutTitle: 'Técnicos en acción. Soluciones que se sienten.', aboutText: 'Deep Air Cool Solutions se especializa en sistemas HVAC, aire acondicionado y refrigeración. Trabajamos en instalaciones, mantenimiento y reparaciones para clientes residenciales, comerciales e industriales.',
    areaTitle: 'Cerca de donde nos necesitas.', areaText: 'Atendemos Miami y comunidades del área metropolitana.',
    faqTitle: 'Preguntas frecuentes', faq: [
      ['¿Ofrecen atención de emergencia?', 'Sí. Deep Air Cool Solutions indica disponibilidad para emergencias HVAC y de refrigeración las 24 horas, todos los días.'],
      ['¿Atienden viviendas y negocios?', 'Sí. El servicio cubre sistemas residenciales, comerciales e industriales.'],
      ['¿Cómo solicito servicio?', 'Llama al (305) 481-2522 o escribe a contact@deepaircool.com para explicar qué necesita tu equipo.'],
    ],
    closingTitle: '¿Tu sistema necesita atención?', closingText: 'Habla directamente con Deep Air Cool Solutions. Servicio de emergencia disponible 24/7.',
    hours: 'Lun–Vie: 7am–8pm · Sáb–Dom: 8am–6pm', emergencyHours: 'Emergencias: 24/7',
    serviceArea: 'Áreas de servicio', contact: 'Contacto', services: 'Servicios', viewAll: 'Ver todos los servicios',
    serviceCta: 'Hablemos de tu equipo.', serviceCtaText: 'Cuéntanos qué está pasando. La forma más rápida de comenzar es llamarnos.',
    back: 'Volver al inicio', workLabels: ['Equipo de servicio', 'Unidad HVAC', 'Diagnóstico de equipo', 'Serpentín de aire', 'Unidad exterior', 'Rack de compresores de refrigeración comercial'],
  },
  en: {
    nav: ['Home', 'Services', 'About', 'Work', 'Reviews', 'Contact'],
    call: 'Call now', request: 'Request service', menu: 'Open menu', close: 'Close menu',
    heroEyebrow: 'MIAMI · HVAC · REFRIGERATION', heroTitle: 'When air matters, we answer.',
    heroText: 'Air conditioning and refrigeration installation, maintenance and repair for homes and businesses in Miami. Emergency service available 24/7.',
    heroProof: ['24/7 service', 'Residential & commercial', 'Miami & nearby areas'],
    intro: 'The comfort of a home and the continuity of a business depend on systems that work.',
    introText: 'Deep Air Cool Solutions works on cooling and refrigeration for residential, commercial and industrial spaces throughout the Miami area.',
    servicesTitle: 'Solutions for every system.', servicesText: 'From diagnosis to installation, technical service to keep your space at the right temperature.',
    explore: 'Explore service', workTitle: 'Our work, on site.', workText: 'Real equipment. Real field work. A look at the technical work behind the service.',
    aboutTitle: 'Technicians at work. Comfort you can feel.', aboutText: 'Deep Air Cool Solutions specializes in HVAC, air conditioning and refrigeration. We handle installations, maintenance and repairs for residential, commercial and industrial clients.',
    areaTitle: 'Close to where you need us.', areaText: 'Serving Miami and communities throughout the metro area.',
    faqTitle: 'Frequently asked questions', faq: [
      ['Do you offer emergency service?', 'Yes. Deep Air Cool Solutions lists 24/7 availability for HVAC and refrigeration emergencies.'],
      ['Do you serve homes and businesses?', 'Yes. Service covers residential, commercial and industrial systems.'],
      ['How can I request service?', 'Call (305) 481-2522 or email contact@deepaircool.com to describe what your equipment needs.'],
    ],
    closingTitle: 'Does your system need attention?', closingText: 'Speak directly with Deep Air Cool Solutions. Emergency service is available 24/7.',
    hours: 'Mon–Fri: 7am–8pm · Sat–Sun: 8am–6pm', emergencyHours: 'Emergencies: 24/7',
    serviceArea: 'Service areas', contact: 'Contact', services: 'Services', viewAll: 'Explore services',
    serviceCta: 'Let’s talk about your system.', serviceCtaText: 'Tell us what is happening. Calling is the fastest way to get started.',
    back: 'Back to home', workLabels: ['Service equipment', 'HVAC unit', 'Equipment diagnosis', 'Air conditioning coil', 'Outdoor unit', 'Commercial refrigeration compressor rack'],
  },
} as const;

export function homePath(locale: Locale) { return locale === 'es' ? '/' : '/en'; }
export function servicePath(locale: Locale, slug: string) {
  const service = services.find(item => item.slug === slug || item.slugEn === slug);
  return `${locale === 'es' ? '/servicios' : '/en/services'}/${service ? locale === 'es' ? service.slug : service.slugEn : slug}`;
}
