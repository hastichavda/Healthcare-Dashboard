<script setup>
import { computed } from 'vue'

const props = defineProps({
  patient: { type: Object, required: true },
})

function formatDate(value) {
  if (!value) return ''
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

const infoRows = computed(() => [
  { label: 'Date Of Birth', value: formatDate(props.patient.date_of_birth), icon: 'calendar' },
  { label: 'Gender', value: props.patient.gender, icon: 'gender' },
  { label: 'Contact Info.', value: props.patient.phone_number, icon: 'phone' },
  { label: 'Emergency Contacts', value: props.patient.emergency_contact, icon: 'phone' },
  { label: 'Insurance Provider', value: props.patient.insurance_type, icon: 'shield' },
])
</script>

<template>
  <section class="card flex min-w-0 flex-col items-center px-5 pb-5 pt-6 shadow-card sm:pt-8">
    <img
      :src="patient.profile_picture"
      :alt="patient.name"
      class="h-32 w-32 rounded-full object-cover sm:h-44 sm:w-44"
      referrerpolicy="no-referrer"
    />
    <h2 class="mt-4 text-xl font-bold text-brand-dark sm:mt-5 sm:text-2xl">{{ patient.name }}</h2>

    <ul class="mt-5 w-full space-y-4 sm:mt-6 sm:space-y-5">
      <li v-for="row in infoRows" :key="row.label" class="flex items-center gap-3">
        <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-surface text-brand-dark">
          <svg
            v-if="row.icon === 'calendar'"
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <svg
            v-else-if="row.icon === 'gender'"
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
          >
            <circle cx="12" cy="9" r="5" />
            <line x1="12" y1="14" x2="12" y2="22" />
            <line x1="9" y1="19" x2="15" y2="19" />
          </svg>
          <svg
            v-else-if="row.icon === 'phone'"
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.94.35 1.85.66 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45c.88.31 1.79.53 2.73.66A2 2 0 0 1 22 16.92Z" />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          </svg>
        </span>
        <div class="min-w-0">
          <p class="text-xs text-brand-dark/70">{{ row.label }}</p>
          <p class="truncate text-sm font-bold text-brand-dark">{{ row.value || '—' }}</p>
        </div>
      </li>
    </ul>

    <button
      type="button"
      class="mt-6 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-brand-dark transition hover:brightness-95 sm:mt-8"
    >
      Show All Information
    </button>
  </section>
</template>
