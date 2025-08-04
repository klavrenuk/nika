<script setup>

</script>

<template>
  <div class="app-component-layout">
    <img src="/images/step3.jpg" alt="" />

    <div class="step3__right d-flex flex-column">
      <div>
        <h5 class="step3__right__title">Экстерьерная плитка</h5>
        <p class="step3__right__text">Устойчивость к погоде и износостойкость. Идеально подходит для фасадов, террас, балконов и уличных дорожек.</p>
      </div>

      <div class="step3__right__footer">
        <img src="/images/step3-footer.png" alt="" class="step3__right__footer__img" />
        <a class="app-button step3__right__footer__btn" href="#application">
          оставить заявку
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.step3 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.step3__right {
  justify-content: space-between;

  &__title {
    margin-bottom: 42px;
    color: #121211;
    text-transform: uppercase;
    font-size: 22px;
  }

  &__text {
    color: #868B91;
    font-weight: 500;
  }

  &__title,
  &__text {
    text-align: right;
  }
}

.step3__right__footer {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-end;

  &__btn {
    height: 60px;
    width: 100%;
    max-width: 300px;
    padding: 0;
    color: #fff;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    width: 182px;
    height: 175px;
    object-fit: cover;
  }
}

@media all and (max-width: 720px) {
  .step3__right__footer {
    flex-direction: column;

    & img {
      width: 100%;
      object-fit: cover;
    }
  }

  .step3__right__text {
    margin-bottom: 16px;
  }
}
</style>