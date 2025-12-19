<script setup>
import FooterLeftBottom from "@/components/footer/FooterLeftBottom.vue";
</script>

<template>
  <div class="footer-left">
    <div class="footer-left__top">
      <div class="footer-left__container">
        <div class="footer-left__block-logo d-flex flex-column">
          <a class="footer-left__logo" href="/">
            <img src="/images/app-header-logo-new.png" alt="" class="footer-left__logo__img" />
          </a>
        </div>

        <section class="footer-left__section-nav">
          <h6 class="footer-left__section-nav__title">Навигация</h6>

          <div class="footer-left__block-nav">
            <nav class="footer-left__nav">
              <a href="#Production">Кейсы</a>
              <a href="#Cases">Продукция</a>
              <a href="#About">О нас</a>
            </nav>

            <nav class="footer-left__nav">
              <a href="#WhyChooseUs">Преимущества</a>
              <a href="#Contacts">Контакты</a>
            </nav>
          </div>
        </section>
      </div>
    </div>

    <FooterLeftBottom />
  </div>
</template>

<style scoped lang="scss">
.footer-left {
  @media all and (max-width: 1200px) {
    order: 2;
  }

  &__top {
    margin-bottom: 125px;

    @media all and (max-width: 1200px) {
      margin-bottom: 120px;
    }
  }

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
  }

  &__block-nav {
    display: flex;
    justify-content: space-between;
    gap: 80px;
  }
}

.footer-left__section-nav {
  display: flex;
  flex-direction: column;
  gap: 22px;

  &__title {
    color: #FFFFFF;
    font-size: 16px;
    opacity: .5;
  }
}

.footer-left__nav {
  display: flex;
  flex-direction: column;
  gap: 15px;

  & a {
    color: #FFFFFF;
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: #7A4FF1;
    }
  }
}

.footer-left__block-logo {
  gap: 18px;

  &__text {
    color: #555555;
    font-size: 12px;
  }
}

.footer-left__logo {
  height: 130px;
  width: 120px;

  &__img {
    width: 100%;
    height: 100%;
  }
}

@media all and (max-width: 720px) {
  .footer-left__top {
    margin-bottom: 24px;
  }
}
</style>