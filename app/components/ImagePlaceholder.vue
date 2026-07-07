<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  icon?: 'photo' | 'pin'
}>(), {
  icon: 'photo'
})
</script>

<template>
  <div class="ph">
    <svg v-if="icon === 'photo'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m4 18 5-5 4 4 3-3 4 4" />
    </svg>
    <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
    <small>{{ label }}</small>
  </div>
</template>

<style scoped>
.ph {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, .5), transparent),
    repeating-linear-gradient(45deg, var(--linen), var(--linen) 14px, var(--sand) 14px, var(--sand) 28px);
  color: var(--brown);
  text-align: center;
  padding: 1rem;
}
.ph svg {
  width: 34px;
  height: 34px;
  opacity: .55;
}
.ph small {
  font-size: .72rem;
  letter-spacing: .14em;
  text-transform: uppercase;
  font-weight: 700;
  opacity: .7;
}
</style>
