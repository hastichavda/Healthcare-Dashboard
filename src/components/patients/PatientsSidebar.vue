<script setup>
import PatientListItem from './PatientListItem.vue'

defineProps({
  patients: { type: Array, default: () => [] },
  selectedName: String,
  open: Boolean,
})

const emit = defineEmits(['update:open'])

const close = () => emit('update:open', false)
</script>

<template>
  <div
    v-show="open"
    class="fixed inset-0 z-30 bg-brand-dark/40 backdrop-blur-[2px] transition-opacity lg:hidden"
    aria-hidden="true"
    @click="close"
  ></div>

  <aside
    :class="[
      'card fixed inset-y-0 left-0 z-40 flex w-[88%] max-w-sm transform flex-col overflow-hidden rounded-none shadow-card transition-transform duration-300 ease-in-out',
      'lg:relative lg:inset-auto lg:z-auto lg:w-auto lg:max-w-none lg:translate-x-0 lg:rounded-2xl lg:shadow-card',
      'lg:max-h-[calc(100vh-7rem)]',
      open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
    ]"
    :aria-hidden="!open && true"
    aria-label="Patient list"
  >
    <header class="flex items-center justify-between px-5 pt-5 pb-3">
      <h2 class="text-lg font-bold text-brand-dark sm:text-xl">Patients</h2>
      <div class="flex items-center gap-1">
        <button
          type="button"
          class="grid h-8 w-8 place-items-center rounded-full text-brand-dark transition hover:bg-surface-hover"
          aria-label="Search patients"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button
          type="button"
          class="grid h-8 w-8 place-items-center rounded-full text-brand-dark transition hover:bg-surface-hover lg:hidden"
          aria-label="Close patient list"
          @click="close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>

    <ul class="flex-1 overflow-y-auto" aria-label="Patient list">
      <PatientListItem
        v-for="(patient, index) in patients"
        :key="patient.name + index"
        :patient="patient"
        :active="patient.name === selectedName"
      />
      <li v-if="!patients.length" class="px-5 py-6 text-center text-sm text-brand-muted">
        No patients available.
      </li>
    </ul>
  </aside>
</template>
