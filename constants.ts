import type { Service, PortfolioItem } from './types';
import {
  DataAnalysisIcon,
  MobileDevIcon,
  TechConsultingIcon,
  WebDesignIcon,
  OptimizationIcon,
  SupportIcon,
} from './components/icons/ServiceIcons';

export const NAV_LINKS = [
  { href: '#home', label: 'Inicio' },
  { href: '#services', label: 'Servicios' },
  { href: '#portfolio', label: 'Portafolio' },
  { href: '#contact', label: 'Contacto' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    title: 'Análisis de Datos',
    icon: DataAnalysisIcon,
    description: 'Transformamos datos en decisiones estratégicas para tu negocio.',
    details: 'Nuestro servicio de Análisis de Datos te ayuda a comprender a tu audiencia, optimizar tus campañas y maximizar el ROI. Utilizamos herramientas de vanguardia para recopilar, procesar y visualizar datos, proporcionando insights claros y accionables que impulsan el crecimiento.',
    imageUrl: 'https://picsum.photos/seed/data-analysis/800/600',
  },
  {
    id: 2,
    title: 'Desarrollo de Apps Móviles',
    icon: MobileDevIcon,
    description: 'Creamos aplicaciones nativas e híbridas para iOS y Android.',
    details: 'Desde la idea inicial hasta el lanzamiento en las tiendas de aplicaciones, nuestro equipo de desarrollo móvil crea experiencias de usuario intuitivas, atractivas y de alto rendimiento. Nos especializamos en tecnologías modernas para asegurar que tu app sea rápida, segura y escalable.',
    imageUrl: 'https://picsum.photos/seed/mobile-dev/800/600',
  },
  {
    id: 3,
    title: 'Consultoría Tecnológica',
    icon: TechConsultingIcon,
    description: 'Te guiamos en la adopción de tecnologías que impulsan la innovación.',
    details: 'Nuestros consultores tecnológicos trabajan contigo para alinear tu estrategia de TI con tus objetivos de negocio. Ofrecemos asesoramiento experto en arquitectura de sistemas, transformación digital, ciberseguridad y selección de software para optimizar tus operaciones.',
    imageUrl: 'https://picsum.photos/seed/tech-consulting/800/600',
  },
  {
    id: 4,
    title: 'Diseño Web a Medida',
    icon: WebDesignIcon,
    description: 'Diseñamos y desarrollamos sitios web únicos, rápidos y responsivos.',
    details: 'Creamos sitios web que no solo lucen increíbles, sino que también están optimizados para la conversión. Nuestro proceso de diseño se centra en el usuario, garantizando una navegación intuitiva y una experiencia memorable que refleja la identidad de tu marca.',
    imageUrl: 'https://picsum.photos/seed/web-design/800/600',
  },
  {
    id: 5,
    title: 'Optimización y Rendimiento',
    icon: OptimizationIcon,
    description: 'Mejoramos la velocidad y el rendimiento de tu sitio o aplicación.',
    details: 'Un sitio web lento puede costar clientes. Realizamos auditorías de rendimiento exhaustivas para identificar cuellos de botella y aplicar optimizaciones clave. Mejoramos los tiempos de carga, la respuesta del servidor y la eficiencia del código para ofrecer una experiencia de usuario fluida.',
    imageUrl: 'https://picsum.photos/seed/performance/800/600',
  },
  {
    id: 6,
    title: 'Mantenimiento y Soporte',
    icon: SupportIcon,
    description: 'Aseguramos que tu plataforma digital esté siempre operativa y segura.',
    details: 'Ofrecemos planes de mantenimiento y soporte continuo para que puedas concentrarte en tu negocio. Nos encargamos de las actualizaciones de seguridad, copias de seguridad, monitoreo de tiempo de actividad y resolución de problemas técnicos, garantizando la estabilidad de tu presencia digital.',
    imageUrl: 'https://picsum.photos/seed/support/800/600',
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: 'Proyecto E-commerce "Nova"',
    category: 'Desarrollo Web',
    imageUrl: 'https://picsum.photos/seed/nova/800/600',
    description: 'Desarrollamos una plataforma de e-commerce completa para Nova, una marca de moda emergente. La solución incluyó un diseño personalizado, integración con pasarelas de pago, sistema de gestión de inventario y optimización SEO para aumentar la visibilidad y las ventas online.'
  },
  {
    id: 2,
    title: 'App Móvil "ConnectU"',
    category: 'Desarrollo de Apps',
    imageUrl: 'https://picsum.photos/seed/connectu/800/600',
    description: 'Creamos una aplicación de red social para iOS y Android que facilita la conexión entre profesionales. La app cuenta con perfiles de usuario, mensajería en tiempo real, creación de eventos y un algoritmo de matching inteligente para sugerir conexiones relevantes.'
  },
  {
    id: 3,
    title: 'Dashboard de BI "Insight"',
    category: 'Análisis de Datos',
    imageUrl: 'https://picsum.photos/seed/insight/800/600',
    description: 'Implementamos un dashboard de Business Intelligence para una empresa de logística. La herramienta visualiza en tiempo real los KPIs clave de la cadena de suministro, permitiendo la toma de decisiones basada en datos para optimizar rutas y reducir costos operativos.'
  },
  {
    id: 4,
    title: 'Campaña de Marketing "Zenith"',
    category: 'Marketing Digital',
    imageUrl: 'https://picsum.photos/seed/zenith/800/600',
    description: 'Ejecutamos una campaña de marketing digital 360° para el lanzamiento de un nuevo producto tecnológico. La estrategia incluyó SEO, SEM, marketing de contenidos y gestión de redes sociales, logrando un aumento del 300% en el tráfico web y duplicando los leads en el primer trimestre.'
  },
];