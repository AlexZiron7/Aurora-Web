import type { Service, PortfolioItem } from './types';
import {
  DataAnalysisIcon,
  MobileDevIcon,
  TechConsultingIcon,
  WebDesignIcon,
  OptimizationIcon,
  SupportIcon,
} from './components/icons/ServiceIcons';
import dataAnalysisImg from './assets/img/data-a.jpg';
import optimizationImg from './assets/img/opt.jpg';
import supportImg from './assets/img/support.jpg';
import webDesignImg from './assets/img/web-d.jpg';
import consultingImg from './assets/img/consulting.jpg';
import appsImg from './assets/img/apps-d.jpg';
import port1 from './assets/img/p-appm.jpg';
import port4  from './assets/img/p-gestionred.jpg';
import port3 from './assets/img/p-marketing.jpg';
import port2 from './assets/img/p-skate.jpg';


// Centralized content for easier updates
export const ASSETS = {
  logo: 'https://picsum.photos/seed/aurora-logo/40/40',
  heroVideo: 'https://storage.googleapis.com/aurora-devs-assets/video-background.mp4',
};

export const CONTACT_INFO = {
  email: 'Info@auroradevs.com',
  phone: '+34 640 61 69 95',
  whatsappLink: 'https://wa.me/34640616995',
  instagramLink: 'https://instagram.com',
};


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
    imageUrl: dataAnalysisImg,
  },
  {
    id: 2,
    title: 'Desarrollo de Apps Móviles',
    icon: MobileDevIcon,
    description: 'Creamos aplicaciones nativas e híbridas para iOS y Android.',
    details: 'Desde la idea inicial hasta el lanzamiento en las tiendas de aplicaciones, nuestro equipo de desarrollo móvil crea experiencias de usuario intuitivas, atractivas y de alto rendimiento. Nos especializamos en tecnologías modernas para asegurar que tu app sea rápida, segura y escalable.',
    imageUrl: appsImg,
  },
  {
    id: 3,
    title: 'Consultoría Tecnológica',
    icon: TechConsultingIcon,
    description: 'Te guiamos en la adopción de tecnologías que impulsan la innovación.',
    details: 'Nuestros consultores tecnológicos trabajan contigo para alinear tu estrategia de TI con tus objetivos de negocio. Ofrecemos asesoramiento experto en arquitectura de sistemas, transformación digital, ciberseguridad y selección de software para optimizar tus operaciones.',
    imageUrl: consultingImg,
  },
  {
    id: 4,
    title: 'Diseño Web a Medida',
    icon: WebDesignIcon,
    description: 'Diseñamos y desarrollamos sitios web únicos, rápidos y responsivos.',
    details: 'Creamos sitios web que no solo lucen increíbles, sino que también están optimizados para la conversión. Nuestro proceso de diseño se centra en el usuario, garantizando una navegación intuitiva y una experiencia memorable que refleja la identidad de tu marca.',
    imageUrl: webDesignImg,
  },
  {
    id: 5,
    title: 'Optimización y Rendimiento',
    icon: OptimizationIcon,
    description: 'Mejoramos la velocidad y el rendimiento de tu sitio o aplicación.',
    details: 'Un sitio web lento puede costar clientes. Realizamos auditorías de rendimiento exhaustivas para identificar cuellos de botella y aplicar optimizaciones clave. Mejoramos los tiempos de carga, la respuesta del servidor y la eficiencia del código para ofrecer una experiencia de usuario fluida.',
    imageUrl: optimizationImg,
  },
  {
    id: 6,
    title: 'Mantenimiento y Soporte',
    icon: SupportIcon,
    description: 'Aseguramos que tu plataforma digital esté siempre operativa y segura.',
    details: 'Ofrecemos planes de mantenimiento y soporte continuo para que puedas concentrarte en tu negocio. Nos encargamos de las actualizaciones de seguridad, copias de seguridad, monitoreo de tiempo de actividad y resolución de problemas técnicos, garantizando la estabilidad de tu presencia digital.',
    imageUrl: supportImg,
  },
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 1,
    title: 'Proyecto E-commerce "Nova"',
    category: 'Desarrollo movil',
    imageUrl: port1,
    description: 'Desarrollamos una plataforma de e-commerce completa para Nova, una marca de moda emergente. La solución incluyó un diseño personalizado, integración con pasarelas de pago, sistema de gestión de inventario y optimización SEO para aumentar la visibilidad y las ventas online.'
  },
  {
    id: 2,
    title: 'Proyecto de sitio web "Obba"',
    category: 'Desarrollo Web',
    imageUrl: port2,
    description: 'Desarrollamos un sitio web personalizado para una escuela de skateboard, integrando un completo sistema de e-commerce. La plataforma permite a los usuarios inscribirse en clases, comprar equipamiento y gestionar sus pedidos de forma intuitiva, mejorando la experiencia del cliente y las operaciones del negocio.'

  },
  {
    id: 3,
    title: 'Proyecto de sitio web "EffortAscend"',
    category: 'Análisis de Datos',
    imageUrl: port3,
    description: 'Desarrollamos un sitio web personalizado y escalable para la agencia de marketing digital EffortAscend. La plataforma está diseñada para mostrar un portafolio de proyectos exitosos, detallar sus servicios, captar nuevos clientes a través de un formulario de contacto optimizado y posicionarse como líder en la industria. El sitio incluye un blog para la publicación de contenido de valor, lo que mejora la estrategia SEO de la agencia.'
  },
  {
    id: 4,
    title: 'Gestion de cuenta publicitaria "migracion"',
    category: 'Marketing Digital',
    imageUrl: port4,
    description: 'Transformamos el caos publicitario en un éxito medible. Tomamos el control de tus campañas, desde la creación hasta la optimización, para asegurar que cada dólar invertido genere el máximo impacto. A través de un análisis exhaustivo y una estrategia personalizada, convertimos la complejidad de la gestión publicitaria en resultados claros, visibles y rentables.'
  },
];