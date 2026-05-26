import api from './api'

export async function fetchPatients() {
  const { data } = await api.get('/')
  return Array.isArray(data) ? data : []
}
