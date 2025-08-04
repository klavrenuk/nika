<script setup>
defineProps({
  title: String,
  text: String,
  photo: String
})
</script>

<template>
  <section class="app-component-layout">
    <div class="d-flex flex-column step-section-photo__left">
      <div class="step-section-photo__text-info d-flex flex-column">
        <h5 class="step-section-photo__title">
          {{ title }}
        </h5>
        <p class="step-section-photo__text">{{ text }}</p>
      </div>

      <a class="app-button step-section-photo__btn" href="#application">
        Оставить заявку
      </a>
    </div>

    <img :src="photo" alt="" class="item-img" />
  </section>
</template>

<style scoped lang="scss">
.step-section-photo {
  display: grid;
  gap: 80px;
  grid-template-columns: auto 670px;

  &__title {
    color: #121211;
    font-size: 22px;
    text-transform: uppercase;
  }

  &__text {
    color: #868B91;
    font-weight: 500;
  }
}

.step-section-photo__text-info {
  gap: 42px;
}

.step-section-photo__btn {
  width: 100%;
  max-width: 300px;
  height: 60px;
  padding: 0;
  color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-section-photo__left {
  justify-content: space-between;
}

@media all and (max-width: 720px) {
  .step-section-photo__text-info {
    gap: 8px;
  }

  .item-img {
    width: 100%;
    object-fit: cover;
  }

  .step-section-photo__title {
    font-size: 16px;
  }

  .step-section-photo__text {
    margin-bottom: 8px;
  }

  .step-section-photo__btn {
    padding: 11px 8px;
    font-size: 12px;
    height: 40px;
  }
}
</style>