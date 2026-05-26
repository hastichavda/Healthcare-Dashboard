<script setup>
defineProps({
  label: { type: String, default: 'Loading patient data...' },
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3 py-10 text-brand-muted">
    <span class="h-8 w-8 animate-spin rounded-full border-2 border-brand-primary border-t-transparent"></span>
    <p class="text-sm">{{ label }}</p>
  </div>
</template>
