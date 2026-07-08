<script setup lang="ts">
import type { Service } from '~/data/services'

defineProps<{
  service: Service
}>()
</script>

<template>
  <article class="service-card">
    <div class="service-card__icon">
      <svg v-if="service.id === 'epilation-laser'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
      <svg v-else-if="service.id === 'soins-visage'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" /><path d="M9 10h.01M15 10h.01M9 15c1.5 1.2 4.5 1.2 6 0" />
      </svg>
      <svg v-else-if="service.id === 'soins-corps'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2.5" /><path d="M12 8v7M8 11l4-1 4 1M9 21l3-6 3 6" />
      </svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M3 8 12 4l9 4-9 4-9-4Z" /><path d="M3 8v8l9 4 9-4V8" /><path d="M12 12v8" />
      </svg>
    </div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
    <NuxtLink :to="service.href" class="service-card__more">
      Découvrir
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
    </NuxtLink>
  </article>
</template>

<style scoped>
.service-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(165deg, #fff, var(--sand) 145%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.9rem 1.7rem;
  display: flex;
  flex-direction: column;
  gap: .7rem;
  transition: transform .3s, box-shadow .3s, border-color .3s;
}
.service-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  background: linear-gradient(90deg, var(--terra), var(--brown));
  opacity: 0;
  transition: opacity .3s;
}
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: var(--blush);
}
.service-card:hover::before {
  opacity: 1;
}
.service-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--border);
  color: var(--brown);
  box-shadow: var(--shadow-sm);
  margin-bottom: .3rem;
}
.service-card__icon svg {
  width: 26px;
  height: 26px;
}
.service-card h3 {
  font-size: 1.5rem;
}
.service-card p {
  margin: 0;
  color: var(--stone);
  font-size: .95rem;
  flex: 1;
}
.service-card__more {
  font-weight: 700;
  font-size: .86rem;
  color: var(--terra);
  display: inline-flex;
  align-items: center;
  gap: .4em;
}
.service-card__more svg {
  width: 15px;
  height: 15px;
  transition: transform .25s;
}
.service-card:hover .service-card__more svg {
  transform: translateX(4px);
}
</style>
