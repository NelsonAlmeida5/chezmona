<script setup lang="ts">
import type { Package } from '~/data/prestations'

defineProps<{
  pkg: Package
}>()
</script>

<template>
  <article class="package-card">
    <div class="package-card__media">
      <ImagePlaceholder :label="pkg.imageLabel || pkg.title" />
    </div>
    <div class="package-card__body">
      <h3>{{ pkg.title }}</h3>
      <div class="package-card__price">
        <span class="package-card__amount">{{ pkg.price }}</span>
        <span class="package-card__duration">{{ pkg.duration }}</span>
      </div>
      <ul class="package-card__includes">
        <li v-for="item in pkg.includes" :key="item.id">{{ item.label }}</li>
      </ul>
      <NuxtLink to="#reservation" class="btn btn--primary btn--block">Réserver ce forfait</NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.package-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform .3s, box-shadow .3s, border-color .3s;
}
.package-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow);
  border-color: var(--blush);
}
.package-card__media {
  aspect-ratio: 4 / 3;
}
.package-card__body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: .9rem;
  flex: 1;
}
.package-card__body h3 {
  font-size: 1.4rem;
}
.package-card__price {
  display: flex;
  align-items: baseline;
  gap: .6rem;
}
.package-card__amount {
  font-family: var(--display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--brown);
}
.package-card__duration {
  font-size: .85rem;
  color: var(--stone);
}
.package-card__includes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  font-size: .92rem;
  color: var(--ink);
  flex: 1;
}
.package-card__includes li {
  display: flex;
  align-items: flex-start;
  gap: .5em;
}
.package-card__includes li::before {
  content: "";
  width: 5px;
  height: 5px;
  margin-top: .55em;
  border-radius: 50%;
  background: var(--terra);
  flex: none;
}
</style>
