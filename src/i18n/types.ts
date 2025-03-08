import type { IconName } from '@/icon-name'
export type Language = 'en' | 'es'

export type Translations = {
  'nav.services': string
  'nav.about': string
  'nav.contact': string
  'nav.faq': string
  'hero.title': string
  'hero.subtitle': string
  'cta.contact': string
  'cta.contribute': string
  'services.title': string
  'services.subtitle': string
  'services.list': Array<{
    title: string
    description: string
    iconName: IconName
  }>
}
