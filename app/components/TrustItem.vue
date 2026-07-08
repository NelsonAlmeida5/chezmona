<script setup lang="ts">
import type { TrustItem as TrustItemData } from '~/data/trust'

defineProps<{
  item: TrustItemData
}>()
</script>

<template>
  <div class="trust-item">
    <div class="trust-item__icon">
      <svg v-if="item.id === 'accompagnement-personnalise'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
      </svg>
      <svg v-else-if="item.id === 'cadre-apaisant'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 19c0-8 6-13 14-13 0 8-5 14-13 14-1 0-1-1-1-1Z" /><path d="M9 15c2-2 4-3 7-4" />
      </svg>
      <svg v-else-if="item.id === 'soin-professionnel'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" />
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    </div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</template>

<style scoped>
.trust-item {
  text-align: center;
  padding: 1.4rem .8rem;
}
.trust-item__icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: 0 auto 1rem;
  background: #fff;
  border: 1px solid var(--border);
  color: var(--terra);
  box-shadow: var(--shadow-sm);
}
.trust-item__icon svg {
  width: 28px;
  height: 28px;
}
.trust-item h3 {
  font-size: 1.3rem;
  margin-bottom: .3rem;
}
.trust-item p {
  margin: 0;
  font-size: .9rem;
  color: var(--stone);
}
</style>
