<script setup>
import { ref, computed, onMounted } from 'vue';

const isOpenList = ref(false);
const isShowContent = ref(true)


const textSettings =  computed(() => {
  if(isOpenList.value) {
    return 'Сохранить'
  }

  return 'Настройки'
})

const handleClickSettings = () => {
  if(!isOpenList.value) {
    isOpenList.value = !isOpenList.value;
    return;
  }

  acceptAll()
}

const acceptAll = () => {
  localStorage.setItem("NikaCookie", true);
  isShowContent.value = false;
}

onMounted(() => {
  const exists = localStorage.getItem('NikaCookie') !== null;

  console.log('exi', exists)

  if(exists) {
    isShowContent.value = false;
  }
})
</script>

<template>
  <div class="app-cookie-banner" v-if="isShowContent">
    <img src="/images/icon-settings.svg" alt="" class="app-cookie-banner__icon" />

    <div class="app-cookie-banner__container">
      <p class="app-cookie-banner__text">
        ООО "Ника" обрабатывает cookies с целью персонализации сервисов, и чтобы пользоваться веб-сайтом было удобнее. Вы можете запретить обработку сookies в настройках браузера. Пожалуйста, ознакомьтесь с политикой использования cookies. Читайте подробнее, как ООО "Ника" защищает ваши персональные данные.
      </p>

      <ul v-if="isOpenList" class="app-cookie-banner__list">
        <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="default" />
            <label class="form-check-label" for="default">
              <div class="text-container">
                <span class="text-top">Стандартный чекбокс</span>
                <span class="text-bottom">Требуются для работы сайта</span>
              </div>
            </label>
          </div>
        </li>

        <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="analytics" />
            <label class="form-check-label" for="analytics">
              <div class="text-container">
                <span class="text-top">Аналитические</span>
                <span class="text-bottom">Помогают улучшить сайт</span>
              </div>
            </label>
          </div>
        </li>

        <li>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="market" />
            <label class="form-check-label" for="market">
              <div class="text-container">
                <span class="text-top">Маркетинговые</span>
                <span class="text-bottom">Для персонализированной рекламы</span>
              </div>
            </label>
          </div>
        </li>
      </ul>

      <div class="app-cookie-banner__control">
        <button class="app-cookie-banner__btn" @click="handleClickSettings">
          <div class="btn-container">
            <img src="/images/icon-btn-settings.svg" alt="" />
            <span>{{ textSettings }}</span>
          </div>
        </button>
        <button class="app-cookie-banner__btn accept" @click="acceptAll">Принять все</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-cookie-banner {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 10000;
  box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  background: #fff;
  width: 100%;
  max-width: 448px;
  border-radius: 16px;
  padding: 12px;
  display: grid;
  grid-template-columns: 16px auto;
  gap: 8px;
  cursor: default !important;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__icon {
    height: 16px;
    width: 16px;
    object-fit: cover;
  }

  &__text {
    color: rgb(55, 65, 81);
    font-size: 12px;
    line-height: 16px;
  }

  &__control {
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: flex-end;
  }

  &__btn {
    padding: 4px 12px;
    font-size: 12px !important;
    font-weight: 700 !important;
    border-radius: 10px;
    border: 1px solid rgba(110, 67, 210, 0.2);
    background: rgb(255, 255, 255);

    &.accept {
      border: 1px solid #7A4FF1;
      background: #7A4FF1;
      color: #fff;
    }

    & img {
      width: 16px;
      height: 16px;
      object-fit: cover;
    }
  }
}

.btn-container {
  display: flex;
  gap: 8px;
  align-items: center;
}

.app-cookie-banner__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding-left: 0;

  & li {
    list-style: none;

    & .text-container {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    & .text-top {
      color: rgb(17, 24, 39);
      font-size: 12px;
    }

    & .text-bottom {
      color: rgb(75, 85, 99);
      font-size: 12px;
    }

    & .form-check {
      display: flex;
      gap: 8px;
    }
  }
}


@media all and (max-width: 1200px) {
  .app-cookie-banner {
    width: 100%;
    max-width: calc(100% - 1rem);
    left: 0;
    right: 0;
    margin: 0 auto;
  }
}
</style>