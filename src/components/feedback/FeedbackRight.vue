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
    <h3 class="feedback-right__title">
      Рассчитать объект<br /><span>за 30 минут</span>
    </h3>
    <form @submit.prevent="handleSubmit" class="feedback-right__form d-flex flex-column">
      <input class="form-control" id="name" aria-describedby="emailHelp" placeholder="Ваше имя">
      <input class="form-control" id="company" aria-describedby="emailHelp" placeholder="Компания">
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="E-mail">
      <input type="phone" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="+7 (999) 999-99-99">
      <input class="form-control" id="area" aria-describedby="emailHelp" placeholder="Тип объекта и площадь (м²) ">

      <div class="form-check feedback-right__form__check">
        <input class="form-check-input" type="checkbox" value="" id="checkDefault" v-model="isChecked" :class="{'checked': isChecked}">
        <label class="form-check-label" for="checkDefault">
          <p class="feedback-right__politics">Я согласен(а) с <a href="/docs/policy.docx" download="Политикой обработки персональных данных">Политикой обработки персональных данных</a> и даю <a href="/docs/agree.docx" download="Согласие на обработку персональных данных">согласие на обработку персональных данных</a></p>
        </label>
      </div>

      <button class="app-button feedback-right__submit" :disabled="!isChecked" :class="{'disabled': !isChecked}">
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