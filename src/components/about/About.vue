<script setup>
import { ref, onMounted } from 'vue'

import AboutRight from "@/components/about/AboutRight.vue";
import SectionName from "@/components/section/SectionName.vue";
import AboutAchievements from "@/components/about/AboutAchievements.vue";
import {isVisible} from "bootstrap/js/src/util";

const counter = ref(0);
const isShowAnimateBlocks = ref(false)

let observer = null

const text = () => {
  const timer = setInterval(() => {
    if (counter.value === 5) {
      clearInterval(timer);
      return
    }

    counter.value += 1;
  }, 200)
}

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isShowAnimateBlocks.value = true
      observer.unobserve(entry.target)

      setTimeout(() => {
        text()
      }, 1500)
    }
  })
}

const setIntersection = () => {
  const aboutElement = document.querySelector('#About')
  if (aboutElement) {
    observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1
    })
    observer.observe(aboutElement)
  }
}

onMounted(() => {
  setIntersection();
})
</script>

<template>
  <section id="About" class="about app-section">
    <div class="app-container">
      <div class="app-component-layout">
        <div class="about__left d-flex flex-column">
          <SectionName>О бренде</SectionName>

          <div class="about__company d-flex flex-column">
            <div class="about__company__images d-flex align-items-end">
              <div class="about__company__img">
                <img src="/images/about-left-img.png" alt="" />
              </div>
              <div class="about__company__rect"></div>
            </div>

            <p class="about__company__text">
              ООО «Ника» — официальный дистрибьютор Italon, Kerama Marazzi, Grani Taganaya, Progres и других ведущих брендов.
            </p>
          </div>

          <AboutAchievements v-if="isShowAnimateBlocks" :text="`${counter} млн+ м²`" description="плитки реализовано на объектах" />
        </div>

        <div v-if="isShowAnimateBlocks">
          <AboutRight />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about__company {
  width: 100%;
  max-width: 360px;
  gap: 28px;

  &__images {
    gap: 10px;
  }

  &__text {
    color: #121211;
    font-size: 22px;
    line-height: 120%;
  }

  & .about__company__img {
    position: relative;
    height: 184px;
    width: 184px;

    & img {
      width: 100%;
      height: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      linear-gradient(90deg, #000000 -15.44%, rgba(0, 0, 0, 0) 18.24%, rgba(0, 0, 0, 0) 87.12%, #000000 112.38%),
      linear-gradient(0deg, rgba(6, 6, 6, 0.6), rgba(6, 6, 6, 0.6));
    }
  }

  & .about__company__rect {
    height: 25px;
    width: 25px;
    background: #7A4FF1;
  }
}

.about__left {
  justify-content: space-between;
}

@media all and (max-width: 1200px) {
  .about__company {
    width: 100%;
    max-width: 100%;
  }
}

@media all and (max-width: 720px) {
  .about__company__images {
    display: none !important;
  }

  .about__left  {
    gap: 16px;
  }
}
</style>