import { useVerifyLocale } from '@/composables/useVerifyLocale'

export const useLocalizedRoute = (routeName: string) => {
  const { locale } = useI18n()
  const localeRoute = useLocaleRoute()
  const localizedRoute = useVerifyLocale(
    locale.value,
    localeRoute(routeName, locale.value)?.fullPath || '',
  )

  return localizedRoute
}
