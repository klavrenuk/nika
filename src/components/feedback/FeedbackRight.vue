<script setup>
import { ref } from "vue";

import SectionName from "@/components/section/SectionName.vue";

const isChecked = ref(false)

const handleSubmit = () => {
  console.log('submit');
}
</script>

<template>
  <div class="feedback-right">
    <SectionName>Форма обратной связи</SectionName>

    <div class="feedback-right__header">
      <h3 class="feedback-right__title">
        Хотите получить<br /><span>индивидуальное решение</span> для вашего проекта?
      </h3>
      <p class="feedback-right__description">
        После отправки формы наши специалисты свяжутся с вами в ближайшее время
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="feedback-right__form">
      <div class="feedback-right__form__grid">
        <input class="form-control" id="name" aria-describedby="emailHelp" placeholder="Ваше имя">
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail">
        <input class="form-control" id="company" aria-describedby="emailHelp" placeholder="Компания">
        <input type="phone" class="form-control" id="phone" aria-describedby="emailHelp"
          placeholder="+7 (999) 999-99-99">
      </div>

      <input class="form-control" id="area" aria-describedby="emailHelp" placeholder="Сообщение">

      <div class="form-check feedback-right__form__check">
        <input class="form-check-input" type="checkbox" value="" id="checkDefault" v-model="isChecked"
          :class="{ 'checked': isChecked }">
        <label class="form-check-label" for="checkDefault">
          <p class="feedback-right__politics">
            Я соглашаюсь на обработку персональных данных  
          </p>
        </label>
      </div>

      <button class="app-button feedback-right__submit" :disabled="!isChecked" :class="{ 'disabled': !isChecked }">
        оставить заявку
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.feedback-right {
  &__title {
    margin: 40px 0 10px;
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
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__grid {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
  }

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

.feedback-right__form__check {
  margin-top: 15px;
  display: flex;
  gap: 10px;
  align-items: flex-start;


  & .form-check-input {
    position: relative;
    top: -3px;
    height: 20px;
    width: 20px;
    padding: 0 !important;
    border: 1px solid #868B9133;
    background-color: #fff;


    &.checked {
      background-color: #7A4FF1;
    }
  }
}

.feedback-right__header {
  display: flex;
  flex-direction: column;
  gap: 16px;

  & .feedback-right__description {
    color: #949494;
    font-size: 16px;
    line-height: 120%;
  }
}

@media all and (max-width: 720px) {
  .feedback-right__title {
    font-size: 32px;
    margin-top: 16px;
  }

  .feedback-right__submit {
    padding: 11px 8px;
    font-size: 12px;
  }
}

.wrap-policy {
  margin: 1rem 0;
  display: flex;
  gap: 8px;
}

.feedback-right__politics {
  font-size: 16px;

  & a {
    font-weight: bold;
    color: #7A4FF1 !important;
  }
}

.feedback-right__submit {
  &.disabled {
    opacity: .3;
  }
}
</style>