<script setup>

</script>

<template>
  <div class="footer-left-bottom d-flex flex-column">
    <p class="footer-left-bottom__copy">© 2025. Все права защищены</p>
    <h6 class="footer-left-bottom__title">
      <a href="/docs/policy.docx" download="Политика обработки персональных данных">Политика обработки персональных данных</a> | <a
        href="/docs/policy.docx" download="Согласие на обработку персональных данных">Согласие на обработку персональных данных</a>
    </h6>
    <img src="/images/footer-left-img.jpg" alt="" class="footer-left-bottom__img" />
  </div>
</template>

<style scoped lang="scss">
.footer-left-bottom {
  gap: 20px;

  @media all and (max-width: 1200px) {
    flex-direction: column-reverse !important;
  }

  &__title {
    color: #555555;
    font-size: 16px;

    & a {
      color: #555555;

      &:hover,
      &:active,
      &:focus {
        color: #fff;
      }
    }
  }

  &__img {
    width: 100%;
    height: 297px;
    object-fit: cover;
    border: 5px solid #fff;
  }
}

.footer-left-bottom__title,
.footer-left-bottom__copy {
  display: none;

  @media all and (max-width: 1200px) {
    display: block;
    font-size: 12px;
    color: #555555;
  }
}
</style>