<script setup>
import SectionName from "@/components/section/SectionName.vue";
import Stage from './Stage.vue';

const listStages = [
  {
    title: 'Заявка',
    text: 'Принимаем заявку'
  },
  {
    title: 'Анализ',
    text: 'Анализируем технические характеристики объекта'
  },
  {
    title: 'КП',
    text: 'Формируем коммерческое предложение'
  },
  {
    title: 'Договор',
    text: 'Согласовываем условия и заключаем договор'
  },
  {
    title: 'Оплата',
    text: 'Получаем предоплату и запускаем заказ в работу'
  }
]
</script>

<template>
  <section class="stages app-section">
    <div class="app-container">
      <SectionName class="stages__section-name">Этапы работы</SectionName>
      <h3 class="stages__title">
        Как мы работаем
      </h3>
      <div class="stages__list">
        <Stage v-for="(stage, index) in listStages" :key="stage.title" :title="stage.title" :text="stage.text" :isHide="index === 4" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.stages {
  &__title {
    margin: 40px 0 70px;
    font-size: 48px;
    color: #121211;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>