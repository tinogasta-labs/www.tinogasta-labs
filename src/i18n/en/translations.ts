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

const faqs = [
  {
    question: 'What types of open source tools do you develop?',
    answer:
      'We develop a wide range of open source tools including web applications, developer utilities, security tools, and performance optimization libraries. Our focus is on creating secure, high-performance solutions that solve real-world problems.',
  },
  {
    question: 'How can I contribute to your open source projects?',
    answer:
      'You can contribute to our projects by visiting our GitHub repositories, where you can submit pull requests, report issues, or suggest new features. We welcome contributions from developers of all skill levels.',
  },
  {
    question: 'Do you offer support for your open source tools?',
    answer:
      'Yes, we provide community support through our GitHub repositories and documentation. For businesses requiring dedicated support, we offer premium support packages that include priority assistance and custom feature development.',
  },
  {
    question: 'Are your tools free to use for commercial projects?',
    answer:
      'Most of our tools are released under permissive open source licenses that allow for commercial use. However, specific licensing terms may vary by project, so we recommend checking the license for each tool you plan to use.',
  },
]

export default {
  'nav.home': 'Home',
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
  'faq.title': 'Frequently Asked Questions',
  'faq.subtitle':
    'Find answers to common questions about our services and tools.',
  'faq.list': faqs,
  'contact.title': 'Get in touch',
  'contact.subtitle':
    'Reach out to us or contribute to our open source projects.',
  'contact.email': 'Email us',
  'contact.contribute': 'Contribute',
  'footer.title': 'Tinogasta Labs',
  'footer.subtitle':
    'Building secure, high-performance applications for the community.',
  'footer.links': 'Links',
  'footer.connect': 'Connect',
} satisfies Translations
