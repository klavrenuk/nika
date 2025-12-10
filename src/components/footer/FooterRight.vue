<script setup>
import { socials, footerRequisites } from '@/constants/constants';

import FooterContactBlock from "@/components/footer/FooterContactBlock.vue";
</script>

<template>
  <div class="footer-right">
    <div class="footer-right__top">
      <section class="footer-right__reqs">
        <h6 class="footer-right__reqs__title">
          Реквизиты:
        </h6>
        <ul class="footer-right__reqs__list">
          <li v-for="req in footerRequisites" :key="req">
            {{ req }}
          </li>
          <li>
            <a>Скачать реквизиты</a>
          </li>
        </ul>
      </section>

      <div class="footer-right__socials">
        <a v-for="social in socials" :key="social.link" :href="social.link" target="_blank" class="footer-right__social">
          <img :src="social.icon" alt="" class="footer-right__social__icon" />
        </a>
      </div>
    </div>

    <div class="footer-right__bottom">
      <div class="footer-right__bottom__container">
        <div class="footer-right__info d-flex flex-column">
          <FooterContactBlock icon="/images/icon-phone-footer.svg" text="Телефон:" type="phone" />
          <FooterContactBlock icon="/images/icon-email-footer.svg" text="Почта:" type="email" />
        </div>

        <div class="footer-right__texts-bottom">
          <p>© 2024. Все права защищены</p>
          <p>Политика конфиденциальности | Пользовательское соглашение</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-right {
  justify-content: space-between;
  display: flex;
  flex-direction: column;

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

.footer-right__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media all and (max-width: 1200px) {
    flex-direction: column;
    margin-bottom: 2rem;
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

.footer-right__socials {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-right__reqs {
  display: flex;
  flex-direction: column;
  gap: 22px;

  &__title {
    color: #555555;
    font-size: 16px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style: none;
    padding: 0;

    & li,
    & a {
      color: #555555;
      font-size: 16px;
    }
  }
}

.footer-right__bottom__container {
  display: flex;
  flex-direction: column;
  gap: 65px;
}

.footer-right__texts-bottom {
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media all and (max-width: 1200px) {
    display: none;
  }

  & p {
    color: #555555;
    font-size: 14px;
  }
}

@media all and (max-width: 720px) {
  .footer-right__footer {
    margin-top: 16px;
  }
}
</style>