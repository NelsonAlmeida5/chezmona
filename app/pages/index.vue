<script setup lang="ts">
import { services } from '~/data/services'
import { trustItems } from '~/data/trust'
import { homeGallery } from '~/data/gallery'

useHead({ title: 'Chez Mona — Institut de beauté & épilation laser' })
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero__halo" />
      <div class="wrap hero__grid">
        <div class="hero__copy">
          <SectionEyebrow text="Institut de beauté · Valais" />
          <h1 class="h-xl">Le bien-être esthétique,<br>en toute confiance.</h1>
          <p class="lead">
            Soins du visage et du corps, épilation laser dernière génération. Un accompagnement
            personnalisé dans un cadre doux, propre et apaisant — pensé pour vous faire du bien.
          </p>
          <div class="hero__actions">
            <NuxtLink to="#reservation" class="btn btn--primary btn--lg">Réserver un rendez-vous</NuxtLink>
            <NuxtLink to="/prestations" class="btn btn--ghost btn--lg">Voir les prestations</NuxtLink>
          </div>
          <div class="hero__reassure">
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              Certifié O-LRNIS &amp; OFSP
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              Hygiène irréprochable
            </span>
            <span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
              Réservation en ligne 24h/24
            </span>
          </div>
        </div>
        <div class="hero__media">
          <div class="arch">
            <ImagePlaceholder label="Photo institut / soin" />
          </div>
          <div class="hero__badge">
            <b>★ 4,9</b>
            <small>Avis clientes<br>vérifiés</small>
          </div>
        </div>
      </div>
    </section>

    <!-- Prestations principales -->
    <section class="section">
      <div class="wrap">
        <div class="section-head center">
          <SectionEyebrow text="Nos univers" center />
          <h2 class="h-lg">Des prestations pensées pour révéler votre éclat</h2>
          <p class="lead center">Chaque soin est réalisé avec des produits professionnels et un protocole sur mesure.</p>
        </div>
        <div class="card-grid">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <!-- Confiance -->
    <section class="section section--sand">
      <div class="wrap">
        <div class="section-head center">
          <SectionEyebrow text="Pourquoi Chez Mona" center />
          <h2 class="h-lg">Un soin professionnel, une attention sincère</h2>
        </div>
        <div class="card-grid">
          <TrustItem v-for="item in trustItems" :key="item.id" :item="item" />
        </div>
      </div>
    </section>

    <!-- Galerie courte -->
    <section class="section">
      <div class="wrap">
        <div class="section-head">
          <SectionEyebrow text="L'ambiance" />
          <h2 class="h-lg">Un lieu pensé pour le bien-être</h2>
        </div>
        <GalleryGrid class="gallery-grid" :images="homeGallery" />
        <div class="center gallery-more">
          <NuxtLink to="/a-propos" class="btn btn--ghost">Voir la galerie complète</NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA réservation -->
    <section class="section section--sand">
      <div class="wrap">
        <CtaBand
          title="Prête à prendre soin de vous ?"
          text="Réservez votre rendez-vous en quelques clics via notre plateforme en ligne. Une question ? Nous sommes là pour vous accompagner."
          cta-label="Réserver sur Fresha"
          cta-to="#reservation"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Hero ---- */
.hero {
  position: relative;
  overflow: hidden;
}
.hero__halo {
  position: absolute;
  inset: -20% -10% auto;
  height: 70%;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(60% 80% at 70% 30%, rgba(233, 214, 200, .7), transparent 70%),
    radial-gradient(50% 60% at 20% 10%, rgba(188, 123, 83, .16), transparent 70%);
}
.hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
  padding-block: clamp(40px, 7vw, 84px);
}
.hero__copy .lead {
  margin: 1.4rem 0 2rem;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: .8rem;
}
.hero__reassure {
  display: flex;
  flex-wrap: wrap;
  gap: 1.4rem;
  margin-top: 2.4rem;
  padding-top: 1.6rem;
  border-top: 1px solid var(--border);
}
.hero__reassure span {
  display: flex;
  align-items: center;
  gap: .5em;
  font-size: .86rem;
  font-weight: 600;
  color: var(--stone);
}
.hero__reassure svg {
  width: 16px;
  height: 16px;
  color: var(--terra);
  flex: none;
}
.hero__media {
  position: relative;
}
.arch {
  position: relative;
  border-radius: 50% 50% var(--radius-lg) var(--radius-lg) / 30% 30% var(--radius-lg) var(--radius-lg);
  overflow: hidden;
  background: var(--linen);
  box-shadow: var(--shadow);
  aspect-ratio: 4 / 5;
}
.hero__badge {
  position: absolute;
  left: -18px;
  bottom: 24px;
  background: #fff;
  border-radius: 16px;
  padding: .8rem 1.1rem;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  gap: .7rem;
  border: 1px solid var(--border);
}
.hero__badge b {
  font-family: var(--display);
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--brown);
  line-height: 1;
}
.hero__badge small {
  display: block;
  font-size: .74rem;
  color: var(--stone);
  letter-spacing: .02em;
}

/* ---- En-têtes de section ---- */
.section-head {
  max-width: 62ch;
}
.section-head.center {
  margin-inline: auto;
}

/* ---- Grille de cartes (services & confiance) ---- */
.card-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-top: 2.4rem;
}

.gallery-grid {
  margin-top: 2rem;
}
.gallery-more {
  margin-top: 2rem;
}

/* ---- Responsive ---- */
@media (max-width: 1000px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 860px) {
  .hero__grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero__media {
    order: -1;
    max-width: 380px;
    margin-inline: auto;
  }
  .hero__actions,
  .hero__reassure {
    justify-content: center;
  }
  .hero__badge {
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 620px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
