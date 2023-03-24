<script setup>
import { useSections } from '@/stores/sections'
const sections = useSections()
await sections.fetchSectionNames()
</script>

<template>
  <div>
    <LayoutHeader />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>
