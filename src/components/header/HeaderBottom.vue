<script setup>

</script>

<template>
  <div class="header-bottom">
    <div class="header-bottom__container">
      <ul class="header-bottom__list app-list d-flex flex-column">
        <li>
          <span class="header-bottom__list__dot"></span>
          <span class="header-bottom__list__text">комплектация объектов</span>
        </li>
        <li>
          <span class="header-bottom__list__dot"></span>
          <span class="header-bottom__list__text">оптовые поставки</span>
        </li>
      </ul>

      <h1 class="header-bottom__title">
        Керамическая плитка<br /> и керамогранит оптом
      </h1>
      <h1 class="header-bottom__title mobile">
        Керамическая плитка и керамогранит оптом
      </h1>

      <div class="header-bottom__control d-flex align-items-center">
        <a class="app-button header-bottom__btn header-bottom__catalog">Получить КП</a>
        <a class="app-button header-bottom__btn header-bottom__view-objects" href="#Production">Смотреть объекты ↓</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-bottom {
  padding-right: 200px;
  display: flex;
  justify-content: flex-end;

  &__container {
    max-width: 530px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    color: #fff;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__control {
    display: flex;
  }
}

.header-bottom__title {
  font-size: 48px;
  font-weight: 500;
  line-height: 43px;

  &.mobile {
    display: none;
  }
}

.header-bottom__control {
  display: flex;
  gap: 8px;
  align-items: center;
}

.header-bottom__btn {
  width: 259px;
  padding: 23px 0;
  text-align: center;
}

.header-bottom__catalog {
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  background: #7A4FF1;

  &:hover, &:active, &:focus {
    color: #0A0A0D;
    background: #fff;
  }
}

.header-bottom__view-objects {
  color: #0A0A0D;
  background: #fff;

  &:hover, &:active, &:focus {
    color: #fff;
    background: #7A4FF1;
  }
}

.header-bottom__list {
  gap: 20px;

  & li {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__dot {
    width: 9px;
    height: 9px;
    display: inline-block;
    background: #7A4FF1;
    border-radius: 100%;
  }

  &__text {
    font-size: 12px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
  }
}

@media all and (max-width: 720px) {
  .header-bottom {
    padding-right: 0;
  }

  .header-bottom__title {
    display: none;
  }

  .header-bottom__title.mobile {
    display: block;
    font-size: 32px;
    line-height: 36px;
  }
  
  .header-bottom__control {
    justify-content: space-between;
  }

  .header-bottom__btn {
    width: auto;
    padding: 11px 8px;
    font-size: 12px;
  }

  .header-bottom__container {
    max-width: 100%;
    gap: 32px;
  }

  .header-bottom__list {
    margin-top: 32px;
  }

  .header-bottom__control {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;

    & button {
      width: 100%;
    }
  }
}
</style>