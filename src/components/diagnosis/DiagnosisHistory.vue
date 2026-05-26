<script setup>
import { computed } from 'vue'
import BloodPressureChart from './BloodPressureChart.vue'
import VitalStatCard from './VitalStatCard.vue'
import { sortChronologically } from '@/utils/diagnosisHistory'

const props = defineProps({
  history: { type: Array, default: () => [] },
})

const latest = computed(() => sortChronologically(props.history).at(-1) || {})
</script>

<template>
  <section class="card flex min-w-0 flex-col gap-5 p-4 shadow-card sm:gap-6 sm:p-6">
    <h2 class="text-lg font-bold text-brand-dark sm:text-xl">Diagnosis History</h2>

    <div class="min-w-0 overflow-hidden rounded-2xl bg-[#F4F0FE] p-4 sm:p-5">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="text-base font-bold text-brand-dark">Blood Pressure</h3>
        <button type="button" class="flex items-center gap-1 text-xs font-medium text-brand-dark">
          Last 6 months
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
      <BloodPressureChart :history="history" />
    </div>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      <VitalStatCard
        label="Respiratory Rate"
        :value="latest.respiratory_rate?.value ?? '—'"
        unit="bpm"
        :status="latest.respiratory_rate?.levels"
        variant="respiratory"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6.5 13.5C6.5 9 9 8 9 4.5c0 0 .5-1.5 3-1.5s3 1.5 3 1.5c0 3.5 2.5 4.5 2.5 9 0 4-3 7-5.5 7s-5.5-3-5.5-7Z" />
            <path d="M12 11v8" />
          </svg>
        </template>
      </VitalStatCard>

      <VitalStatCard
        label="Temperature"
        :value="latest.temperature?.value ?? '—'"
        unit="°F"
        :status="latest.temperature?.levels"
        variant="temperature"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z" />
          </svg>
        </template>
      </VitalStatCard>

      <VitalStatCard
        label="Heart Rate"
        :value="latest.heart_rate?.value ?? '—'"
        unit="bpm"
        :status="latest.heart_rate?.levels"
        variant="heart"
      >
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
        </template>
      </VitalStatCard>
    </div>
  </section>
</template>
