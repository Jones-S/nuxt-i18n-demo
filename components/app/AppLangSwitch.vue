<template>
  <div>
    <span v-for="(link, index) in links" :key="link.code">
      <NuxtLink
        class="inline-block"
        :class="[{ 'opacity-50': !isActive(link.path) }]"
        :to="link.path"
        :disabled="isActive(link.path)"
      >
        {{ link.text }}
      </NuxtLink>
      <span v-if="index === 0" class="opacity-50">/</span>
    </span>
  </div>
</template>

<script setup>
import { useRemoveLocale } from '@/composables/useVerifyLocale'
const { locales } = useI18n()
const route = useRoute()
const localeRoute = useLocaleRoute()

const links = computed(() => {
  return locales.value.map((locale) => {
    const strippedRoute = useRemoveLocale(
      locale.code,
      route?.params?.slug?.[0] || route.fullPath,
    )

    return {
      ...localeRoute(strippedRoute, locale.code),
      text: locale.code.toUpperCase(),
    }
  })
})

const isActive = (path) => {
  return route.fullPath === path
}
</script>

<style scoped>
/* stylelint-disable at-rule-no-unknown */
@reference "../../assets/css/main.css";

div > span {
  @apply hover:text-brand-blue-400 text-sm md:text-3xl;

  a {
    @apply transition-all duration-300 ease-in-out;
  }

  &:hover {
    a {
      @apply opacity-100;
    }
  }
}
</style>
