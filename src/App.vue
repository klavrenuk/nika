<template>
  <div class="app" :class="{'show': isShowContent}">
    <AppLoader v-if="!isShowContent" />

    <CustomCursor />

    <AppHeader class="scroll-animate" />
    <Distributers class="scroll-animate" />
    <About class="scroll-animate" />
    <Portfolio class="scroll-animate" />
    <Production class="scroll-animate" />
    <Services class="scroll-animate" />
    <WhyChooseUs class="scroll-animate" />
    <Founder class="scroll-animate" />
    <Feedback class="scroll-animate" />
    <Contacts class="scroll-animate" />
    <Footer class="scroll-animate" />

<!-- 
    <Stages class="scroll-animate" />
    <Steps class="scroll-animate" />
    <Feedback class="scroll-animate" />
    <Contacts class="scroll-animate" /> -->

    <AppCookieBanner v-if="isShowContent" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import AppLoader from '@/components/AppLoader.vue'
import CustomCursor from '@/components/CustomCursor.vue'
import AppHeader from '@/components/header/AppHeader.vue'
import About from '@/components/about/About.vue';
import Distributers from '@/components/distributes/Distributers.vue';
import Portfolio from "@/components/portfolio/Portfolio.vue";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs.vue";
import Founder from '@/components/founder/Founder.vue';
import Contacts from '@/components/contacts/Contacts.vue';
import Footer from '@/components/footer/Footer.vue';
import Steps from '@/components/steps/Steps.vue';
import Feedback from '@/components/feedback/Feedback.vue';
import Stages from '@/components/stages/Stages.vue';
import AppCookieBanner from "@/components/AppCookieBanner.vue";
import Services from '@/components/services/Services.vue'
import Production from '@/components/production/Production.vue';

let observer = null

const isShowContent = ref(false)

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}

const startAnimation = () => {
  const elements = document.querySelectorAll('.scroll-animate')

  observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '0px',
    threshold: 0.1
  })

  elements.forEach(element => {
    observer.observe(element)
  })
}

onMounted(() => {
  setTimeout(() => {
    isShowContent.value = true;
    startAnimation()
  }, 4000)
})
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";

.app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &.show {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
}

.scroll-animate {
  opacity: 0;
  transform: translateY(20px);
  transition:
      opacity 1.5s cubic-bezier(.215,.61,.355,1) .1s,
      transform 1s cubic-bezier(.215,.61,.355,1) .1s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.app {
  cursor: none;
}
</style>