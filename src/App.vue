<template>
  <div class="app">
    <CustomCursor />

    <AppHeader class="scroll-animate" />
    <About class="scroll-animate" />
    <Portfolio class="scroll-animate" />
    <WhyChooseUs class="scroll-animate" />
    <Stages class="scroll-animate" />
    <Founder class="scroll-animate" />
    <Steps class="scroll-animate" />
    <Feedback class="scroll-animate" />
    <Contacts class="scroll-animate" />
    <Footer class="scroll-animate" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

import CustomCursor from '@/components/CustomCursor.vue'
import AppHeader from '@/components/header/AppHeader.vue'
import About from '@/components/about/About.vue';
import Portfolio from "@/components/portfolio/Portfolio.vue";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs.vue";
import Founder from '@/components/founder/Founder.vue';
import Contacts from '@/components/contacts/Contacts.vue';
import Footer from '@/components/footer/Footer.vue';
import Steps from '@/components/steps/Steps.vue';
import Feedback from '@/components/feedback/Feedback.vue';
import Stages from '@/components/stages/Stages.vue';

let observer = null

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}

onMounted(() => {
  const elements = document.querySelectorAll('.scroll-animate')

  observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '0px',
    threshold: 0.1
  })

  elements.forEach(element => {
    observer.observe(element)
  })
})
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";

.scroll-animate {
  opacity: 0;
  transform: translateY(20px);
  transition:
      opacity .8s cubic-bezier(.215,.61,.355,1) .1s,
      transform .8s cubic-bezier(.215,.61,.355,1) .1s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.app {
  cursor: none;
}
</style>