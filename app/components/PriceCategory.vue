<script setup lang="ts">
import type { PrestationCategory } from '~/data/prestations'

defineProps<{
  category: PrestationCategory
}>()
</script>

<template>
  <div :id="`cat-${category.id}`" class="price-cat">
    <div class="price-cat__head">
      <h2>{{ category.title }}</h2>
    </div>
    <PriceRow
      v-for="item in category.items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<style scoped>
.price-cat {
  margin-bottom: clamp(40px, 6vw, 64px);
  scroll-margin-top: 90px;
}
.price-cat__head {
  margin-bottom: 1.4rem;
  padding-bottom: .9rem;
  border-bottom: 1px solid var(--border);
}
.price-cat__head h2 {
  font-size: clamp(1.7rem, 3.5vw, 2.4rem);
}
</style>
