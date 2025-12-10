<script setup>
import { ref, onMounted } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

import SectionName from "@/components/section/SectionName.vue";
import PortfolioSliderCustom from './PortfolioSliderCustom.vue';


const images = [
  {
    src: '/images/portfolio-img.jpg',
    thumbnail: '/images/portfolio-img.jpg',
    title: 'Музей Самбекские высоты',
    alt: 'Музей Самбекские высоты',
    text: 'Музей Самбекские высоты'
  },
  {
    src: '/images/portfolio-img-1.png',
    thumbnail: '/images/portfolio-img-1.png',
    title: 'Автовокзал им. М.А. Шолохова',
    alt: 'Автовокзал им. М.А. Шолохова',
    text: 'Автовокзал им. М.А. Шолохова'
  },
  {
    isCustom: true
  }
]

let sliderInterval = null

const currentIndex = ref(0)
const isOpen = ref(false)
const visibleRef = ref(false)
const indexRef = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const showPhotoSwipe = (index) => {
  visibleRef.value = true
  indexRef.value = index
}

const hidePhotoSwipe = () => {
  visibleRef.value = false;
}

onMounted(() => {
  setTimeout(() => {
    sliderInterval = setInterval(nextSlide, 5000)
  }, 7000)
})
</script>

<template>
  <section id="Production" class="portfolio app-section">
    <div class="app-container">
      <div class="app-component-layout">
        <div class="d-flex flex-column portfolio__left position-relative">
          <SectionName class="portfolio__left__section-name" type="white">Работы</SectionName>

          <div class="portfolio__header">
            <h5 class="portfolio__title">
              Портфолио объектов
            </h5>
            <h6 class="portfolio__subtitle">
              >50 масштабных проектов
            </h6>
          </div>

          <div class="position-relative portfolio__wrap-btn">
            <a class="portfolio__submit-application app-button" href="#application">
              оставить заявку
            </a>
            <div class="portfolio-block-img"></div>
          </div>
        </div>

        <div class="portfolio__right d-flex flex-column">
          <div class="slider">
            <div v-for="(image, index) in images" :key="index" class="slider-item"
              :class="{ 'active': currentIndex === index }" @click="showPhotoSwipe(index)">
              <PortfolioSliderCustom v-if="image.isCustom" />
              <img v-else :src="image.src" :alt="image.alt">
            </div>

            <vue-easy-lightbox :visible="visibleRef" :imgs="images" :index="indexRef"
              @hide="hidePhotoSwipe"></vue-easy-lightbox>
          </div>

          <h6 class="portfolio__right__title">{{ images[currentIndex].text }}</h6>
          <a class="portfolio__right__link">
            <span>Смотреть еще</span>
            <img src="/images/portfolio-arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio {
  background: #7A4FF1;
}

.portfolio__left {
  gap: 40px;
  color: #fff;

  &__section-name {
    padding-bottom: 16px;
  }

  & .portfolio__title {
    font-size: 48px;
    color: #fff;
    line-height: 48px;
  }

  & .portfolio__subtitle {
    font-size: 22px;
    line-height: 120%;
  }
}

.portfolio__submit-application {
  max-width: 340px;
  width: 100%;
  padding: 23px 90px;
  color: #1D1D1D;
  font-size: 12px;
  background: #fff;

  &:hover,
  &:active,
  &:focus {
    color: #7A4FF1;
  }
}

.portfolio__right {
  gap: 30px;

  &__title {
    color: #FFFFFF;
    font-size: 22px;
  }

  &__link {
    color: #C1AAFF;
    font-size: 22px;
    display: flex;
    align-items: center;
    gap: 18px;
  }
}

.portfolio-block-img {
  position: absolute;
  bottom: 85px;
  left: 468px;
  height: 52px;
  width: 78px;
  background: url("@/assets/images/portfolio-block-img.svg") center center no-repeat;
}

@media all and (max-width: 720px) {
  .portfolio__left {
    gap: 16px;
  }

  .portfolio__submit-application {
    max-width: 100%;
  }

  .portfolio__title {
    font-size: 32px !important;
    padding-bottom: 0 !important;
  }

  .portfolio__right {
    gap: 16px;
  }

  .portfolio__submit-application {
    padding: 11px 8px;
    font-size: 12px;
  }

  .portfolio__submit-application {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
}

.swiper-wrapper {
  height: 580px !important;

  & img {
    height: 580px !important;
    object-fit: cover
  }
}

.portfolio {
  .slider {
    width: 100%;
    height: 560px;
    position: relative;
    overflow: hidden;
  }

  .slider-item {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease, visibility 0.5s ease;

    &.fade-in {
      opacity: 1;
      visibility: visible;
    }

    &.fade-out {
      opacity: 0;
      visibility: hidden;
    }
  }

  .slider-item.active {
    opacity: 1;
    z-index: 1;
  }

  .slider-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.portfolio__header {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.portfolio__wrap-btn {
  margin-top: 140px;

  @media all and (max-width: 1200px) {
    margin-top: 0;
  }
}
</style>