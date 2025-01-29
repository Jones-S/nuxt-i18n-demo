<template>
  <div class="flex max-h-dvh min-h-dvh flex-col overflow-auto">
    <AppHeader />
    <main class="grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
