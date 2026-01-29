<script setup lang="ts">
import { computed } from 'vue'
import { Sun, Moon } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const colorMode = useColorMode()

const toggleMode = () => {
  // Toggle between light and dark based on current visual value
  // This ensures every click produces a visible change
  if (colorMode.value === 'light') {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
}

const Icon = computed(() => {
  // Use value instead of preference to show current visual state
  return colorMode.value === 'light' ? Sun : Moon
})
</script>

<template>
  <Button
    variant="outline"
    size="icon"
    @click="toggleMode"
    :aria-label="`Switch to ${colorMode.value === 'light' ? 'dark' : 'light'} mode`"
  >
    <component :is="Icon" class="h-[1.2rem] w-[1.2rem]" />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>
