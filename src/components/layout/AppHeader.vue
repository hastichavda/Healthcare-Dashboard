<script setup>
import { ref } from 'vue'

const tabs = ['Overview', 'Patients', 'Schedule', 'Message', 'Transactions']
const activeTab = ref('Patients')

const fallbackAvatar =
  'https://ui-avatars.com/api/?name=Jose+Simmons&background=072635&color=fff&size=64&bold=true'
</script>

<template>
  <header class="card mx-3 mt-3 flex min-w-0 items-center justify-between gap-3 px-4 py-3 shadow-card sm:mx-4 sm:mt-4 sm:gap-4 sm:px-6 md:mx-6 lg:mx-8">
    <a href="#" class="flex shrink-0 items-center" aria-label="Tech Care home">
      <svg class="h-7 w-auto sm:h-9" viewBox="0 0 211 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M27.4 8.5c-2.1-1.6-4.7-2.5-7.4-2.5C13.4 6 8 11.4 8 18s5.4 12 12 12c1 0 2-.1 2.9-.4-1.4 2.8-4.4 4.4-7.6 4.4-1.4 0-2.7-.3-3.9-.9l-1.2 3.2c1.6.7 3.3 1.1 5.1 1.1 6.6 0 12-5.4 12-12 0-2-.5-3.9-1.4-5.6 1.3-1.8 2.1-3.9 2.5-6.3z"
          fill="#01F0D0"
        />
        <text x="40" y="22" font-family="Manrope, sans-serif" font-weight="700" font-size="18" fill="#072635">
          Tech.Care
        </text>
      </svg>
    </a>

    <nav class="hidden items-center gap-1 md:flex lg:gap-2" aria-label="Primary">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        class="rounded-full px-3 py-2 text-xs font-bold transition lg:px-4 lg:text-sm"
        :class="
          activeTab === tab
            ? 'bg-brand-primary text-brand-dark'
            : 'text-brand-dark hover:bg-surface-hover'
        "
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </nav>

    <div class="flex items-center gap-2 sm:gap-3">
      <img
        src="https://fedskillstest.coalitiontechnologies.workers.dev/senior_doctor.png"
        alt="Dr. Jose Simmons"
        class="h-9 w-9 rounded-full border border-surface object-cover sm:h-11 sm:w-11"
        referrerpolicy="no-referrer"
        @error="(e) => (e.target.src = fallbackAvatar)"
      />
      <div class="hidden text-left lg:block">
        <p class="text-sm font-bold leading-tight text-brand-dark">Dr. Jose Simmons</p>
        <p class="text-xs text-brand-muted">General Practitioner</p>
      </div>

      <span class="hidden h-8 w-px bg-surface lg:block" aria-hidden="true"></span>

      <div class="hidden items-center gap-1 text-brand-dark sm:flex">
        <button type="button" class="grid h-9 w-9 place-items-center rounded-full transition hover:bg-surface-hover" aria-label="Settings">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
        <button type="button" class="grid h-9 w-9 place-items-center rounded-full transition hover:bg-surface-hover" aria-label="More options">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
