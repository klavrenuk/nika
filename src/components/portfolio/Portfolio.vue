<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import SectionName from "@/components/section/SectionName.vue";

const onSwiper = () => {
  console.log('onSwiper')
}

const onSlideChange = () => {
  console.log('onSlideChange')
}
</script>

<template>
  <section id="Production" class="portfolio app-section">
    <div class="app-container">
      <div class="app-component-layout">
        <div class="d-flex flex-column portfolio__left position-relative">
          <SectionName class="portfolio__left__section-name" type="white">Работы</SectionName>
          <h5 class="portfolio__title">
            Портфолио объектов
          </h5>
          <h6 class="portfolio__subtitle">
            >50 масштабных проектов
          </h6>
          <div class="position-relative portfolio__wrap-btn">
            <a class="portfolio__submit-application app-button" href="#application">
              оставить заявку
            </a>
            <div class="portfolio-block-img"></div>
          </div>
        </div>

        <div class="portfolio__right d-flex flex-column">
          <swiper
              :slides-per-view="1"
              :space-between="50"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
          >
            <swiper-slide>
              <img src="/images/portfolio-img.jpg" alt="Портфолио" />
            </swiper-slide>
            <swiper-slide>Slide 1</swiper-slide>
          </swiper>
          <h6 class="portfolio__right__title">Автовокзал им. М.А.Шолохова</h6>
          <a class="portfolio__right__link">
            <span>подробнее</span>
            <img src="/images/portfolio-arrow.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.portfolio {
  background: #7A4FF1;
}

.portfolio__left {
  gap: 40px;
  color: #fff;

  &__section-name,
  & .portfolio__title {
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

  &:hover, &:active, &:focus {
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
</style>