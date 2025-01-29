<template>
  <footer id="footer" class="p-6">
    <nav class="mt-8">
      <ul class="justify-left flex w-full flex-row">
        <li class="mr-4">
          <NuxtLink
            :to="localePath('/dataprivacy')"
            class="cursor-pointer hover:underline"
            >{{ t('dataprivacy') }}</NuxtLink
          >
        </li>
        <li class="mr-4">
          <NuxtLink
            class="cursor-pointer hover:underline"
            :to="localePath('/imprint')"
            >{{ t('imprint') }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
const localeRoute = useLocaleRoute()

console.log(localePath('dataprivacy', 'de')) // Outputs: "/datenschutz"
console.log(localePath('dataprivacy', 'en')) // Outputs: "/dataprivacy"

console.log('route: ', localePath('/dataprivacy', 'de'))

console.log('localeRoute 1: ', localeRoute('/en/dataprivacy', 'de'))

console.log('localeRoute 2: ', localeRoute('/dataprivacy', 'de'))

console.log('localeRoute 3: ', localeRoute('dataprivacy', 'de'))

console.log('localePath 1: ', localePath('/en/dataprivacy', 'de'))

console.log('localePath 3: ', localePath('dataprivacy', 'de'))

console.log('localePath 3: ', localeRoute({ params: { slug: 'imprint' } }))
</script>
