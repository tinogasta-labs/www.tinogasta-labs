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

export default {
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
} satisfies Translations
