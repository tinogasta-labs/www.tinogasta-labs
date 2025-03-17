import type { IconName } from '@/icon-name'
import type { Translations } from '~/i18n/types'

const servicesList = [
  {
    title: 'Transformación Digital',
    description:
      'Ayudamos a las empresas a transformarse digitalmente mediante el desarrollo de soluciones de software personalizadas que agilizan las operaciones y mejoran la experiencia del usuario.',
    iconName: 'code',
  },
  {
    title: 'Optimización',
    description:
      'Mejoramos el rendimiento de sitios web y aplicaciones, asegurando tiempos de carga rápidos y experiencias de usuario sin interrupciones, respaldados por optimización basada en datos.',
    iconName: 'rocket',
  },
  {
    title: 'Comunidad',
    description:
      'Fomentamos la innovación explorando tecnologías emergentes y contribuyendo a proyectos de código abierto que empoderan a los desarrolladores.',
    iconName: 'stack',
  },
] satisfies Array<{ title: string; description: string; iconName: IconName }>

const faqs = [
  {
    question: '¿Qué tipo de herramientas desarrollan?',
    answer:
      'Desarrollamos una amplia variedad de herramientas de código abierto, como aplicaciones web, bibliotecas y utilidades para desarrolladores. Nos enfocamos en crear soluciones seguras, escalables y de alto rendimiento, orientadas a resolver problemas reales en diferentes sectores.',
  },
  {
    question: '¿Cómo puedo contribuir a sus proyectos?',
    answer:
      'Puedes contribuir a nuestros proyectos visitando nuestros repositorios en GitHub. Ahí puedes enviar pull requests, reportar problemas, sugerir nuevas funciones o mejorar la documentación. Aceptamos contribuciones de desarrolladores de todos los niveles, y creemos que la colaboración es clave para el progreso de nuestros proyectos.',
  },
  {
    question: '¿Ofrecen soporte para sus herramientas?',
    answer:
      'Sí, brindamos soporte comunitario a través de nuestros repositorios en GitHub, donde encontrarás documentación detallada y podrás interactuar con otros usuarios. Para empresas que necesiten soporte dedicado, ofrecemos paquetes premium que incluyen asistencia prioritaria, desarrollo de características personalizadas y acceso a expertos.',
  },
  {
    question: '¿Por qué soluciones de código abierto?',
    answer:
      'El código abierto es una forma de democratizar el conocimiento y fomentar la colaboración global. Al hacer que nuestras herramientas sean accesibles para todos, inspiramos a más desarrolladores a contribuir, mejorar y compartir. Además, la transparencia del código abierto asegura que nuestras soluciones sean auditables, seguras y mejoradas continuamente por la comunidad.',
  },
  {
    question: '¿Cómo puedo comenzar a trabajar con ustedes?',
    answer:
      'Para comenzar a trabajar con nosotros, puedes ponerte en contacto a través del formulario en nuestro sitio web o enviarnos un correo electrónico. Nos encantaría conocer tus necesidades y discutir cómo nuestras soluciones pueden ayudar a tu negocio a crecer.',
  },
]

export default {
  'page.title': 'Tinogasta Labs | Soluciones Digitales',
  'page.description':
    'Creamos aplicaciones seguras, rápidas y optimizadas para la comunidad y tus clientes.',
  'nav.home': 'Inicio',
  'nav.services': 'Servicios',
  'nav.contact': 'Contacto',
  'nav.about': 'Acerca',
  'nav.faq': 'Preguntas',
  'hero.title':
    'Desarrollamos <span class="block whitespace-nowrap">soluciones digitales</span> que tus clientes aman.',
  'hero.subtitle':
    'Creamos aplicaciones seguras, rápidas y optimizadas para la comunidad y tus clientes.',
  'cta.contact': 'Contáctanos',
  'cta.contribute': 'Contribuir',
  'services.title': 'Nuestros Servicios',
  'services.subtitle':
    'Creamos soluciones digitales para ayudar a las empresas a crecer y hacer realidad sus ideas.',
  'services.list': servicesList,
  'faq.title': 'Tus Preguntas Respondidas',
  'faq.subtitle':
    'Encuentra respuestas a tus preguntas sobre nuestros servicios y herramientas.',
  'faq.list': faqs,
  'contact.title': 'Contáctanos',
  'contact.subtitle':
    'Ponte en contacto con nosotros para discutir tus necesidades o contribuir a nuestros proyectos de código abierto. Estamos emocionados de colaborar y ayudarte a hacer realidad tus ideas.',
  'contact.email': 'Envianos un correo',
  'contact.contribute': 'Contribuye',
  'footer.title': 'Tinogasta Labs',
  'footer.subtitle':
    'Creamos aplicaciones seguras, rápidas y optimizadas para la comunidad y tus clientes.',
  'footer.links': 'Enlaces',
  'footer.connect': 'Conecta',
} satisfies Translations
