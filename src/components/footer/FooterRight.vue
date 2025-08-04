<script setup>
import { socials } from '@/constants/constants';

import FooterContactBlock from "@/components/footer/FooterContactBlock.vue";
</script>

<template>
  <div class="footer-right d-flex flex-column">
    <div class="footer-right__container d-flex flex-column">
      <div class="footer-right__info d-flex flex-column">
        <FooterContactBlock icon="/images/icon-phone-footer.svg" text="Телефон:" type="phone" />
        <FooterContactBlock icon="/images/icon-email-footer.svg" text="Почта:" type="email" />
      </div>

      <div class="footer-right__socials d-flex align-items-center">
        <a v-for="social in socials" :key="social.link" class="footer-right__social">
          <img :src="social.icon" alt="" class="footer-right__social__icon" />
        </a>
      </div>
    </div>

    <h6 class="footer-right__footer">НИКА</h6>
  </div>
</template>

<style scoped lang="scss">
.footer-right {
  justify-content: space-between;

  &__container {
    gap: 40px;
  }

  &__info {
    gap: 12px;
  }

  &__socials {
    gap: 12px;
  }

  &__footer {
    color: #fff;
    font-size: 50px;
    line-height: 50px;
  }
}

.footer-right__social {
  height: 47px;
  width: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7A4FF1;
}

@media all and (max-width: 720px) {
  .footer-right__footer {
    margin-top: 16px;
  }
}
</style>