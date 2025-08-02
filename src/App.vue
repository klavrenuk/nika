<template>
  <div class="app">
    <AppHeader />
    <About />
    <Portfolio />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import About from '@/components/about/About.vue';
import Portfolio from "@/components/portfolio/Portfolio.vue";
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>