<script setup>
import SectionName from "@/components/section/SectionName.vue";
</script>

<template>
  <div class="why-choose-us-left d-flex flex-column">
    <SectionName>преимущества</SectionName>
    <h3 class="why-choose-us-left__title">Почему<br /> выбирают нас</h3>

    <div class="why-choose-us-left__images d-flex align-items-end">
      <img src="/images/about-left-img.png" alt="" class="why-choose-us-left__img" />
      <div class="why-choose-us-left__rect"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.why-choose-us-left {
  gap: 20px;

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
    color: #121211;
    font-size: 48px;
    font-weight: 500;
  }
}
</style>