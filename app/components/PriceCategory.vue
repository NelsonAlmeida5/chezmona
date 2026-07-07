<script setup lang="ts">
import type { PrestationCategory } from '~/data/prestations'

const props = defineProps<{
  category: PrestationCategory
  imageLabel: string
  reverse?: boolean
}>()

const orderLabel = String(props.category.order).padStart(2, '0')
</script>

<template>
  <div :id="`cat-${category.id}`" class="price-cat" :class="{ 'price-cat--reverse': reverse }">
    <div class="price-cat__media">
      <ImagePlaceholder :label="imageLabel" />
    </div>
    <div class="price-cat__content">
      <span class="price-cat__index">{{ orderLabel }}</span>
      <h2>{{ category.title }}</h2>
      <div class="price-cat__list">
        <PriceRow v-for="item in category.items" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.price-cat {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
  scroll-margin-top: 90px;
}
.price-cat--reverse {
  grid-template-columns: 1.05fr .95fr;
}
.price-cat--reverse .price-cat__media {
  order: 2;
}
.price-cat__media {
  aspect-ratio: 4 / 5;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--linen);
  box-shadow: var(--shadow);
}
.price-cat__index {
  display: block;
  font-family: var(--display);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: .16em;
  color: var(--terra);
  margin-bottom: .6rem;
}
.price-cat__content h2 {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  margin-bottom: 1.6rem;
}
.price-cat__list {
  display: flex;
  flex-direction: column;
}

@media (max-width: 860px) {
  .price-cat,
  .price-cat--reverse {
    grid-template-columns: 1fr;
  }
  .price-cat--reverse .price-cat__media {
    order: 0;
  }
  .price-cat__media {
    max-width: 420px;
    margin-inline: auto;
    aspect-ratio: 16 / 10;
  }
}
</style>
