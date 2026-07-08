<script setup lang="ts">
import { contactInfo } from '~/data/contact'

useHead({ title: 'Contact & réservation — Chez Mona' })
</script>

<template>
  <div>
    <!-- Hero / page-head -->
    <div class="wrap page-head">
      <SectionEyebrow text="Contact & réservation" center />
      <h1 class="h-xl">Prenons rendez-vous</h1>
      <p class="lead center">
        Réservez en ligne à tout moment, ou contactez-nous directement — nous vous répondons avec
        plaisir.
      </p>
    </div>

    <!-- Coordonnées + réservation -->
    <section class="section content-section">
      <div class="wrap">
        <div class="contact-grid">
          <!-- Nous trouver -->
          <div class="info-card">
            <h2 class="h-md">Nous trouver</h2>
            <ul class="info-list">
              <li>
                <span class="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                </span>
                <div>
                  <b>Adresse</b>
                  <span>{{ contactInfo.address }}</span>
                </div>
              </li>
              <li>
                <span class="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h3l1.5 5L8 9.5a12 12 0 0 0 6.5 6.5L16 14l5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 4 6 2 2 0 0 1 6 3Z" /></svg>
                </span>
                <div>
                  <b>Téléphone</b>
                  <span>{{ contactInfo.phone }}</span>
                </div>
              </li>
              <li>
                <span class="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                </span>
                <div>
                  <b>E-mail</b>
                  <span>{{ contactInfo.email }}</span>
                </div>
              </li>
            </ul>
            <div class="hours">
              <h3>Horaires d'ouverture</h3>
              <dl>
                <template v-for="entry in contactInfo.hours" :key="entry.day">
                  <dt>{{ entry.day }}</dt>
                  <dd :class="{ closed: entry.closed }">{{ entry.hours }}</dd>
                </template>
              </dl>
            </div>
          </div>

          <!-- Réservation en ligne -->
          <div class="booking-card">
            <h2 class="h-md">Réserver en ligne</h2>
            <p>
              Choisissez votre prestation, votre date et l'heure qui vous convient. Confirmation
              immédiate via notre plateforme Fresha.
            </p>
            <ol class="booking-steps">
              <li><span class="n">1</span> Sélectionnez votre soin</li>
              <li><span class="n">2</span> Choisissez un créneau disponible</li>
              <li><span class="n">3</span> Recevez votre confirmation par e-mail</li>
            </ol>
            <NuxtLink :to="contactInfo.bookingUrl" class="btn btn--light btn--lg btn--block">
              Réserver sur Fresha
            </NuxtLink>
            <p class="booking-note">Le bouton sera relié au lien Fresha réel de Chez Mona.</p>
          </div>
        </div>

        <!-- Carte -->
        <div class="map-block">
          <ImagePlaceholder icon="pin" label="Carte Google Maps à intégrer" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---- Hero / page-head ---- */
.page-head {
  padding-block: clamp(48px, 7vw, 84px) clamp(28px, 4vw, 40px);
  text-align: center;
}
.page-head .lead {
  margin-top: 1rem;
}

/* ---- Section principale ---- */
.content-section {
  padding-top: 0;
}

/* ---- Grille coordonnées / réservation ---- */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}

.info-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: clamp(1.4rem, 3vw, 2rem);
}
.info-list {
  list-style: none;
  margin: 1.4rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}
.info-list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.info-list .ico {
  width: 42px;
  height: 42px;
  flex: none;
  border-radius: 12px;
  background: var(--sand);
  color: var(--brown);
  display: grid;
  place-items: center;
}
.info-list .ico svg {
  width: 20px;
  height: 20px;
}
.info-list b {
  display: block;
  font-weight: 700;
  font-size: .95rem;
}
.info-list span {
  color: var(--stone);
  font-size: .92rem;
}
.hours {
  margin-top: 1.6rem;
  border-top: 1px solid var(--border);
  padding-top: 1.2rem;
}
.hours h3 {
  font-size: 1.2rem;
  margin-bottom: .7rem;
}
.hours dl {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: .45rem 1rem;
  font-size: .92rem;
}
.hours dt {
  color: var(--ink);
  font-weight: 600;
}
.hours dd {
  margin: 0;
  color: var(--stone);
  text-align: right;
}
.hours dd.closed {
  color: var(--terra);
}

/* ---- Réservation en ligne ---- */
.booking-card {
  background: var(--espresso);
  color: #fff;
  border-radius: var(--radius);
  padding: clamp(1.6rem, 3vw, 2.2rem);
  position: relative;
  overflow: hidden;
}
.booking-card::before {
  content: "";
  position: absolute;
  inset: auto -20% -50% auto;
  width: 70%;
  height: 120%;
  background: radial-gradient(circle, rgba(188, 123, 83, .4), transparent 65%);
}
.booking-card > * {
  position: relative;
}
.booking-card h2 {
  color: #fff;
}
.booking-card p {
  color: rgba(255, 255, 255, .74);
  margin: .8rem 0 1.6rem;
}
.booking-steps {
  list-style: none;
  padding: 0;
  margin: 0 0 1.8rem;
  display: flex;
  flex-direction: column;
  gap: .9rem;
}
.booking-steps li {
  display: flex;
  gap: .8rem;
  align-items: center;
  font-size: .92rem;
  color: rgba(255, 255, 255, .85);
}
.booking-steps .n {
  width: 28px;
  height: 28px;
  flex: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, .12);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: .85rem;
  color: #fff;
}
.booking-note {
  font-size: .82rem;
  margin: 1rem 0 0;
  color: rgba(255, 255, 255, .6);
}

/* ---- Carte ---- */
.map-block {
  margin-top: clamp(28px, 4vw, 40px);
  aspect-ratio: 21 / 8;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--linen);
}

/* ---- Responsive ---- */
@media (max-width: 860px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .map-block {
    aspect-ratio: 4 / 3;
  }
}
</style>
