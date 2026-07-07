<script setup lang="ts">
import type { PrestationItem } from '~/data/prestations'

defineProps<{
  item: PrestationItem
}>()
</script>

<template>
  <div class="price-row">
    <div class="price-row__info">
      <h3>{{ item.title }}</h3>
      <p v-if="item.description">{{ item.description }}</p>
    </div>
    <div class="price-row__meta">
      <span v-if="item.meta" class="tag">{{ item.meta }}</span>
      <span class="price-row__price">{{ item.price }}</span>
    </div>
    <NuxtLink to="#reservation" class="btn btn--primary">Réserver</NuxtLink>
  </div>
</template>

<style scoped>
.price-row {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1.2rem;
  align-items: center;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.05rem 1.3rem;
  margin-bottom: .7rem;
  transition: border-color .25s, box-shadow .25s;
}
.price-row:hover {
  border-color: var(--blush);
  box-shadow: var(--shadow-sm);
}
.price-row__info h3 {
  font-size: 1.28rem;
  font-weight: 600;
}
.price-row__info p {
  margin: .15rem 0 0;
  font-size: .88rem;
  color: var(--stone);
}
.price-row__meta {
  display: flex;
  align-items: center;
  gap: .9rem;
}
.tag {
  display: inline-flex;
  align-items: center;
  font-size: .8rem;
  font-weight: 700;
  color: var(--stone);
  background: var(--sand);
  padding: .4em .8em;
  border-radius: 999px;
  white-space: nowrap;
}
.price-row__price {
  font-family: var(--display);
  font-size: 1.7rem;
  font-weight: 600;
  color: var(--brown);
  white-space: nowrap;
}
.price-row .btn {
  padding: .7em 1.2em;
  font-size: .82rem;
}

@media (max-width: 620px) {
  .price-row {
    grid-template-columns: 1fr;
    gap: .9rem;
    text-align: left;
  }
  .price-row__meta {
    justify-content: space-between;
  }
  .price-row .btn {
    width: 100%;
  }
}
</style>
