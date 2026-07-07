<script setup lang="ts">
import { aboutGallery } from '~/data/gallery'

useHead({ title: 'Galerie & À propos — Chez Mona' })
</script>

<template>
  <div>
    <!-- Présentation -->
    <section class="section">
      <div class="wrap about-intro">
        <div class="about-intro__media">
          <ImagePlaceholder label="Portrait / institut" />
        </div>
        <div class="about-intro__copy">
          <SectionEyebrow text="Notre histoire" />
          <h1 class="h-lg">Le bien-être esthétique, à votre service</h1>
          <p class="lead">
            Chez Mona, chaque cliente est accompagnée avec écoute et exigence, dans un institut qui
            allie expertise esthétique, technologie laser certifiée et une réelle attention au
            confort de chacune.
          </p>
          <div class="about-highlights">
            <div class="about-highlight">
              <h3>Écoute</h3>
              <p>Un accompagnement à l'écoute de vos besoins et de votre peau.</p>
            </div>
            <div class="about-highlight">
              <h3>Exigence</h3>
              <p>Des protocoles rigoureux et un matériel certifié.</p>
            </div>
            <div class="about-highlight">
              <h3>Douceur</h3>
              <p>Un cadre chaleureux, pensé pour votre confort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certification -->
    <section class="section section--sand">
      <div class="wrap">
        <div class="certification">
          <div class="certification__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M12 3 5 6v5c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" /><path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <div>
            <p class="certification__label">Certifié O-LRNIS &amp; OFSP</p>
            <p class="certification__text">
              Nos pratiques d'épilation laser respectent les normes suisses en vigueur, pour des
              soins sûrs et encadrés.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Galerie -->
    <section class="section">
      <div class="wrap">
        <div class="section-head center">
          <SectionEyebrow text="Galerie" center />
          <h2 class="h-lg">L'institut en images</h2>
          <p class="lead center">Un aperçu de notre espace, en attendant nos prochaines photos.</p>
        </div>
        <GalleryGrid class="about-gallery" :images="aboutGallery" />
      </div>
    </section>

    <!-- CTA final -->
    <section class="section section--sand">
      <div class="wrap">
        <CtaBand
          title="Envie de découvrir l'institut ?"
          text="Prenez rendez-vous pour un premier soin ou un bilan personnalisé. Nous serons ravies de vous accueillir."
          cta-label="Réserver un rendez-vous"
          cta-to="#reservation"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Présentation ---- */
.about-intro {
  display: grid;
  grid-template-columns: .95fr 1.05fr;
  gap: clamp(28px, 5vw, 60px);
  align-items: center;
}
.about-intro__media {
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--linen);
  box-shadow: var(--shadow);
}
.about-intro__copy .lead {
  margin-top: 1rem;
}

.about-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-top: 2rem;
  padding-top: 1.6rem;
  border-top: 1px solid var(--border);
}
.about-highlight {
  flex: 1 1 160px;
}
.about-highlight h3 {
  font-size: 1.1rem;
  margin-bottom: .3rem;
  color: var(--brown);
}
.about-highlight p {
  margin: 0;
  font-size: .88rem;
  color: var(--stone);
}

/* ---- Certification ---- */
.certification {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  max-width: 640px;
  margin-inline: auto;
}
.certification__icon {
  width: 60px;
  height: 60px;
  flex: none;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--border);
  color: var(--terra);
  box-shadow: var(--shadow-sm);
}
.certification__icon svg {
  width: 28px;
  height: 28px;
}
.certification__label {
  margin: 0 0 .3rem;
  font-weight: 700;
  color: var(--ink);
}
.certification__text {
  margin: 0;
  font-size: .92rem;
  color: var(--stone);
}

/* ---- Galerie ---- */
.section-head {
  max-width: 62ch;
}
.section-head.center {
  margin-inline: auto;
}
.about-gallery {
  margin-top: 2.4rem;
}

/* ---- Responsive ---- */
@media (max-width: 860px) {
  .about-intro {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .about-intro__media {
    max-width: 420px;
    margin-inline: auto;
  }
  .about-highlights {
    justify-content: center;
    text-align: center;
  }
}
@media (max-width: 560px) {
  .certification {
    flex-direction: column;
    text-align: center;
  }
}
</style>
