<script setup lang="ts">
import { services } from '~/data/services'
import { trustItems } from '~/data/trust'
import { homeGallery } from '~/data/gallery'

useHead({ title: 'Chez Mona — Institut de beauté & épilation laser' })
</script>

<template>
  <div>
    <!-- Hero visuel -->
    <section class="hero-visual">
      <div class="hero-visual__media">
        <!--
          Placeholder en attendant une vraie photo du salon (ou une image
          beauté/soin). Remplacer par :
          <img src="..." alt="..." class="hero-visual__img">
        -->
        <ImagePlaceholder label="Photo institut / soin" bare />
      </div>
      <div class="hero-visual__veil" />
      <div class="hero-visual__logo">
        <img src="/images/logo/chez-mona-logo-blanc.png" alt="Chez Mona">
      </div>
    </section>

    <!-- Accueil -->
    <section class="hero">
      <div class="hero__halo" />
      <div class="wrap hero__grid">
        <div class="hero__copy">
          <SectionEyebrow text="Institut de beauté" />
          <h1 class="h-xl">Le bien-être esthétique, à votre service.</h1>
          <p class="lead">
            Soins du visage et du corps, épilation laser dernière génération. Un accompagnement
            personnalisé dans un cadre doux, propre et apaisant — pensé pour vous faire du bien.
          </p>
          <div class="hero__actions">
            <NuxtLink to="#reservation" class="btn btn--primary btn--lg">Réserver un rendez-vous</NuxtLink>
            <NuxtLink to="/prestations" class="btn btn--ghost btn--lg">Voir les prestations</NuxtLink>
          </div>
        </div>
        <div class="hero__media">
          <div class="arch">
            <ImagePlaceholder label="Photo institut / soin" />
          </div>
        </div>
      </div>
    </section>

    <!-- Nos univers -->
    <section class="section">
      <div class="wrap">
        <div class="section-head center">
          <SectionEyebrow text="Nos univers" center />
          <h2 class="h-lg">Des soins pensés pour votre bien-être</h2>
          <p class="lead center">
            Découvrez les prestations proposées par Chez Mona, avec une approche personnalisée et
            adaptée à vos besoins.
          </p>
        </div>
        <div class="card-grid">
          <ServiceCard v-for="service in services" :key="service.id" :service="service" />
        </div>
      </div>
    </section>

    <!-- Pourquoi Chez Mona -->
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
        <div class="section-head center">
          <SectionEyebrow text="L'ambiance" center />
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
          title="Envie de prendre rendez-vous ?"
          text="Réservez votre rendez-vous en quelques clics via notre plateforme en ligne. Pour toute question, le salon reste disponible pour vous renseigner."
          cta-label="Réserver sur Fresha"
          cta-to="#reservation"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Hero visuel ---- */
.hero-visual {
  position: relative;
  height: clamp(520px, 68vh, 760px);
  overflow: hidden;
}
.hero-visual__media {
  position: absolute;
  inset: 0;
}
/* Prête pour une vraie photo : <img class="hero-visual__img"> couvrira tout le cadre. */
.hero-visual__media :deep(.hero-visual__img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.hero-visual__veil {
  position: absolute;
  inset: 0;
  background: radial-gradient(60% 60% at 50% 50%, rgba(46, 38, 32, .55), rgba(46, 38, 32, .3) 100%);
}
.hero-visual__logo {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
}
.hero-visual__logo img {
  width: min(460px, 65%);
  height: auto;
}

/* ---- Accueil ---- */
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
  margin-top: 2.4rem;
}
.gallery-more {
  margin-top: 2.2rem;
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
  .hero__actions {
    justify-content: center;
  }
}
@media (max-width: 620px) {
  .hero-visual {
    height: clamp(360px, 55vh, 520px);
  }
  .hero-visual__logo img {
    width: min(280px, 75%);
  }
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
