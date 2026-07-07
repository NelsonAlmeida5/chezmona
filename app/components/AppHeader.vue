<script setup lang="ts">
const links = [
  { to: '/', label: 'Accueil' },
  { to: '/prestations', label: 'Prestations & tarifs' },
  { to: '/a-propos', label: 'Galerie / À propos' },
  { to: '/contact', label: 'Contact' }
]
</script>

<template>
  <header class="site-header">
    <div class="wrap nav">
      <NuxtLink to="/" class="brand" aria-label="Chez Mona — accueil">
        <img src="/images/logo/LOGO V1 NOIR SF.png" alt="Chez Mona" class="brand__logo">
      </NuxtLink>
      <nav class="nav__links" aria-label="Navigation principale">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
          exact-active-class="nav__link--active"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contact" class="nav__cta">Réserver un rendez-vous</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: var(--ivory);
  border-bottom: 1px solid var(--border);
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding-block: 1rem;
}
.brand__logo {
  height: 38px;
  width: auto;
}
.nav__links {
  display: flex;
  align-items: center;
  gap: .3rem;
  flex-wrap: wrap;
}
.nav__link {
  font-weight: 600;
  font-size: .92rem;
  color: var(--ink);
  padding: .55em .9em;
  border-radius: 999px;
  transition: color .2s, background .2s;
}
.nav__link:hover {
  color: var(--brown);
}
.nav__link--active {
  color: var(--brown);
  background: var(--sand);
}
.nav__cta {
  margin-left: .5rem;
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  font-size: .92rem;
  color: #fff;
  background: var(--brown);
  padding: .7em 1.3em;
  border-radius: 999px;
  white-space: nowrap;
  transition: background .2s;
}
.nav__cta:hover {
  background: var(--brown-d);
}
</style>
