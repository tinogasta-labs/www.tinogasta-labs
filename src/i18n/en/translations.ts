import type { IconName } from '@/icon-name'
import type { Translations } from '~/i18n/types'

const servicesList = [
  {
    title: 'Custom Development',
    description:
      'We build fast, accessible, and scalable web applications using open-source technologies and industry best practices.',
    iconName: 'code',
  },
  {
    title: 'Developer Tools',
    description:
      'We create tools to streamline workflows, enhance the developer experience, and improve software quality.',
    iconName: 'gear',
  },
  {
    title: 'Performance Optimization',
    description:
      'We optimize websites and applications for speed and efficiency with advanced techniques, monitoring, and best practices.',
    iconName: 'rocket',
  },
  {
    title: 'Community Building',
    description:
      'We foster innovation by exploring new technologies and contributing to open-source projects that empower the developer community.',
    iconName: 'stack',
  },
] satisfies Array<{ title: string; description: string; iconName: IconName }>

export default {
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.about': 'About',
  'nav.faq': 'FAQs',
  'hero.title':
    'We develop <span class="block">open source tools</span> that your clients loves.',
  'hero.subtitle':
    'Building secure, high-performance applications for the community.',
  'cta.contact': 'Get in touch',
  'cta.contribute': 'Contribute',
  'services.title': 'What We Do?',
  'services.subtitle':
    'We create digital solutions to empower businesses and bring ideas to life.',
  'services.list': servicesList,
} satisfies Translations
