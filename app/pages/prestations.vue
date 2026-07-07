<script setup lang="ts">
import { prestationCategories, packages } from '~/data/prestations'

useHead({ title: 'Prestations & tarifs — Chez Mona' })

// Labels d'images par catégorie — purement présentation, la donnée en base n'est pas modifiée.
const categoryImages: Record<string, string> = {
  'soins-laser-classiques': 'Soin laser',
  'petites-interventions': 'Soin esthétique',
  'moyennes-interventions': 'Ambiance cabinet'
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="section hero-section">
      <div class="wrap">
        <div class="hero-inner center">
          <SectionEyebrow text="Prestations & tarifs" center />
          <h1 class="h-xl">Nos soins &amp; nos tarifs</h1>
          <p class="lead center">
            Des prestations claires, des tarifs transparents, dans un cadre pensé pour votre bien-être.
          </p>
          <NuxtLink to="#reservation" class="btn btn--primary btn--lg">Réserver un rendez-vous</NuxtLink>
          <nav class="cat-nav" aria-label="Catégories">
            <a v-for="category in prestationCategories" :key="category.id" :href="`#cat-${category.id}`">
              {{ category.title }}
            </a>
            <a href="#forfaits">Forfaits</a>
          </nav>
        </div>
      </div>
    </section>

    <!-- Catégories de prestations, alternées texte/image -->
    <section
      v-for="(category, index) in prestationCategories"
      :key="category.id"
      class="section category-section"
      :class="{ 'section--sand': index % 2 === 1 }"
    >
      <div class="wrap">
        <PriceCategory
          :category="category"
          :image-label="categoryImages[category.id]"
          :reverse="index % 2 === 1"
        />
      </div>
    </section>

    <!-- Forfaits -->
    <section id="forfaits" class="section section--sand">
      <div class="wrap">
        <div class="section-head center">
          <SectionEyebrow text="Forfaits" center />
          <h2 class="h-lg">Nos forfaits</h2>
          <p class="lead center">Des formules complètes pour prendre soin de vous, en une seule séance.</p>
        </div>
        <div class="package-grid">
          <PackageCard v-for="pkg in packages" :key="pkg.id" :pkg="pkg" />
        </div>
      </div>
    </section>

    <!-- Note tarifs -->
    <div class="wrap">
      <p class="pricing-note center">
        Les tarifs affichés seront confirmés avec le salon avant la mise en ligne finale.
      </p>
    </div>

    <!-- CTA final -->
    <section class="section">
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
/* ---- Hero ---- */
.hero-section {
  position: relative;
  overflow: hidden;
}
.hero-section::before {
  content: "";
  position: absolute;
  inset: -10% -10% auto;
  height: 60%;
  z-index: 0;
  pointer-events: none;
  background: radial-gradient(55% 70% at 50% 20%, rgba(233, 214, 200, .55), transparent 70%);
}
.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin-inline: auto;
}
.hero-inner .lead {
  margin: 1.2rem auto 2rem;
}
.hero-inner .btn {
  margin-bottom: 2.6rem;
}

.cat-nav {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
  justify-content: center;
}
.cat-nav a {
  font-weight: 600;
  font-size: .84rem;
  letter-spacing: .02em;
  padding: .6em 1.3em;
  border-radius: 999px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--ink);
  transition: border-color .2s, color .2s, background .2s;
}
.cat-nav a:hover {
  border-color: var(--brown);
  color: var(--brown);
  background: var(--sand);
}

/* ---- Forfaits ---- */
.section-head {
  max-width: 62ch;
}
.section-head.center {
  margin-inline: auto;
}
.package-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
  margin-top: 2.6rem;
}

/* ---- Note tarifs ---- */
.pricing-note {
  max-width: 640px;
  margin: 0 auto;
  padding-bottom: clamp(40px, 6vw, 64px);
  font-size: .82rem;
  font-style: italic;
  color: var(--stone);
}

/* ---- Responsive ---- */
@media (max-width: 700px) {
  .package-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 620px) {
  .cat-nav {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: .4rem;
  }
}
</style>
