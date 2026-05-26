import { computed, onMounted, ref } from 'vue'
import { fetchPatients } from '@/services/patients'

export function usePatient(patientName) {
  const patients = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const patient = computed(
    () => patients.value.find((p) => p.name === patientName) || null,
  )

  async function loadPatients() {
    isLoading.value = true
    error.value = null

    try {
      patients.value = await fetchPatients()

      if (!patient.value) {
        throw new Error(`Couldn't find a patient named "${patientName}".`)
      }
    } catch (err) {
      error.value = err
    } finally {
      isLoading.value = false
    }
  }

  onMounted(loadPatients)

  return {
    patient,
    patients,
    isLoading,
    error,
    refetch: loadPatients,
  }
}
