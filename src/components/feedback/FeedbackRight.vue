<script setup>
import SectionName from "@/components/section/SectionName.vue";

const handleSubmit = () => {
  console.log('submit');
}
</script>

<template>
  <div class="feedback-right">
    <SectionName>Форма обратной связи</SectionName>
    <h3 class="feedback-right__title">
      Рассчитать объект<br /><span>за 30 минут</span>
    </h3>
    <form @submit.prevent="handleSubmit" class="feedback-right__form d-flex flex-column">
      <input class="form-control" id="name" aria-describedby="emailHelp" placeholder="Ваше имя">
      <input class="form-control" id="company" aria-describedby="emailHelp" placeholder="Компания">
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail">
      <input type="phone" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="+7 (999) 999-99-99">
      <input class="form-control" id="area" aria-describedby="emailHelp" placeholder="Тип объекта и площадь (м²) ">
      <button class="app-button feedback-right__submit">
        оставить заявку
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.feedback-right {
  &__title {
    margin: 10px 0 40px;
    font-weight: 500;
    font-size: 48px;
    color: #121211;
    line-height: 43px;

    & span {
      color: #7A4FF1
    }
  }
}

.feedback-right__form {
  gap: 10px;

  & input {
    padding: 17px 0;
    color: #868B91;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid #868B9133;
    outline: none !important;
    border-radius: 0;

    &:focus {
      outline: none !important;
      box-shadow: none;
      border-bottom: 1px solid #7A4FF1;
    }
  }
}

.feedback-right__submit {
  margin-top: 40px;
  color: #fff;
}
</style>