import type { IconName } from '@/icon-name'
import type { Translations } from '~/i18n/types'

const servicesList = [
  {
    title: 'Desarrollo a Medida',
    description:
      'Construimos aplicaciones web rápidas, accesibles y escalables utilizando tecnologías de código abierto y las mejores prácticas de la industria.',
    iconName: 'code',
  },
  {
    title: 'Herramientas para Desarrolladores',
    description:
      'Creamos herramientas para optimizar flujos de trabajo, mejorar la experiencia del desarrollador y aumentar la calidad del software.',
    iconName: 'gear',
  },
  {
    title: 'Optimización de Rendimiento',
    description:
      'Optimizamos sitios web y aplicaciones para mayor velocidad y eficiencia mediante técnicas avanzadas, monitoreo y mejores prácticas.',
    iconName: 'rocket',
  },
  {
    title: 'Construcción de Comunidad',
    description:
      'Fomentamos la innovación explorando nuevas tecnologías y contribuyendo a proyectos de código abierto que fortalecen la comunidad de desarrolladores.',
    iconName: 'stack',
  },
] satisfies Array<{ title: string; description: string; iconName: IconName }>

const faqs = [
  {
    question: '¿Qué tipo de herramientas desarrollan?',
    answer:
      'Desarrollamos una amplia variedad de herramientas de código abierto, incluyendo aplicaciones web y utilidades para desarrolladores. Nos enfocamos en crear soluciones seguras y de alto rendimiento que resuelvan problemas del mundo real.',
  },
  {
    question: '¿Cómo puedo contribuir a sus proyectos?',
    answer:
      'Puedes contribuir a nuestros proyectos visitando nuestros repositorios en GitHub, donde puedes enviar pull requests, reportar problemas o sugerir nuevas funciones. Aceptamos contribuciones de desarrolladores de todos los niveles de experiencia.',
  },
  {
    question: '¿Ofrecen soporte para sus herramientas?',
    answer:
      'Sí, brindamos soporte comunitario a través de nuestros repositorios en GitHub y documentación. Para empresas que necesiten soporte dedicado, ofrecemos paquetes de soporte premium que incluyen asistencia prioritaria y desarrollo de funciones personalizadas.',
  },
  {
    question: '¿Sus herramientas son gratuitas para proyectos comerciales?',
    answer:
      'La mayoría de nuestras herramientas se publican bajo licencias de código abierto permisivas que permiten su uso comercial. Sin embargo, los términos específicos de la licencia pueden variar según el proyecto, por lo que recomendamos revisar la licencia de cada herramienta que planees usar.',
  },
]

export default {
  'nav.home': 'Inicio',
  'nav.services': 'Servicios',
  'nav.contact': 'Contacto',
  'nav.about': 'Acerca',
  'nav.faq': 'Preguntas',
  'hero.title':
    'Desarrollamos <span class="block">herramientas</span> que tus clientes aman.',
  'hero.subtitle':
    'Creando aplicaciones seguras y de alto rendimiento para la comunidad.',
  'cta.contact': 'Contáctanos',
  'cta.contribute': 'Contribuir',
  'services.title': 'Lo que hacemos',
  'services.subtitle':
    'Creamos soluciones digitales para impulsar negocios y transformar ideas en realidad.',
  'services.list': servicesList,
  'faq.title': 'Preguntas Frecuentes',
  'faq.subtitle':
    'Encuentra respuesta a preguntas frecuentes sobre nuestros servicios y herramientas.',
  'faq.list': faqs,
  'contact.title': 'Contáctanos',
  'contact.subtitle':
    'Contáctanos o contribuye a nuestros proyectos de código abierto.',
  'contact.email': 'Envianos un correo',
  'contact.contribute': 'Contribuye',
  'footer.title': 'Tinogasta Labs',
  'footer.subtitle':
    'Creando aplicaciones seguras y de alto rendimiento para la comunidad.',
  'footer.links': 'Enlaces',
  'footer.connect': 'Conecta',
} satisfies Translations
