<script setup>
import { socials } from '@/constants/constants';

import FooterContactBlock from "@/components/footer/FooterContactBlock.vue";
</script>

<template>
  <div class="footer-right">
    <div class="footer-right__info d-flex flex-column">
      <FooterContactBlock icon="" text="Телефон:" type="phone" />
      <FooterContactBlock icon="" text="Почта:" type="email" />
    </div>

    <div class="footer-right__socials d-flex align-items-center">
      <a v-for="social in socials" :key="social.link" class="footer-right__social">
        <img :src="social.icon" alt="" class="footer-right__social__icon" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-right {
  &__info {
    gap: 12px;
  }

  &__socials {
    gap: 12px;
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
</style>