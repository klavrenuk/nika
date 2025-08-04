<script setup>
import StepSectionPhoto from "@/components/steps/StepSectionPhoto.vue";
import SectionName from "@/components/section/SectionName.vue";
import Steps3 from './Step3.vue';

const text1 = 'Стиль и практичность для любых пространств. Коллекции для ванных, кухонь, гостиных, офисов, ресторанов и других интерьеров. Широкий выбор коллекций под любые задачи.';
const text2 = 'Надёжные решения для складов, производств и коммерческих пространств. Повышенная прочность, безопасность и долговечность.';
</script>

<template>
  <section id="Cases" class="app-section steps">
    <div class="app-container">
      <SectionName class="steps__section-name">Этапы работы</SectionName>
      <h3 class="steps__title">
        Варианты продукции
      </h3>

      <div class="d-flex flex-column steps__container">
        <StepSectionPhoto title="Интерьерная плитка" :text="text1" photo="/images/step1.svg" />
        <Steps3 />
        <StepSectionPhoto title="Для промышленных и технических объектов" :text="text2" photo="/images/step2.svg" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.steps {
  &__section-name {
    margin-bottom: 42px;
  }

  &__title {
    margin-bottom: 80px;
    font-weight: 500;
    font-size: 50px;
    color: #121211;
  }

  &__container {
    gap: 100px;
  }
}
</style>