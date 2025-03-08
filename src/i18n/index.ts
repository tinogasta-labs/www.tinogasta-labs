import en from './en/translations'
import es from './es/translations'
import type { Language, Translations } from './types'

const translations: Record<Language, Translations> = {
  en,
  es,
}

export const defaultLang: Language = 'en'

export function getTranslations(lang: Language): Translations {
  return translations[lang]
}
