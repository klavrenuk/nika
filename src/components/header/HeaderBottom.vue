<script setup>

</script>

<template>
  <div class="header-bottom">
    <ul class="header-bottom__list">
      <li>комплектация объектов</li>
      <li>оптовые поставки</li>
    </ul>

    <h3 class="header-bottom__title">
      Керамическая плитка<br /> и керамогранит оптом
    </h3>

    <div class="header-bottom__control d-flex align-items-center">
      <button>Перейти в каталог</button>
      <button>Смотреть объекты ↓</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-bottom {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__control {
    display: flex;
  }
}
</style>