<script setup lang="ts">
defineProps<{
  title: string
  text: string
  ctaLabel: string
  ctaTo: string
}>()
</script>

<template>
  <div class="cta-band">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
    <NuxtLink :to="ctaTo" class="cta-band__btn">{{ ctaLabel }}</NuxtLink>
  </div>
</template>

<style scoped>
.cta-band {
  background: var(--espresso);
  color: #fff;
  border-radius: var(--radius-lg);
  padding: clamp(36px, 6vw, 68px);
  text-align: center;
  position: relative;
  overflow: hidden;
}
.cta-band::before {
  content: "";
  position: absolute;
  inset: auto -10% -40% auto;
  width: 60%;
  height: 120%;
  background: radial-gradient(circle, rgba(188, 123, 83, .35), transparent 65%);
}
.cta-band h2 {
  color: #fff;
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 400;
  position: relative;
}
.cta-band p {
  color: rgba(255, 255, 255, .72);
  max-width: 52ch;
  margin: 1rem auto 2rem;
  position: relative;
}
.cta-band__btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  padding: 1.05em 2em;
  border-radius: 999px;
  background: #fff;
  color: var(--brown);
  transition: transform .25s ease, box-shadow .25s ease;
}
.cta-band__btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}
</style>
