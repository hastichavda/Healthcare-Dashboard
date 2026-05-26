<script setup>
const props = defineProps({
  label: String,
  value: [String, Number],
  unit: String,
  status: String,
  variant: { type: String, default: 'respiratory' },
})

const bgByVariant = {
  respiratory: 'bg-vital-respiratory',
  temperature: 'bg-vital-temperature',
  heart: 'bg-vital-heart',
}
</script>

<template>
  <article :class="['flex flex-col rounded-2xl p-4', bgByVariant[variant]]">
    <span class="mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/70 text-brand-dark">
      <slot name="icon" />
    </span>

    <p class="text-sm font-medium text-brand-dark">{{ label }}</p>
    <p class="mt-1 text-2xl font-extrabold text-brand-dark">
      {{ value }}<span v-if="unit" class="ml-1 text-base font-bold">{{ unit }}</span>
    </p>
    <p v-if="status" class="mt-2 text-xs text-brand-dark/80">{{ status }}</p>
  </article>
</template>
