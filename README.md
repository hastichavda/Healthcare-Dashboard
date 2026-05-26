# Tech Care — Patient Dashboard

A single-page Vue 3 app that recreates the Tech Care Adobe XD design and renders
Jessica Taylor's record from the Coalition Technologies Patient Data API.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Tailwind CSS
- Chart.js + vue-chartjs
- Axios

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Dev server runs at `http://localhost:5173`.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |

## Environment

The API requires Basic Auth, so the credentials live in `.env`:

```
VITE_API_BASE_URL=https://fedskillstest.coalitiontechnologies.workers.dev
VITE_API_USERNAME=coalition
VITE_API_PASSWORD=skills-test
```

`.env.example` is committed; `.env` is git-ignored.

## Project layout

```
src/
  assets/styles/main.css        Tailwind entrypoint + base styles
  components/
    layout/AppHeader.vue
    patients/                   PatientsSidebar, PatientListItem
    diagnosis/                  BloodPressureChart, DiagnosisHistory,
                                VitalStatCard, DiagnosticList
    profile/                    PatientProfile, LabResults
    ui/                         LoadingSpinner, ErrorState
  composables/
    usePatient.js               Fetches patients and selects Jessica Taylor
    useBodyScrollLock.js        Locks page scroll while the mobile drawer is open
  services/
    api.js                      Axios instance (Basic Auth, base URL)
    patients.js                 fetchPatients()
  utils/
    diagnosisHistory.js         Chronological sort + month helpers
  App.vue
  main.js
```

## Notes

- The API is hit once via `usePatient('Jessica Taylor')` and the resulting record
  drives every section (profile, diagnosis history, diagnostic list, vitals, lab
  results). The sidebar still shows the full patient list returned by the API
  with Jessica highlighted — that part of the design is kept intact, but no
  patient-switching logic is wired up since the brief only asks for her data.
- The blood pressure chart sorts `diagnosis_history` chronologically and shows
  the last six months. The latest systolic/diastolic values sit next to the
  chart on desktop and stack below it on mobile.
- Loading and error states wrap the entire grid. The error state has a retry
  button wired to `refetch()`.
- Search input, the gear icon, and the sidebar ellipsis are visual only — the
  brief explicitly says not to spend time on those interactions.

## Responsive behaviour

- `lg` and above: three-column grid (sidebar / main / profile).
- Below `lg`: stacked columns, and the patient list becomes a slide-over
  drawer triggered from the "View patient list" button. The drawer locks body
  scroll while open and closes on backdrop click, Escape, or when the viewport
  crosses the desktop breakpoint.
- Below `sm`: vital cards stack vertically and the chart side-panel becomes a
  two-up grid so the systolic/diastolic values remain visible.
