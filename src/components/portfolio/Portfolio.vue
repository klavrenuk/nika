<script setup>
import { ref, onMounted } from 'vue'

import SectionName from "@/components/section/SectionName.vue";
import PortfolioSlider from './PortfolioSlider.vue';


const images = [
  {
    id: 1,
    src: '/images/portfolio/Автовокзал имени М. А. Шолохова 15000 м² .jpg',
    thumbnail: '/images/portfolio-img-1.png',
    title: 'Автовокзал имени М. А. Шолохова .jpg',
    alt: 'Автовокзал им. М.А. Шолохова',
    text: 'Автовокзал им. М.А. Шолохова',
    textRight: '15000м²'
  },
  {
    id: 2,
    src: '/images/portfolio/ЖК «Николаевский»  20000 м².jpg',
    thumbnail: '/images/portfolio/portfolio-img-1.png',
    title: 'ЖК «Николаевский»',
    alt: 'ЖК «Николаевский»',
    text: 'ЖК «Николаевский»',
    textRight: '20000м²'
  },
  {
    id: 3,
    src: '/images/portfolio/ЖК «Левенцовский»  40000 м².jpg',
    thumbnail: '/images/portfolio/portfolio/ЖК «Левенцовский»  40000 м².jpg',
    title: 'ЖК «Левенцовский»  40000 м².jpg',
    alt: 'ЖК «Левенцовский»  40000 м².jpg',
    text: 'ЖК «Левенцовский».jpg',
    textRight: '40000м²'
  },

  {
    id: 4,
    src: '/images/portfolio/ЖК «Сокольники»  15000 м².webp',
    thumbnail: '/images/portfolio/ЖК «Сокольники»',
    title: 'ЖК «Сокольники»',
    alt: 'ЖК «Сокольники»',
    text: 'ЖК «Сокольники»',
    textRight: '15000м²'
  },
  {
    id: 5,
    src: '/images/portfolio/МБОУ СОШ 3500 м².jpg',
    thumbnail: '/images/portfolio/МБОУ СОШ 3500 м².jpg',
    title: 'МБОУ СОШ 3500 м².jpg',
    alt: 'МБОУ СОШ 3500 м².jpg',
    text: 'МБОУ СОШ',
    textRight: '3500м²'
  },
  {
    id: 6,
    src: '/images/portfolio/МБОУ СОШ № 39 2500 м²_.webp',
    thumbnail: '/images/portfolio/МБОУ СОШ № 39 2500 м²_.webp',
    title: 'МБОУ СОШ № 39 2500 м²',
    alt: 'МБОУ СОШ № 39 2500 м²',
    text: 'МБОУ СОШ № 39',
    textRight: '2500м²'
  },

  {
    id: 7,
    src: '/images/portfolio/Отель «Sun palase Gagra» 2500 м².jpg',
    thumbnail: '/images/portfolio/portfolio-img-1.png',
    title: 'Отель «Sun palase Gagra»',
    alt: 'Отель «Sun palase Gagra»',
    text: 'Отель «Sun palase Gagra»',
    textRight: '2500м²'
  },
  {
    id: 8,
    src: '/images/portfolio/Перинатальный центр 5000 м².jpg',
    thumbnail: '/images/portfolio/portfolio-img-1.png',
    title: 'Перинатальный центр',
    alt: 'Перинатальный центр',
    text: 'Перинатальный центр',
    textRight: '5000м²'
  },
  {
    id: 9,
    src: '/images/portfolio/Ресторан «KFS» 1000 м².jpg',
    thumbnail: '/images/portfolio/Ресторан «KFS»',
    title: 'Ресторан «KFS»',
    alt: 'Ресторан «KFS»',
    text: 'Ресторан «KFS»',
    textRight: '1000м²'
  },

  {
    id: 10,
    src: '/images/portfolio/ТЦ «Сиверс»  15000м2.jpg',
    thumbnail: '/images/portfolio/ТЦ «Сиверс»  15000м2.jpg',
    title: 'ТЦ «Сиверс»',
    alt: 'ТЦ «Сиверс»',
    text: 'ТЦ «Сиверс»',
    textRight: '15000м2'
  },
  {
    id: 11,
    src: '/images/portfolio/Центр неврологии 9 000 м² г. Москва.jpg',
    thumbnail: '/images/portfolio/Центр неврологии 9 000 м² г. Москва.jpg',
    title: 'Центр неврологии 9 000 м² г. Москва.jpg',
    alt: 'Центр неврологии 9 000 м² г. Москва.jpg',
    text: 'Центр неврологии',
    textRight: '9 000м²'
  },
  {
    id: 12,
    src: '/images/portfolio/Amra Park-hotel & SPA 4500 м².jpg',
    thumbnail: '/images/portfolio/Amra Park-hotel & SPA 4500 м²',
    title: 'Amra Park-hotel & SPA 4500 м²',
    alt: 'Amra Park-hotel & SPA 4500 м²',
    text: 'Amra Park-hotel & SPA',
    textRight: '4500м²'
  },

  {
    id: 13,
    src: '/images/portfolio/Paradise Beach Hotel 3500 м² .jpg',
    thumbnail: '/images/portfolio/Paradise Beach Hotel 3500 м² .jpg',
    title: 'Paradise Beach Hotel 3500 м²',
    alt: 'Paradise Beach Hotel 3500 м²',
    text: 'Paradise Beach Hotel',
    textRight: '3500м²'
  },

  {
    id: 14,
    isCustom: true
  }
]

let sliderInterval = null

const currentIndex = ref(0)
const visibleRef = ref(false)
const indexRef = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
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
            <div class="portfolio-block-img animation-fade-in-out"></div>
          </div>
        </div>

        <div class="portfolio__right d-flex flex-column scroll-animate">
          <div class="slider no-scrollbar">
            <PortfolioSlider :list="images" @on-click="showPhotoSwipe" />
          </div>

          <div class="portfolio__right__bottom"></div>
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

.portfolio__wrap-title {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  position: relative;
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

.portfolio__right__bottom {
  margin-top: 590px;
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

.portfolio {
  .slider {
    width: 130%;
    display: flex;
    align-items: center;
    gap: 10px;
    left: 0;
    position: absolute;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .slider-item {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    flex-shrink: 0;

    & img {
      width: 650px !important;
    }
  }

  .slider-item.active {
    opacity: 1;
    z-index: 1;
  }

  .slider-item img {
    width: 100%;
    height: 560px;
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

@media all and (max-width: 1200px) {
  .slider  {
    margin-top: 1rem;
    position: relative !important;
    flex-direction: column;
    width: 100% !important;
  }

  .slider-item {
    height: auto !important;

    & img {
      height: 300px !important;
    }

    .portfolio__right__bottom {
      display: none;
    }

    .portfolio__wrap-title {
      margin-top: 10px;
    }

    .portfolio__right__title {
      font-size: 16px;
    }
  }

  .portfolio__right__bottom {
    display: none;
  }
}
</style>