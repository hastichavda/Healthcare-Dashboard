import { watch, onBeforeUnmount } from 'vue'

export function useBodyScrollLock(shouldLock) {
  watch(shouldLock, (lock) => {
    document.body.style.overflow = lock ? 'hidden' : ''
  })

  onBeforeUnmount(() => {
    document.body.style.overflow = ''
  })
}
