<script setup>
defineProps({
  results: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="card flex min-w-0 flex-col overflow-hidden shadow-card">
    <h2 class="px-5 pt-5 pb-3 text-lg font-bold text-brand-dark sm:text-xl">Lab Results</h2>

    <ul class="max-h-[260px] overflow-y-auto">
      <li
        v-for="(name, index) in results"
        :key="name + index"
        class="flex items-center justify-between px-5 py-3 transition hover:bg-surface-hover"
      >
        <span class="text-sm text-brand-dark">{{ name }}</span>
        <button
          type="button"
          class="grid h-8 w-8 place-items-center rounded-full text-brand-dark transition hover:bg-white"
          :aria-label="`Download ${name}`"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
      </li>
      <li v-if="!results.length" class="px-5 py-6 text-center text-sm text-brand-muted">
        No lab results available.
      </li>
    </ul>
  </section>
</template>
