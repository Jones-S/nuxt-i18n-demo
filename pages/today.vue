<template>
  <div class="mx-auto max-w-5xl px-6 pt-4 md:p-10 md:pt-4 lg:pt-10">
    <ContentRenderer :value="page" class="order-1 md:basis-1/2" />
  </div>
</template>

<script setup>
import { useLocalizedRoute } from '@/composables/useLocalizedRoute'

const localizedRoute = useLocalizedRoute('today')

const { data: page } = await useAsyncData(() =>
  queryCollection('content').path(`${localizedRoute}`).first(),
)
</script>
