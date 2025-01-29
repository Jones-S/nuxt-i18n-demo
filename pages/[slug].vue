<template>
  <div class="container mx-auto">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<script setup>
const { locale } = useI18n()
const route = useRoute()
const setI18nParams = useSetI18nParams()

console.log('useI18n: ', useI18n())

// defineI18nRoute({
//   paths: {
//     en: '/[slug]',
//     es: '/[slug]',
//   },
// })

setI18nParams({
  en: { slug: 'imprint' },
  de: { slug: 'impressum' },
})

console.log('route: ', route.params.slug)

const { data: page } = await useAsyncData(() =>
  queryCollection('content')
    .path(`/${locale.value}/${route.params.slug}`)
    .first(),
)
</script>
