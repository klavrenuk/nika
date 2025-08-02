<template>
  <div class="app">
    <AppHeader />
    <About />
    <Portfolio />
    <WhyChooseUsRight />
    <Founder />
    <Contacts />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import About from '@/components/about/About.vue';
import Portfolio from "@/components/portfolio/Portfolio.vue";
import WhyChooseUsRight from "@/components/why-choose-us/WhyChooseUsRight.vue";
import Founder from '@/components/founder/Founder.vue';
import Contacts from '@/components/contacts/Contacts.vue';
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>