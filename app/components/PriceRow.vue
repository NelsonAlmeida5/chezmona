<script setup lang="ts">
import type { PrestationItem } from '~/data/prestations'

defineProps<{
  item: PrestationItem
}>()
</script>

<template>
  <div class="price-row">
    <div class="price-row__line">
      <span class="price-row__title">
        {{ item.title }}
        <span v-if="item.meta" class="price-row__meta">{{ item.meta }}</span>
      </span>
      <span class="price-row__leader" aria-hidden="true" />
      <span class="price-row__price">{{ item.price }}</span>
    </div>
    <p v-if="item.description" class="price-row__desc">{{ item.description }}</p>
  </div>
</template>

<style scoped>
.price-row {
  padding: .85rem 0;
  border-bottom: 1px solid var(--border);
}
.price-row:last-child {
  border-bottom: none;
}
.price-row__line {
  display: flex;
  align-items: baseline;
  gap: .6rem;
}
.price-row__title {
  font-family: var(--display);
  font-size: 1.15rem;
  color: var(--ink);
  white-space: nowrap;
}
.price-row__meta {
  font-family: var(--body);
  font-size: .76rem;
  font-weight: 600;
  color: var(--stone);
  margin-left: .5em;
}
.price-row__leader {
  flex: 1;
  border-bottom: 1px dotted var(--border);
  transform: translateY(-5px);
}
.price-row__price {
  font-family: var(--display);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--brown);
  white-space: nowrap;
}
.price-row__desc {
  margin: .3rem 0 0;
  font-size: .85rem;
  color: var(--stone);
}

@media (max-width: 480px) {
  .price-row__leader {
    display: none;
  }
  .price-row__line {
    justify-content: space-between;
  }
  .price-row__title {
    white-space: normal;
  }
}
</style>
