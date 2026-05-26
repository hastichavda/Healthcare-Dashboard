<script setup>
defineProps({
  message: { type: String, default: 'Something went wrong while loading the data.' },
})

defineEmits(['retry'])
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 py-10 text-center">
    <div class="rounded-full bg-vital-temperature p-3 text-status-danger">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    </div>
    <p class="max-w-sm text-sm text-brand-muted">{{ message }}</p>
    <button
      type="button"
      class="rounded-full bg-brand-dark px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
      @click="$emit('retry')"
    >
      Try again
    </button>
  </div>
</template>
