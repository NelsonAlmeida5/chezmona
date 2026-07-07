<script setup lang="ts">
import type { Package } from '~/data/prestations'

defineProps<{
  pkg: Package
}>()
</script>

<template>
  <article class="package-card">
    <p class="package-card__eyebrow">Forfait</p>
    <h3>{{ pkg.title }}</h3>
    <div class="package-card__price">
      <span class="package-card__amount">{{ pkg.price }}</span>
      <span class="package-card__duration">{{ pkg.duration }}</span>
    </div>
    <ul class="package-card__includes">
      <li v-for="item in pkg.includes" :key="item.id">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
        {{ item.label }}
      </li>
    </ul>
    <NuxtLink to="#reservation" class="btn btn--primary btn--block">Réserver ce forfait</NuxtLink>
  </article>
</template>

<style scoped>
.package-card {
  position: relative;
  overflow: hidden;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem 1.9rem 1.9rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform .3s, box-shadow .3s, border-color .3s;
}
.package-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 4px;
  background: linear-gradient(90deg, var(--terra), var(--brown));
}
.package-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: var(--blush);
}
.package-card__eyebrow {
  margin: 0;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--terra);
}
.package-card h3 {
  font-size: 1.6rem;
  margin: -.4rem 0 0;
}
.package-card__price {
  display: flex;
  align-items: baseline;
  gap: .7rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}
.package-card__amount {
  font-family: var(--display);
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--brown);
}
.package-card__duration {
  font-size: .82rem;
  font-weight: 600;
  color: var(--stone);
  background: var(--sand);
  padding: .3em .7em;
  border-radius: 999px;
}
.package-card__includes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: .6rem;
  font-size: .94rem;
  color: var(--ink);
  flex: 1;
}
.package-card__includes li {
  display: flex;
  align-items: center;
  gap: .6em;
}
.package-card__includes svg {
  width: 16px;
  height: 16px;
  color: var(--terra);
  flex: none;
}
</style>
