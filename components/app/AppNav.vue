<template>
  <nav class="mt-6">
    <ul class="flex w-full flex-row justify-center">
      <li class="mr-9 md:mr-8">
        <NuxtLink class="brand-btn" :to="localePath('yesterday')">{{
          t('yesterday')
        }}</NuxtLink>
      </li>
      <li class="mr-9 md:mr-8">
        <NuxtLink class="brand-btn" :to="localePath('today')">{{
          t('today')
        }}</NuxtLink>
      </li>
      <li class="">
        <NuxtLink class="brand-btn" :to="localePath('tomorrow')">{{
          t('tomorrow')
        }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<style scoped>
/* stylelint-disable at-rule-no-unknown */
@reference "../../assets/css/main.css";

.router-link-active,
.router-link-active-exact {
  @apply bg-brand-blue-400 text-white;
}
</style>
