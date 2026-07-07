<script setup lang="ts">
withDefaults(defineProps<{
  text: string
  center?: boolean
}>(), {
  center: false
})
</script>

<template>
  <p class="eyebrow" :class="{ 'eyebrow--center': center }">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        opacity=".9"
        d="M12 8.2c-.9-2.2-2.6-3.8-4.7-4.2C5 3.5 3 5 3 7.4c0 2.3 2 4 4.4 4.4-1.9.5-3.4 1.9-3.4 3.9 0 1.9 1.5 3.1 3.2 2.9 2.2-.3 4-2.2 4.8-4.6.8 2.4 2.6 4.3 4.8 4.6 1.7.2 3.2-1 3.2-2.9 0-2-1.5-3.4-3.4-3.9C21 11.4 23 9.7 23 7.4 23 5 21 3.5 18.7 4 16.6 4.4 14.9 6 12 8.2Z"
      />
      <path d="M12 7.6c.5 0 .9.5.9 1.3v8.5c0 .8-.4 1.3-.9 1.3s-.9-.5-.9-1.3V8.9c0-.8.4-1.3.9-1.3Z" />
    </svg>
    {{ text }}
  </p>
</template>

<style scoped>
.eyebrow {
  font-family: var(--body);
  font-weight: 700;
  font-size: .72rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: var(--terra);
  display: inline-flex;
  align-items: center;
  gap: .6em;
  margin: 0 0 .9rem;
}
.eyebrow svg {
  width: 16px;
  height: 16px;
  flex: none;
}
.eyebrow--center {
  justify-content: center;
}
</style>
