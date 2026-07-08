<script setup lang="ts">
import { contactInfo } from '~/data/contact'
import { partners } from '~/data/partners'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/prestations', label: 'Prestations & tarifs' },
  { to: '/a-propos', label: 'Galerie / À propos' },
  { to: '/contact', label: 'Contact' }
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <NuxtLink to="/" aria-label="Chez Mona — accueil">
            <img src="/images/logo/chez-mona-logo-simple-blanc.png" alt="Chez Mona" class="footer__logo">
          </NuxtLink>
          <p>Institut de beauté &amp; épilation laser. Des soins certifiés, un accompagnement chaleureux.</p>
        </div>

        <nav class="footer__col" aria-label="Navigation pied de page">
          <h4>Navigation</h4>
          <NuxtLink v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
        </nav>

        <div class="footer__col">
          <h4>Contact</h4>
          <p>{{ contactInfo.address }}</p>
          <p>{{ contactInfo.phone }}</p>
          <NuxtLink :to="contactInfo.bookingUrl" class="btn btn--light footer__cta">Réserver</NuxtLink>
        </div>
      </div>

      <div class="footer__partners">
        <p class="footer__partners-label">Nos partenaires</p>
        <div class="footer__partners-row">
          <div v-for="partner in partners" :key="partner.id" class="footer__partner">
            <img :src="partner.logo" :alt="partner.name" loading="lazy">
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© {{ year }} Chez Mona — Bien-être esthétique. Certifié O-LRNIS &amp; OFSP.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--espresso);
  color: rgba(255, 255, 255, .7);
  padding-block: clamp(48px, 7vw, 72px) 2rem;
}

/* ---- Grille principale ---- */
.footer__grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 2.5rem;
}
.footer__logo {
  height: 100px;
  width: auto;
  margin-bottom: 1rem;
}
.footer__brand p {
  max-width: 34ch;
  font-size: .92rem;
  margin: 0;
}
.footer__col h4,
.footer__partners-label {
  color: #fff;
  font-family: var(--body);
  font-size: .78rem;
  letter-spacing: .18em;
  text-transform: uppercase;
  margin: 0 0 1.1rem;
}
.footer__col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.footer__col a:not(.btn),
.footer__col p {
  color: rgba(255, 255, 255, .7);
  font-size: .92rem;
  margin: 0 0 .6rem;
  transition: color .2s;
}
.footer__col a:not(.btn):hover {
  color: var(--terra);
}
.footer__cta {
  margin-top: .4rem;
  padding: .6em 1.3em;
  font-size: .85rem;
}

/* ---- Partenaires ---- */
.footer__partners {
  margin-top: 2.6rem;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, .12);
}
.footer__partners-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}
.footer__partner {
  flex: 0 0 auto;
  min-width: 0;
  height: 52px;
  padding: .5rem 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 10px;
}
.footer__partner img {
  height: 100%;
  width: auto;
  min-width: 0;
  max-width: 130px;
  object-fit: contain;
}

/* ---- Bas de page ---- */
.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, .12);
  margin-top: 2.6rem;
  padding-top: 1.6rem;
  font-size: .82rem;
}

/* ---- Responsive ---- */
@media (max-width: 860px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
  }
  .footer__brand {
    grid-column: 1 / -1;
  }
}
@media (max-width: 620px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
  .footer__col {
    align-items: flex-start;
  }
  .footer__partners-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .footer__partner {
    width: 100%;
  }
}
</style>
