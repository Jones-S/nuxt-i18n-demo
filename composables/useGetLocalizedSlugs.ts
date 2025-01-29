import { useRoute } from "nuxt/app"

interface Locale {
  name: string
  code: string
  language: string
}

export const useGetLocalizedSlugs = (
  localizedSlugs: Array<any>,
  isStaticRoute: Boolean
) => {
  const { locale, locales } = useI18n()
  const route = useRoute()
  const slug = route.params.slug

  const localizedMeta = (locales.value as Locale[]).map((loc) => {
    const composedLocalizedSlug =
      locale.value === loc.code
        ? Array.isArray(slug)
          ? slug.join('/')
          : slug
        : localizedSlugs.find((s) => s.language === loc.language)[isStaticRoute ? 'slug' : 'uri']

    return {
      [loc.code]: { slug: composedLocalizedSlug },
    }
  })

  return Object.assign({}, ...localizedMeta)
}

