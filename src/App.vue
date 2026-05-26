<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

import AppHeader from '@/components/layout/AppHeader.vue'
import PatientsSidebar from '@/components/patients/PatientsSidebar.vue'
import DiagnosisHistory from '@/components/diagnosis/DiagnosisHistory.vue'
import DiagnosticList from '@/components/diagnosis/DiagnosticList.vue'
import PatientProfile from '@/components/profile/PatientProfile.vue'
import LabResults from '@/components/profile/LabResults.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import ErrorState from '@/components/ui/ErrorState.vue'
import { usePatient } from '@/composables/usePatient'
import { useBodyScrollLock } from '@/composables/useBodyScrollLock'

const { patient, patients, isLoading, error, refetch } = usePatient('Jessica Taylor')

const isDrawerOpen = ref(false)
useBodyScrollLock(isDrawerOpen)

const desktopMq = window.matchMedia('(min-width: 1024px)')

function closeOnEsc(e) {
  if (e.key === 'Escape') isDrawerOpen.value = false
}

function closeOnDesktop(e) {
  if (e.matches) isDrawerOpen.value = false
}

onMounted(() => {
  window.addEventListener('keydown', closeOnEsc)
  desktopMq.addEventListener('change', closeOnDesktop)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', closeOnEsc)
  desktopMq.removeEventListener('change', closeOnDesktop)
})
</script>

<template>
  <div class="min-h-screen bg-surface">
    <AppHeader />

    <main class="px-3 pb-8 pt-4 sm:px-4 sm:pt-6 md:px-6 lg:px-8 lg:pb-10">
      <LoadingSpinner v-if="isLoading" />

      <ErrorState
        v-else-if="error"
        :message="error.message"
        @retry="refetch"
      />

      <template v-else-if="patient">
        <button
          type="button"
          class="mb-4 flex w-full items-center justify-between rounded-full bg-brand-dark px-5 py-3 text-sm font-bold text-white shadow-card transition hover:opacity-90 lg:hidden"
          @click="isDrawerOpen = true"
        >
          <span class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            View patient list
          </span>
          <span class="rounded-full bg-white/15 px-2 py-0.5 text-xs">
            {{ patients.length }}
          </span>
        </button>

        <div class="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[280px_minmax(0,1fr)_320px]">
          <PatientsSidebar
            v-model:open="isDrawerOpen"
            :patients="patients"
            selected-name="Jessica Taylor"
          />

          <div class="flex min-w-0 flex-col gap-4 sm:gap-6">
            <DiagnosisHistory :history="patient.diagnosis_history || []" />
            <DiagnosticList :diagnostics="patient.diagnostic_list || []" />
          </div>

          <div class="flex min-w-0 flex-col gap-4 sm:gap-6">
            <PatientProfile :patient="patient" />
            <LabResults :results="patient.lab_results || []" />
          </div>
        </div>
      </template>
    </main>
  </div>
</template>
