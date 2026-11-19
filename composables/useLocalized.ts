import { useI18n } from '#imports'
import type { Localized, SiteLocale } from '~/types/project'

/** Returns a resolver for localized content fields, using Catalan (default locale) as fallback. */
export const useLocalized = () => {
  const { locale } = useI18n()
  return <T>(value: Localized<T>): T => value[locale.value as SiteLocale] ?? value.ca
}
