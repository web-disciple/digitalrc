<template>
  <section class="p-8 text-lg bg-gray-900 text-white font-title transform-card">
    <slot></slot>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .transform-card {
    transform: translate3d(-60px, 60px, 0);
  }
}
</style>