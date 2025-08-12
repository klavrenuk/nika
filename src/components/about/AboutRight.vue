<script setup>
import AboutAchievements from "@/components/about/AboutAchievements.vue";
import {onMounted, ref} from "vue";

const counterYears = ref(0);
const counterPartners = ref(0);

const text = () => {
  const timerYears = setInterval(() => {
    if (counterYears.value === 20) {
      clearInterval(timerYears);
      return
    }

    counterYears.value += 1;
  }, 200)

  const timerPartners = setInterval(() => {
    if (counterPartners.value === 15) {
      clearInterval(timerPartners);
      return
    }

    counterPartners.value += 1;
  }, 200)
}

onMounted(() => {
  text()
})
</script>

<template>
  <div class="about-right d-flex flex-column">
    <h4 class="about-right__title">
      О компании
    </h4>

    <p class="about-right__text">
      Мы специализируемся на оптовых поставках керамики и керамогранита для жилых, коммерческих и общественных помещений. Прямые поставки по Югу России, ЛНР и ДНР.
    </p>

    <div class="d-flex flex-column about-right__wrap-text">
      <p class="about-right__text text-white">
        Мы более 20 лет специализируемся на оптовых поставках керамической плитки и керамогранита от ведущих производителей. Являемся официальными дилерами Piastrella, M‑Квадрат (PROGRES,PiezaRosa), ProTile, Italon, Kerama Marazzi, Нефрит Керамика, Unitile, Grani Taganaya и других признанных брендов.
      </p>
      <p class="about-right__text text-white">
        Осуществляем поставки в Ростов‑на‑Дону, Краснодарский край, ЛНР и ДНР для жилых комплексов, коттеджных посёлков, а также коммерческих и общественных объектов — от фасадов и террас до интерьеров ресторанов, школ и супермаркетов.
      </p>
    </div>

    <img src="/images/about-people.svg" alt="" class="about-right__people" />

    <div class="about-right__footer d-flex align-items-center flex-wrap">
      <AboutAchievements :text="`${counterYears} лет`" description="опыта в отрасли" />
      <AboutAchievements :text="`+${counterPartners}`" description="заводов‑партнёров" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-right {
  gap: 23px;

  &__title {
    margin-bottom: 25px;
    color: #121211;
    font-size: 48px;
    line-height: 43px;
    font-weight: 500;
  }

  &__text {
    color: #121211;
    font-size: 22px;
    line-height: 120%;

    &.text-white {
      color: #949494 !important;
    }
  }
}

.about-right__wrap-text {
  gap: 10px;
}

.about-right__footer {
  gap: 88px;
}

.about-right__people {
  margin-top: 48px;
  height: 72px;
  width: 204px;
  object-fit: cover;
}

@media all and (max-width: 720px) {
  .about-right {
    margin-top: 32px;
    gap: 16px;
  }

  .about-right__title {
    margin-bottom: 0;
    font-size: 32px;
  }

  .about-right__footer {
    gap: 16px;
  }
}
</style>