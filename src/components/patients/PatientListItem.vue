<script setup>
defineProps({
  patient: { type: Object, required: true },
  active: Boolean,
})
</script>

<template>
  <li
    class="flex items-center gap-3 px-5 py-3 transition"
    :class="active ? 'bg-brand-primary/20' : 'hover:bg-surface-hover'"
  >
    <img
      :src="patient.profile_picture"
      :alt="patient.name"
      class="h-12 w-12 rounded-full object-cover"
      loading="lazy"
      referrerpolicy="no-referrer"
    />
    <div class="min-w-0 flex-1">
      <p class="truncate text-sm font-bold text-brand-dark">{{ patient.name }}</p>
      <p class="text-xs text-brand-muted">
        {{ patient.gender }}, {{ patient.age }}
      </p>
    </div>
    <button
      type="button"
      class="grid h-6 w-6 place-items-center rounded-full text-brand-dark/60 transition hover:bg-white"
      aria-label="More options"
      tabindex="-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="5" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
      </svg>
    </button>
  </li>
</template>
