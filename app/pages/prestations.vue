<script setup lang="ts">
import { prestationCategories, packages } from '~/data/prestations'

useHead({ title: 'Prestations & tarifs — Chez Mona' })
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="section hero-section">
      <div class="wrap center">
        <SectionEyebrow text="Prestations & tarifs" center />
        <h1 class="h-xl">Nos soins &amp; nos tarifs</h1>
        <p class="lead center">
          Des prestations claires, des tarifs transparents. Tous nos soins sont réalisés sur rendez-vous.
        </p>
        <nav class="cat-nav" aria-label="Catégories">
          <a v-for="category in prestationCategories" :key="category.id" :href="`#cat-${category.id}`">
            {{ category.title }}
          </a>
          <a href="#forfaits">Forfaits</a>
        </nav>
      </div>
    </section>

    <!-- Catégories de prestations -->
    <section class="section categories-section">
      <div class="wrap">
        <PriceCategory
          v-for="category in prestationCategories"
          :key="category.id"
          :category="category"
        />
        <p class="pending-note">
          <strong>Tarifs provisoires —</strong>
          transcrits depuis les visuels transmis par la cliente, à valider avec elle avant la mise en ligne définitive.
        </p>
      </div>
    </section>

    <!-- Forfaits -->
    <section id="forfaits" class="section section--sand">
      <div class="wrap">
        <div class="section-head center">
          <SectionEyebrow text="Forfaits" center />
          <h2 class="h-lg">Nos forfaits</h2>
        </div>
        <div class="package-grid">
          <PackageCard v-for="pkg in packages" :key="pkg.id" :pkg="pkg" />
        </div>
      </div>
    </section>

    <!-- Section visuelle -->
    <section class="section">
      <div class="wrap">
        <div class="visual-grid">
          <div class="visual-grid__tile">
            <ImagePlaceholder label="Cabine de soin" />
          </div>
          <div class="visual-grid__tile">
            <ImagePlaceholder label="Espace laser" />
          </div>
          <div class="visual-grid__tile">
            <ImagePlaceholder label="Produits" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="section section--sand">
      <div class="wrap">
        <CtaBand
          title="Une question sur nos soins ?"
          text="Contactez-nous ou réservez directement votre rendez-vous en ligne, nous nous ferons un plaisir de vous conseiller."
          cta-label="Réserver un rendez-vous"
          cta-to="#reservation"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  padding-bottom: 0;
}
.categories-section {
  padding-top: 0;
}

.cat-nav {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  justify-content: center;
  margin-top: 1.8rem;
}
.cat-nav a {
  font-weight: 600;
  font-size: .86rem;
  padding: .5em 1.1em;
  border-radius: 999px;
  background: #fff;
  border: 1px solid var(--border);
  color: var(--ink);
  transition: border-color .2s, color .2s;
}
.cat-nav a:hover {
  border-color: var(--brown);
  color: var(--brown);
}

.pending-note {
  background: var(--sand);
  border: 1px dashed var(--border);
  border-radius: 14px;
  padding: 1.1rem 1.3rem;
  font-size: .88rem;
  color: var(--stone);
  margin-top: 2rem;
}

.section-head {
  max-width: 62ch;
}
.section-head.center {
  margin-inline: auto;
}

.package-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-top: 2.4rem;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.visual-grid__tile {
  aspect-ratio: 4 / 3;
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--linen);
}

@media (max-width: 1000px) {
  .package-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 780px) {
  .visual-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 620px) {
  .package-grid {
    grid-template-columns: 1fr;
  }
  .cat-nav {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: .4rem;
  }
}
</style>
