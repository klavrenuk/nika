<script setup>
import SectionName from "@/components/section/SectionName.vue";
</script>

<template>
  <div class="why-choose-us-left d-flex flex-column">
    <div class="d-flex flex-column">
      <SectionName>преимущества</SectionName>
      <h3 class="why-choose-us-left__title">Почему<br /> выбирают нас</h3>
      <div class="why-choose-us-left__wrap-top-img animation-fade-in-out scroll-animate">
        <img src="/images/why-choose-us-left-img.svg" alt="" class="why-choose-us-left__top-img" />
      </div>
    </div>

    <div class="why-choose-us-left__images d-flex align-items-end">
      <img src="/images/why-choose-us-left-img.jpg" alt="" class="why-choose-us-left__img" />
      <div class="why-choose-us-left__rect"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.why-choose-us-left {
  gap: 20px;
  justify-content: space-between;

  &__images {
    gap: 10px;
  }

  &__img {
    width: 308px;
    height: 298px;
  }

  &__rect {
    height: 25px;
    width: 25px;
    background: #7A4FF1;
  }

  &__title {
    margin: 20px 0 13px;
    color: #121211;
    font-size: 48px;
    font-weight: 500;
  }
}

.why-choose-us-left__top-img {
  height: 52px;
  width: 180px;
}

.why-choose-us-left__wrap-top-img {
  width: 315px;
  text-align: right;
}

@media all and (max-width: 720px) {
  .why-choose-us-left__top-img,
  .why-choose-us-left__wrap-top-img {
    display: none;
  }

  .why-choose-us-left__title {
    font-size: 32px;

    @media all and (max-width: 1200px) {
      font-size: 24px;
    }

    & br {
      display: none;
    }
  }

  .why-choose-us-left__rect {
    display: none;
  }

  .why-choose-us-left__img {
    width: 100%;
  }
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>