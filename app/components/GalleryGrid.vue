<script setup lang="ts">
import type { GalleryImage } from '~/data/gallery'

defineProps<{
  images: GalleryImage[]
}>()
</script>

<template>
  <div class="gallery">
    <div v-for="image in images" :key="image.id" class="gallery__tile">
      <ImagePlaceholder :label="image.label" />
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}
.gallery__tile {
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--linen);
}
.gallery__tile:nth-child(1),
.gallery__tile:nth-child(4) {
  grid-row: span 2;
}
@media (max-width: 1000px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 170px;
  }
  .gallery__tile:nth-child(1),
  .gallery__tile:nth-child(4) {
    grid-row: span 1;
  }
}
@media (max-width: 620px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
  }
}
</style>
