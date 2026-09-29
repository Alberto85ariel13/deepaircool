import type { Locale } from './site';

type Localized = Record<Locale, string>;

export type Location = {
  slug: string;
  name: string;
  image: string;
  serviceSlugs: [string, string, string];
  headline: Localized;
  intro: Localized;
  context: Localized;
  sectionTitle: Localized;
  question: Localized;
  answer: Localized;
};

// These are the existing service areas. Descriptions discuss available work, not
// unverified local offices, projects, neighborhoods, or response times.
export const locations: Location[] = [
  {
    slug: 'miami-fl', name: 'Miami', image: '/images/van.webp', serviceSlugs: ['reparacion-hvac', 'instalacion-aire-acondicionado', 'refrigeracion-comercial'],
    headline: { es: 'Aire acondicionado, HVAC y refrigeración en Miami, FL', en: 'AC, HVAC and refrigeration service in Miami, FL' },
    intro: { es: 'Servicio de aire acondicionado, HVAC y refrigeración para viviendas y negocios en Miami. Si un equipo deja de enfriar o necesitas planificar una instalación, puedes hablar directamente con Deep Air Cool Solutions.', en: 'Air conditioning, HVAC and refrigeration service for Miami homes and businesses. If a system stops cooling or you are planning an installation, you can speak directly with Deep Air Cool Solutions.' },
    context: { es: 'Empezamos por entender el tipo de sistema y el problema: una falla de climatización, un equipo nuevo o refrigeración comercial. A partir de esa conversación puedes elegir el servicio adecuado y solicitar atención por teléfono.', en: 'Start by describing the system and the issue: a cooling fault, new equipment or commercial refrigeration. From there, choose the relevant service and request help by phone.' },
    sectionTitle: { es: 'Climatización y refrigeración en Miami', en: 'Cooling and refrigeration in Miami' },
    question: { es: '¿Puedo consultar por aire acondicionado y refrigeración comercial en Miami?', en: 'Can I ask about both AC and commercial refrigeration in Miami?' },
    answer: { es: 'Sí. Atendemos sistemas de aire acondicionado y equipos de refrigeración comercial. Llama e indica qué equipo necesita servicio.', en: 'Yes. We work on air conditioning and commercial refrigeration systems. Call and tell us which equipment needs service.' },
  },
  {
    slug: 'hialeah-fl', name: 'Hialeah', image: '/images/air-handler.webp', serviceSlugs: ['reparacion-hvac', 'mantenimiento-hvac', 'emergencia-hvac'],
    headline: { es: 'Reparación y mantenimiento de aire acondicionado en Hialeah, FL', en: 'AC repair and maintenance in Hialeah, FL' },
    intro: { es: '¿Tu aire acondicionado presenta una falla en Hialeah? Deep Air Cool Solutions ofrece diagnóstico, reparación y mantenimiento de sistemas HVAC para hogares y negocios de esta área de servicio.', en: 'Is your air conditioner having trouble in Hialeah? Deep Air Cool Solutions offers HVAC diagnostics, repair and maintenance for homes and businesses in this service area.' },
    context: { es: 'Una llamada permite explicar los síntomas antes de solicitar servicio. Si el equipo requiere cuidado periódico, también puedes consultar por limpieza de filtros y bobinas, revisión de refrigerante y diagnóstico electrónico.', en: 'A call lets you explain the symptoms before requesting service. For scheduled care, you can also ask about filter and coil cleaning, refrigerant checks and electronic diagnostics.' },
    sectionTitle: { es: 'De la falla al mantenimiento del sistema', en: 'From a system fault to ongoing maintenance' },
    question: { es: '¿Qué información debo dar si mi AC falla en Hialeah?', en: 'What should I explain if my AC fails in Hialeah?' },
    answer: { es: 'Indica el tipo de equipo, qué está ocurriendo y si dejó de enfriar por completo. Puedes llamar al (305) 481-2522 para solicitar diagnóstico.', en: 'Describe the equipment, what is happening and whether cooling stopped completely. Call (305) 481-2522 to request a diagnosis.' },
  },
  {
    slug: 'doral-fl', name: 'Doral', image: '/images/compressor.webp', serviceSlugs: ['refrigeracion-comercial', 'reparacion-hvac', 'instalacion-aire-acondicionado'],
    headline: { es: 'Refrigeración comercial y servicio HVAC en Doral, FL', en: 'Commercial refrigeration and HVAC service in Doral, FL' },
    intro: { es: 'En Doral puedes solicitar servicio para refrigeración comercial y sistemas de aire acondicionado. Atendemos consultas sobre cámaras frías, vitrinas, compresores y equipos HVAC.', en: 'In Doral, you can request service for commercial refrigeration and air conditioning. Ask about cold rooms, display cases, compressors and HVAC equipment.' },
    context: { es: 'Si un equipo de refrigeración presenta una falla, describe el sistema y lo que observas al llamar. También ofrecemos instalación de climatización y diagnóstico de aire acondicionado para espacios comerciales y residenciales.', en: 'If refrigeration equipment develops a fault, describe the system and what you observe when calling. We also offer cooling installation and AC diagnostics for commercial and residential spaces.' },
    sectionTitle: { es: 'Sistemas comerciales y aire acondicionado', en: 'Commercial systems and air conditioning' },
    question: { es: '¿Atienden cámaras frías y vitrinas en Doral?', en: 'Do you service cold rooms and display cases in Doral?' },
    answer: { es: 'Sí. Esos equipos forman parte de nuestro servicio de refrigeración comercial. Llama para explicar el problema o consultar por mantenimiento.', en: 'Yes. Those systems are part of our commercial refrigeration service. Call to describe a problem or ask about maintenance.' },
  },
  {
    slug: 'kendall-fl', name: 'Kendall', image: '/images/ac-installation.webp', serviceSlugs: ['instalacion-aire-acondicionado', 'reparacion-hvac', 'limpieza-ductos'],
    headline: { es: 'Instalación y reparación de aire acondicionado en Kendall, FL', en: 'AC installation and repair in Kendall, FL' },
    intro: { es: 'Para una vivienda o negocio en Kendall, Deep Air Cool Solutions ofrece instalación y reparación de aire acondicionado, además de limpieza de ductos. Puedes consultar por el sistema que tienes o por uno que planeas instalar.', en: 'For a home or business in Kendall, Deep Air Cool Solutions offers AC installation and repair as well as air duct cleaning. Ask about your current system or one you plan to install.' },
    context: { es: 'Las opciones de instalación incluyen sistemas split, multi-split y centrales. Si ya tienes equipo, describe la falla o pregunta por el servicio de los ductos y componentes de distribución de aire.', en: 'Installation options include split, multi-split and central systems. For existing equipment, describe the fault or ask about air ducts and distribution components.' },
    sectionTitle: { es: 'Instalación y cuidado del aire interior', en: 'Installation and air distribution care' },
    question: { es: '¿Qué tipos de AC pueden instalar en Kendall?', en: 'Which types of AC can you install in Kendall?' },
    answer: { es: 'Trabajamos con sistemas split, multi-split y centrales. Cuéntanos cómo es el espacio para conversar sobre las opciones de instalación.', en: 'We work with split, multi-split and central systems. Tell us about the space so we can discuss installation options.' },
  },
  {
    slug: 'coral-gables-fl', name: 'Coral Gables', image: '/images/technician.webp', serviceSlugs: ['mantenimiento-hvac', 'instalacion-aire-acondicionado', 'eficiencia-energetica'],
    headline: { es: 'Mantenimiento e instalación HVAC en Coral Gables, FL', en: 'HVAC maintenance and installation in Coral Gables, FL' },
    intro: { es: 'El mantenimiento y la instalación de aire acondicionado están disponibles para clientes en Coral Gables. Deep Air Cool Solutions también revisa sistemas existentes y opciones de actualización de equipos.', en: 'AC maintenance and installation are available to customers in Coral Gables. Deep Air Cool Solutions also assesses existing systems and equipment upgrade options.' },
    context: { es: 'Si el objetivo es conservar el rendimiento del equipo, consulta por mantenimiento preventivo. Para cambiar o instalar un sistema, podemos hablar de alternativas split, multi-split y centrales y de tecnología inverter.', en: 'If your goal is to maintain system performance, ask about preventive maintenance. For a new or replacement system, we can discuss split, multi-split and central options and inverter technology.' },
    sectionTitle: { es: 'Mantenimiento y opciones para tu equipo', en: 'Maintenance and options for your system' },
    question: { es: '¿Puedo pedir una revisión antes de cambiar mi AC en Coral Gables?', en: 'Can I request an assessment before replacing my AC in Coral Gables?' },
    answer: { es: 'Sí. Ofrecemos revisión de sistemas existentes y podemos conversar sobre opciones de actualización de equipos.', en: 'Yes. We assess existing systems and can discuss equipment upgrade options.' },
  },
  {
    slug: 'aventura-fl', name: 'Aventura', image: '/images/condenser.webp', serviceSlugs: ['reparacion-hvac', 'eficiencia-energetica', 'mantenimiento-hvac'],
    headline: { es: 'Reparación y mantenimiento HVAC en Aventura, FL', en: 'HVAC repair and maintenance in Aventura, FL' },
    intro: { es: 'Si necesitas atención para un sistema de aire acondicionado en Aventura, puedes solicitar diagnóstico, reparación o mantenimiento. También revisamos equipos existentes para evaluar opciones de mejora.', en: 'If an AC system in Aventura needs attention, you can request diagnostics, repair or maintenance. We also assess existing equipment to discuss improvement options.' },
    context: { es: 'La reparación comienza con identificar la falla. Cuando el equipo funciona pero necesita cuidado, el mantenimiento puede incluir filtros, bobinas, refrigerante y una revisión electrónica.', en: 'Repair starts with identifying the fault. When a working system needs care, maintenance may include filters, coils, refrigerant checks and electronic diagnostics.' },
    sectionTitle: { es: 'Diagnóstico, reparación y cuidado periódico', en: 'Diagnostics, repair and scheduled care' },
    question: { es: '¿También ofrecen mantenimiento de AC en Aventura?', en: 'Do you also offer AC maintenance in Aventura?' },
    answer: { es: 'Sí. El mantenimiento preventivo cubre revisiones periódicas de sistemas HVAC y refrigeración. Llama para explicar qué equipo tienes.', en: 'Yes. Preventive maintenance covers scheduled checks for HVAC and refrigeration systems. Call and tell us about your equipment.' },
  },
  {
    slug: 'miami-lakes-fl', name: 'Miami Lakes', image: '/images/technician-vent.webp', serviceSlugs: ['limpieza-ductos', 'mantenimiento-hvac', 'reparacion-hvac'],
    headline: { es: 'Limpieza de ductos y mantenimiento HVAC en Miami Lakes, FL', en: 'Air duct cleaning and HVAC maintenance in Miami Lakes, FL' },
    intro: { es: 'En Miami Lakes atendemos consultas de limpieza de ductos, mantenimiento HVAC y reparación de aire acondicionado. El servicio cubre sistemas de distribución de aire y equipos de climatización.', en: 'In Miami Lakes, ask us about air duct cleaning, HVAC maintenance and AC repair. Service covers air distribution systems and cooling equipment.' },
    context: { es: 'Si notas un problema en el sistema, explica al llamar si se trata del equipo de enfriamiento o de los ductos. Podemos orientar la solicitud hacia limpieza, mantenimiento o diagnóstico de una falla.', en: 'When calling about a system problem, explain whether it concerns the cooling equipment or the air ducts. This helps direct your request toward cleaning, maintenance or fault diagnosis.' },
    sectionTitle: { es: 'Servicio para equipos y ductos de aire', en: 'Service for equipment and air ducts' },
    question: { es: '¿La limpieza de ductos en Miami Lakes incluye componentes del sistema?', en: 'Does air duct cleaning in Miami Lakes cover system components?' },
    answer: { es: 'El servicio contempla ductos y componentes del sistema de distribución de aire. Llama para describir tu instalación.', en: 'The service covers air ducts and air distribution components. Call to describe your setup.' },
  },
  {
    slug: 'homestead-fl', name: 'Homestead', image: '/images/ac-installation.webp', serviceSlugs: ['instalacion-aire-acondicionado', 'emergencia-hvac', 'reparacion-hvac'],
    headline: { es: 'Instalación y reparación de aire acondicionado en Homestead, FL', en: 'AC installation and repair in Homestead, FL' },
    intro: { es: 'Deep Air Cool Solutions recibe solicitudes de instalación y reparación de aire acondicionado en Homestead. Si un equipo falla o estás considerando una nueva instalación, llámanos para explicar lo que necesitas.', en: 'Deep Air Cool Solutions takes AC installation and repair requests in Homestead. If a system fails or you are considering a new installation, call to explain what you need.' },
    context: { es: 'Atendemos fallas en climatización y refrigeración, y ofrecemos opciones de sistemas split, multi-split y centrales. Las emergencias HVAC y de refrigeración pueden comunicarse por teléfono a cualquier hora.', en: 'We work on cooling and refrigeration faults and offer split, multi-split and central systems. HVAC and refrigeration emergencies can be reported by phone at any hour.' },
    sectionTitle: { es: 'Desde un sistema nuevo hasta una reparación', en: 'From a new system to a repair' },
    question: { es: '¿Cómo solicito atención por una falla urgente en Homestead?', en: 'How do I request help for an urgent failure in Homestead?' },
    answer: { es: 'Llama al (305) 481-2522 y explica qué equipo falló. El servicio de emergencia está disponible 24/7.', en: 'Call (305) 481-2522 and explain which system failed. Emergency service is available 24/7.' },
  },
  {
    slug: 'sweetwater-fl', name: 'Sweetwater', image: '/images/air-handler.webp', serviceSlugs: ['reparacion-hvac', 'refrigeracion-comercial', 'mantenimiento-hvac'],
    headline: { es: 'Reparación de AC y refrigeración en Sweetwater, FL', en: 'AC and refrigeration repair in Sweetwater, FL' },
    intro: { es: 'Para equipos de aire acondicionado o refrigeración en Sweetwater, ofrecemos diagnóstico, reparación y mantenimiento. Describe el sistema y el problema para comenzar la solicitud de servicio.', en: 'For air conditioning or refrigeration equipment in Sweetwater, we offer diagnostics, repair and maintenance. Describe the system and the problem to begin a service request.' },
    context: { es: 'Trabajamos tanto con climatización como con equipos de refrigeración comercial. Si el sistema todavía funciona, también puedes consultar por mantenimiento preventivo y revisión de componentes.', en: 'We work with cooling and commercial refrigeration equipment. If your system is still operating, you can also ask about preventive maintenance and component checks.' },
    sectionTitle: { es: 'Diagnóstico para climatización y refrigeración', en: 'Cooling and refrigeration diagnostics' },
    question: { es: '¿Puedo llamar por un compresor de refrigeración en Sweetwater?', en: 'Can I call about a refrigeration compressor in Sweetwater?' },
    answer: { es: 'Sí. Los compresores forman parte de los equipos de refrigeración comercial que atendemos. Describe lo que está ocurriendo al llamar.', en: 'Yes. Compressors are among the commercial refrigeration components we service. Describe what is happening when you call.' },
  },
  {
    slug: 'miami-gardens-fl', name: 'Miami Gardens', image: '/images/condenser.webp', serviceSlugs: ['reparacion-hvac', 'limpieza-ductos', 'instalacion-aire-acondicionado'],
    headline: { es: 'Servicio de AC y limpieza de ductos en Miami Gardens, FL', en: 'AC service and air duct cleaning in Miami Gardens, FL' },
    intro: { es: 'En Miami Gardens puedes consultar por reparación de aire acondicionado, limpieza de ductos e instalación de sistemas nuevos. Atendemos necesidades de climatización residenciales y comerciales.', en: 'In Miami Gardens, ask about AC repair, air duct cleaning and new system installation. We handle residential and commercial cooling needs.' },
    context: { es: 'Si el equipo no enfría, el diagnóstico ayuda a identificar la reparación necesaria. Si estás organizando una instalación o necesitas atención para los ductos, puedes iniciar por el servicio correspondiente.', en: 'If a system is not cooling, diagnostics help identify the repair needed. For a planned installation or air duct service, start with the corresponding service.' },
    sectionTitle: { es: 'Reparación, instalación y distribución de aire', en: 'Repair, installation and air distribution' },
    question: { es: '¿Se puede solicitar limpieza de ductos en Miami Gardens?', en: 'Can I request air duct cleaning in Miami Gardens?' },
    answer: { es: 'Sí. La limpieza de ductos es uno de nuestros servicios para viviendas y espacios comerciales. Llama para explicar el sistema.', en: 'Yes. Air duct cleaning is one of our services for homes and commercial spaces. Call to describe the system.' },
  },
  {
    slug: 'opa-locka-fl', name: 'Opa-locka', image: '/images/service-equipment.webp', serviceSlugs: ['emergencia-hvac', 'reparacion-hvac', 'mantenimiento-hvac'],
    headline: { es: 'Servicio HVAC de emergencia en Opa-locka, FL', en: 'Emergency HVAC service in Opa-locka, FL' },
    intro: { es: 'Cuando un sistema de climatización o refrigeración falla en Opa-locka, puedes llamar para solicitar atención. Deep Air Cool Solutions ofrece reparación, mantenimiento y servicio de emergencia 24/7.', en: 'When a cooling or refrigeration system fails in Opa-locka, call to request help. Deep Air Cool Solutions offers repair, maintenance and 24/7 emergency service.' },
    context: { es: 'Explica si el problema afecta aire acondicionado o refrigeración, qué síntomas observas y si el equipo dejó de funcionar. Para evitar que pequeños problemas pasen inadvertidos, también puedes preguntar por mantenimiento.', en: 'Explain whether the problem affects AC or refrigeration, what symptoms you see and whether the system stopped running. You can also ask about maintenance to check the equipment periodically.' },
    sectionTitle: { es: 'Atención para fallas y mantenimiento', en: 'Help with system faults and maintenance' },
    question: { es: '¿A qué número llamo por una emergencia HVAC en Opa-locka?', en: 'What number should I call for an HVAC emergency in Opa-locka?' },
    answer: { es: 'Llama directamente al (305) 481-2522. La atención de emergencia HVAC y de refrigeración está disponible 24/7.', en: 'Call (305) 481-2522 directly. Emergency HVAC and refrigeration service is available 24/7.' },
  },
  {
    slug: 'medley-fl', name: 'Medley', image: '/images/compressor.webp', serviceSlugs: ['refrigeracion-comercial', 'mantenimiento-hvac', 'eficiencia-energetica'],
    headline: { es: 'Refrigeración comercial y mantenimiento HVAC en Medley, FL', en: 'Commercial refrigeration and HVAC maintenance in Medley, FL' },
    intro: { es: 'Para sistemas comerciales de refrigeración y climatización en Medley, ofrecemos mantenimiento, revisión de equipos y servicio de refrigeración. Puedes consultar por cámaras frías, vitrinas y compresores.', en: 'For commercial refrigeration and cooling systems in Medley, we offer maintenance, equipment assessments and refrigeration service. Ask about cold rooms, display cases and compressors.' },
    context: { es: 'Una revisión periódica puede incluir limpieza de filtros y bobinas, refrigerante y diagnóstico electrónico. También conversamos sobre opciones de actualización de equipos y tecnología inverter para sistemas de aire acondicionado existentes.', en: 'Scheduled care may include filter and coil cleaning, refrigerant checks and electronic diagnostics. We can also discuss equipment upgrades and inverter technology for existing AC systems.' },
    sectionTitle: { es: 'Cuidado de sistemas comerciales existentes', en: 'Care for existing commercial systems' },
    question: { es: '¿Puedo consultar por mantenimiento de refrigeración en Medley?', en: 'Can I ask about refrigeration maintenance in Medley?' },
    answer: { es: 'Sí. Ofrecemos mantenimiento de equipos de refrigeración comercial y HVAC. Indica el tipo de sistema cuando llames.', en: 'Yes. We offer maintenance for commercial refrigeration and HVAC equipment. Tell us the system type when you call.' },
  },
];

export function locationPath(locale: Locale, slug: string) {
  return `${locale === 'es' ? '/locations' : '/en/locations'}/${slug}`;
}
