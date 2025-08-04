<script setup>
defineProps({
  icon: String,
  text: String,
  type: String
})
</script>

<template>
  <div class="footer-contact-block d-flex flex-column">
    <label class="footer-contact-block__label">{{ text }}</label>

    <div class="d-flex align-items-center footer-contact-block__info">
      <img :src="icon" alt="" class="footer-contact-block__icon" />
      <a v-if="type === 'phone'" href="tel:+79380802222">+7 (938) 080-22-22</a>
      <a v-if="type === 'email'" href="mailto:plitka2222@mail.ru">plitka2222@mail.ru</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-contact-block {
  gap: 20px;

  &__label {
    color: #fff;
    font-size: 16px;
    opacity: .6;
  }


  &__info {
    gap: 25px;
    align-items: center;
  }

  & .footer-contact-block__icon {
    position: relative;
    top: 2px;
  }

  & a {
    color: #FFFFFF;
    font-size: 37px;
  }
}

@media all and (max-width: 720px) {
  .footer-contact-block {
    & a {
      font-size: 16px;
    }
  }

  .footer-contact-block {
    gap: 8px;
  }

  .footer-contact-block__info {
    gap: 8px;
  }

  .footer-contact-block__icon {
    display: none;
  }
}
</style>