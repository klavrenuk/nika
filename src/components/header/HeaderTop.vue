<script setup>
import { navHeader } from '@/constants/constants';
</script>

<template>
  <div class="header-top">
    <div class="row">
      <div class="col-4">
        <a>
          <img src="/images/logo.svg" alt="Ника" />
        </a>
      </div>

      <div class="col-8 header-top__right">
        <nav class="header-top__nav">
          <a v-for="navItem in navHeader" :key="navItem.url" :href="navItem.url" class="header-top__nav__link">
            {{ navItem.name }}
          </a>
        </nav>

        <a href="tel:+79380802222" class="header-top__phone">+7 (938) 080-22-22</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-top {
  padding: 32px 0 0;

  &__right {
    display: flex;
    align-items: center;
    gap: 90px;
    justify-content: flex-end;
  }

  &__phone {
    color: #fff;

    &:hover, &:active, &:focus {
      color: #7A4FF1;
    }
  }
}

.header-top__nav {
  display: flex;
  align-items: center;
  gap: 20px;

  &__link {
    color: #fff;
    font-size: 16px;

    &:hover, &:active, &:focus {
      color: #7A4FF1;
    }
  }
}

@media all and (max-width: 1200px) {
  .header-top__phone {
    display: none;
  }

  .header-top__right {
    justify-content: flex-end;
  }
}

@media all and (max-width: 720px) {
  .header-top__right {
    display: none;
  }
}
</style>