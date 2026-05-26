<script setup>
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { sortChronologically, shortMonth } from '@/utils/diagnosisHistory'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

const props = defineProps({
  history: { type: Array, default: () => [] },
})

// The design only shows the last six months on the chart
const lastSixMonths = computed(() => sortChronologically(props.history).slice(-6))

const chartData = computed(() => ({
  labels: lastSixMonths.value.map((e) => `${shortMonth(e.month)}, ${e.year}`),
  datasets: [
    {
      label: 'Systolic',
      data: lastSixMonths.value.map((e) => e.blood_pressure?.systolic?.value),
      borderColor: '#E66FD2',
      pointBackgroundColor: '#E66FD2',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 7,
      tension: 0.4,
      borderWidth: 2,
    },
    {
      label: 'Diastolic',
      data: lastSixMonths.value.map((e) => e.blood_pressure?.diastolic?.value),
      borderColor: '#8C6FE6',
      pointBackgroundColor: '#8C6FE6',
      pointBorderColor: '#fff',
      pointBorderWidth: 2,
      pointRadius: 6,
      pointHoverRadius: 7,
      tension: 0.4,
      borderWidth: 2,
    },
  ],
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  resizeDelay: 100,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#072635',
      padding: 10,
      titleFont: { family: 'Manrope', weight: '600', size: 12 },
      bodyFont: { family: 'Manrope', size: 12 },
      callbacks: {
        label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y}`,
      },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: '#072635',
        font: { family: 'Manrope', size: 10 },
        maxRotation: 0,
        autoSkipPadding: 12,
      },
      border: { display: false },
    },
    y: {
      min: 60,
      max: 180,
      ticks: {
        stepSize: 20,
        color: '#072635',
        font: { family: 'Manrope', size: 10 },
      },
      grid: { color: 'rgba(7, 38, 53, 0.06)' },
      border: { display: false },
    },
  },
  interaction: { mode: 'index', intersect: false },
}

const latest = computed(() => lastSixMonths.value.at(-1))
const systolic = computed(() => latest.value?.blood_pressure?.systolic)
const diastolic = computed(() => latest.value?.blood_pressure?.diastolic)

// SVG path for a small up/down arrow next to the level label
function arrowPath(level) {
  const isLower = /lower/i.test(level || '')
  return isLower ? 'M12 5v14m-6-6 6 6 6-6' : 'M12 19V5m-6 6 6-6 6 6'
}
</script>

<template>
  <div
    v-if="!lastSixMonths.length"
    class="grid h-[200px] place-items-center rounded-xl bg-white/50 text-sm text-brand-muted sm:h-[220px]"
  >
    No blood pressure history available for this patient.
  </div>

  <div v-else class="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_180px] lg:gap-6">
    <div class="relative h-[200px] w-full min-w-0 sm:h-[220px]">
      <Line :data="chartData" :options="chartOptions" />
    </div>

    <div class="grid min-w-0 grid-cols-2 gap-4 lg:flex lg:flex-col lg:border-l lg:border-surface lg:pl-6">
      <div>
        <div class="flex items-center gap-2">
          <span class="h-3 w-3 rounded-full bg-chart-systolic"></span>
          <p class="text-sm font-bold text-brand-dark">Systolic</p>
        </div>
        <p class="mt-1 text-2xl font-bold text-brand-dark">{{ systolic?.value ?? '—' }}</p>
        <p v-if="systolic?.levels" class="mt-1 flex items-center gap-1 text-xs text-brand-dark">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path :d="arrowPath(systolic.levels)" />
          </svg>
          {{ systolic.levels }}
        </p>
      </div>

      <hr class="hidden border-surface lg:block" />

      <div>
        <div class="flex items-center gap-2">
          <span class="h-3 w-3 rounded-full bg-chart-diastolic"></span>
          <p class="text-sm font-bold text-brand-dark">Diastolic</p>
        </div>
        <p class="mt-1 text-2xl font-bold text-brand-dark">{{ diastolic?.value ?? '—' }}</p>
        <p v-if="diastolic?.levels" class="mt-1 flex items-center gap-1 text-xs text-brand-dark">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path :d="arrowPath(diastolic.levels)" />
          </svg>
          {{ diastolic.levels }}
        </p>
      </div>
    </div>
  </div>
</template>
