<script setup lang="ts">
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
    <div class="wrap footer__inner">
      <NuxtLink to="/" class="brand" aria-label="Chez Mona — accueil">
        <img src="/images/logo/LOGO V1 NOIR SF.png" alt="Chez Mona" class="footer__logo">
      </NuxtLink>
      <nav class="footer__nav" aria-label="Navigation pied de page">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
      </nav>
      <p class="footer__copy">© {{ year }} Chez Mona — Bien-être esthétique.</p>
    </div>
  </footer>
</template>

<style scoped>
/*
  Fond clair provisoire : le logo actuel (LOGO V1 NOIR SF.png) est noir sur
  fond transparent et illisible sur le fond sombre --espresso prévu par la
  maquette. À revoir avec une variante claire du logo.
*/
.site-footer {
  background: var(--sand);
  border-top: 1px solid var(--border);
}
.footer__inner {
  padding-block: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
}
.footer__logo {
  height: 48px;
  width: auto;
}
.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: .92rem;
  font-weight: 600;
}
.footer__nav a:hover {
  color: var(--brown);
}
.footer__copy {
  margin: 0;
  font-size: .82rem;
  color: var(--stone);
  width: 100%;
}
</style>
