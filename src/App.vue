<template>
  <div class="app">
    <AppHeader />
    <About />
    <Portfolio />
    <WhyChooseUs />
    <Founder />
    <Steps />
    <Contacts />
    <Footer />
  </div>
</template>

<script setup>
import AppHeader from '@/components/header/AppHeader.vue'
import About from '@/components/about/About.vue';
import Portfolio from "@/components/portfolio/Portfolio.vue";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs.vue";
import Founder from '@/components/founder/Founder.vue';
import Contacts from '@/components/contacts/Contacts.vue';
import Footer from '@/components/footer/Footer.vue';
import Steps from '@/components/steps/Steps.vue';
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>