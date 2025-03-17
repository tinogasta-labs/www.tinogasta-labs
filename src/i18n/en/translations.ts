import type { IconName } from '@/icon-name'
import type { Translations } from '~/i18n/types'

const servicesList = [
  {
    title: 'Digital Transformation',
    description:
      'We help businesses digitally transform by developing tailored software solutions that streamline operations and enhance user experiences.',
    iconName: 'code',
  },
  {
    title: 'Optimization',
    description:
      'We enhance the performance of websites and apps, ensuring fast load times and seamless user experiences, backed by data-driven optimization.',
    iconName: 'rocket',
  },
  {
    title: 'Community Building',
    description:
      'We foster innovation by exploring emerging technologies and contributing to open-source projects that empower developers and drive technological progress.',
    iconName: 'stack',
  },
] satisfies Array<{ title: string; description: string; iconName: IconName }>

const faqs = [
  {
    question: 'What kind of tools do you develop?',
    answer:
      'We develop a wide variety of open-source tools, including web applications, libraries, and utilities for developers. We focus on creating secure, scalable, and high-performance solutions that solve real-world problems across different sectors.',
  },
  {
    question: 'How can I contribute to your projects?',
    answer:
      'You can contribute to our projects by visiting our GitHub repositories. There, you can submit pull requests, report issues, suggest new features, or improve documentation. We welcome contributions from developers of all experience levels, and we believe collaboration is key to the success of our projects.',
  },
  {
    question: 'Do you offer support for your tools?',
    answer:
      'Yes, we provide community support through our GitHub repositories, where you will find detailed documentation and can engage with other users. For businesses requiring dedicated support, we offer premium support packages, including priority assistance, custom feature development, and access to experts.',
  },
  {
    question: 'Why open-source solutions?',
    answer:
      'We choose to develop open-source solutions because we believe in democratizing knowledge and the power of global collaboration. Open source fosters transparency, allowing anyone to review, modify, and improve the code. This approach inspires continuous innovation and enables our tools to evolve rapidly through contributions from an active community. Being accessible to everyone, our solutions can be adapted, improved, and used by businesses of all sizes, generating a positive impact worldwide.',
  },
  {
    question: 'How can I get started working with you?',
    answer:
      'To get started working with us, you can reach out through the contact form on our website or email us directly. We would love to learn more about your needs and discuss how our solutions can help your business grow.',
  },
]

export default {
  'page.title': 'Tinogasta Labs | Digital Solutions',
  'page.description':
    'Building secure, fast, and optimized applications for the community and your customers.',
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.contact': 'Contact',
  'nav.about': 'About',
  'nav.faq': 'FAQs',
  'hero.title':
    'We develop <span class="block">digital solutions</span> that your clients love.',
  'hero.subtitle':
    'Building secure, fast, and optimized applications for the community and your customers.',
  'cta.contact': 'Get in touch',
  'cta.contribute': 'Contribute',
  'services.title': 'Our Services',
  'services.subtitle':
    'We craft digital solutions to help businesses grow and bring ideas to life.',
  'services.list': servicesList,
  'faq.title': 'Your Questions Answered',
  'faq.subtitle': 'Find answers to your questions about our services and tools',
  'faq.list': faqs,
  'contact.title': 'Get in touch',
  'contact.subtitle':
    'Reach out to us to discuss your needs or contribute to our open-source projects. We’re excited to collaborate and help you bring your ideas to life.',
  'contact.email': 'Email us',
  'contact.contribute': 'Contribute',
  'footer.title': 'Tinogasta Labs',
  'footer.subtitle':
    'Building secure, fast, and optimized applications for the community and your customers.',
  'footer.links': 'Links',
  'footer.connect': 'Connect',
} satisfies Translations
