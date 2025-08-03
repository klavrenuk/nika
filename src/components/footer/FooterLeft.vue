<script setup>
import FooterLeftBottom from "@/components/footer/FooterLeftBottom.vue";
import FooterLogo from "@/components/footer/FooterLogo.vue";
</script>

<template>
  <div class="footer-left">
    <div class="footer-left__top">
      <div class="footer-left__container">
        <div class="footer-left__block-logo d-flex flex-column">
          <FooterLogo />
          <p class="footer-left__block-logo__text">© 2025. Все права защищены</p>
        </div>

        <div class="footer-left__block-nav">
          <nav class="footer-left__nav">
            <a href="" target="_blank">Кейсы</a>
            <a href="" target="_blank">Продукция</a>
            <a href="" target="_blank">О нас</a>
          </nav>

          <nav class="footer-left__nav">
            <a href="" target="_blank">Преимущества</a>
            <a href="" target="_blank">Контакты</a>
          </nav>
        </div>
      </div>
    </div>

    <FooterLeftBottom />
  </div>
</template>

<style scoped lang="scss">
.footer-left {
  &__top {
    margin-bottom: 125px;
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

.footer-left__nav {
  display: flex;
  flex-direction: column;
  gap: 15px;

  & a {
    color: #FFFFFF;
    text-decoration: none;

    &:hover, &:active, &:focus {
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
</style>