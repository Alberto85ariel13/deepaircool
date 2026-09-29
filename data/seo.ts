import type { Locale } from './site';

type SearchCopy = { title: string; description: string; heading: string };

// One search intent per service page, tied to work the company offers.
export const homeSeo: Record<Locale, SearchCopy> = {
  es: { title: 'Aire acondicionado, HVAC y refrigeración en Miami', description: 'Instalación, reparación y mantenimiento de aire acondicionado, HVAC y refrigeración en Miami para hogares y negocios. Emergencias 24/7. Llama al (305) 481-2522.', heading: 'Servicio de aire acondicionado y refrigeración en Miami' },
  en: { title: 'Air Conditioning, HVAC & Refrigeration in Miami', description: 'Air conditioning, HVAC and refrigeration installation, repair and maintenance in Miami for homes and businesses. 24/7 emergency service. Call (305) 481-2522.', heading: 'Air conditioning and refrigeration service in Miami' },
};

export const serviceSeo: Record<string, Record<Locale, SearchCopy>> = {
  'instalacion-aire-acondicionado': {
    es: { title: 'Instalación de aire acondicionado en Miami', description: 'Instalación de aire acondicionado split, multi-split y central para viviendas y negocios en Miami. Consulta por sistemas, ductos y termostatos: (305) 481-2522.', heading: 'Instalación de aire acondicionado para tu espacio' },
    en: { title: 'Air Conditioning Installation in Miami', description: 'Split, multi-split and central AC installation for Miami homes and businesses. Ask about systems, ducts and thermostats. Call (305) 481-2522.', heading: 'Air conditioning installation for your space' },
  },
  'refrigeracion-comercial': {
    es: { title: 'Refrigeración comercial e industrial en Miami', description: 'Instalación y mantenimiento de refrigeración comercial en Miami: cámaras frías, vitrinas y compresores para restaurantes y negocios. Llama al (305) 481-2522.', heading: 'Refrigeración comercial para negocios en Miami' },
    en: { title: 'Commercial & Industrial Refrigeration in Miami', description: 'Commercial refrigeration installation and maintenance in Miami for cold rooms, display cases and compressors. Service for restaurants and businesses. Call (305) 481-2522.', heading: 'Commercial refrigeration for Miami businesses' },
  },
  'mantenimiento-hvac': {
    es: { title: 'Mantenimiento preventivo HVAC en Miami', description: 'Mantenimiento de aire acondicionado, HVAC y refrigeración en Miami. Limpieza de filtros y bobinas, revisión de refrigerante y diagnóstico. Llama al (305) 481-2522.', heading: 'Mantenimiento preventivo de equipos HVAC' },
    en: { title: 'Preventive HVAC Maintenance in Miami', description: 'AC, HVAC and refrigeration maintenance in Miami, including filter and coil cleaning, refrigerant checks and diagnostics. Call (305) 481-2522.', heading: 'Preventive maintenance for HVAC equipment' },
  },
  'reparacion-hvac': {
    es: { title: 'Reparación de aire acondicionado y HVAC en Miami', description: 'Diagnóstico y reparación de aire acondicionado, sistemas HVAC y refrigeración en Miami. Atención residencial y comercial. Llama al (305) 481-2522.', heading: 'Reparación de aire acondicionado y HVAC' },
    en: { title: 'Air Conditioning & HVAC Repair in Miami', description: 'AC, HVAC and refrigeration diagnostics and repair in Miami for homes and businesses. Speak with Deep Air Cool Solutions at (305) 481-2522.', heading: 'Air conditioning and HVAC repair' },
  },
  'limpieza-ductos': {
    es: { title: 'Limpieza de ductos de aire en Miami', description: 'Limpieza de ductos de aire y componentes del sistema de climatización para viviendas y negocios en Miami. Solicita servicio al (305) 481-2522.', heading: 'Limpieza de ductos de aire en Miami' },
    en: { title: 'Air Duct Cleaning in Miami', description: 'Air duct cleaning for residential and commercial air distribution systems in Miami. Call Deep Air Cool Solutions at (305) 481-2522.', heading: 'Air duct cleaning in Miami' },
  },
  'eficiencia-energetica': {
    es: { title: 'Eficiencia energética HVAC en Miami', description: 'Revisión de sistemas de aire acondicionado en Miami y opciones de actualización de equipos o tecnología inverter para mejorar su funcionamiento. Llama al (305) 481-2522.', heading: 'Mejora la eficiencia de tu sistema HVAC' },
    en: { title: 'HVAC Energy Efficiency in Miami', description: 'Miami AC system assessments and equipment or inverter technology upgrade options to improve performance. Call Deep Air Cool Solutions at (305) 481-2522.', heading: 'Improve your HVAC system efficiency' },
  },
  'emergencia-hvac': {
    es: { title: 'Servicio HVAC de emergencia 24/7 en Miami', description: 'Atención de emergencia 24/7 para fallas de aire acondicionado, HVAC y refrigeración en Miami. Llama ahora a Deep Air Cool Solutions: (305) 481-2522.', heading: 'Emergencias de aire acondicionado y refrigeración 24/7' },
    en: { title: '24/7 Emergency HVAC Service in Miami', description: '24/7 emergency help for air conditioning, HVAC and refrigeration failures in Miami. Call Deep Air Cool Solutions now at (305) 481-2522.', heading: '24/7 air conditioning and refrigeration emergencies' },
  },
};
