<script setup>
defineProps({
  diagnostics: { type: Array, default: () => [] },
})
</script>

<template>
  <section class="card min-w-0 p-4 shadow-card sm:p-6">
    <h2 class="mb-4 text-lg font-bold text-brand-dark sm:text-xl">Diagnostic List</h2>

    <div class="overflow-hidden rounded-2xl bg-surface">
      <div class="max-h-[280px] w-full overflow-auto">
        <table class="w-full min-w-[420px] text-left text-sm">
          <thead class="sticky top-0 bg-surface text-brand-dark">
            <tr>
              <th class="w-[28%] px-4 py-3 font-bold sm:px-5">Problem/Diagnosis</th>
              <th class="px-4 py-3 font-bold sm:px-5">Description</th>
              <th class="w-[18%] px-4 py-3 font-bold sm:px-5">Status</th>
            </tr>
          </thead>
          <tbody class="bg-surface-card">
            <tr
              v-for="(row, index) in diagnostics"
              :key="row.name + index"
              class="border-t border-surface"
            >
              <td class="px-4 py-3 font-medium text-brand-dark sm:px-5">{{ row.name }}</td>
              <td class="px-4 py-3 text-brand-dark/80 sm:px-5">{{ row.description }}</td>
              <td class="px-4 py-3 text-brand-dark/80 sm:px-5">{{ row.status }}</td>
            </tr>
            <tr v-if="!diagnostics.length">
              <td colspan="3" class="px-5 py-6 text-center text-brand-muted">
                No diagnostic records available.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
