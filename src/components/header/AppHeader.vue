<script setup>
import HeaderTop from '@/components/header/HeaderTop.vue';
import HeaderBottom from '@/components/header/HeaderBottom.vue';
</script>

<template>
  <div class="app-header">
    <div class="app-container app-header__container h-100">
      <div class="d-flex flex-column app-header__blocks h-100">
        <div class="app-header__img-top"></div>

        <HeaderTop />
        <HeaderBottom />

        <div class="app-header__img-bottom"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  position: relative;
  height: 696px;
  width: 100%;
  background: url('@/assets/images/header-back.png') center center no-repeat;
  background-color: #000;
  background-size: cover;
  z-index: 2;
  padding-bottom: 50px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0) 100%);
    z-index: -1;
  }

  &__container {
    position: relative;
    z-index: 2;
  }

  &__blocks {
    position: relative;
    justify-content: space-between;
  }
}

.app-header__img-top {
  position: absolute;
  top: 113px;
  right: 0;
  height: 52px;
  width: 180px;
  background: url("@/assets/images/header-top-img.svg") center center no-repeat;
}

.app-header__img-bottom {
  position: absolute;
  bottom: -50px;
  left: 0;
  height: 77px;
  width: 307px;
  background: url("@/assets/images/header-bottom-img.svg") center center no-repeat;
}

@media all and (max-width: 1200px) {
  .app-header__img-top {
    display: none;
  }

  .app-header__img-bottom {
    display: none;
  }
}

@media all and (max-width: 720px) {
  .app-header__blocks {
    justify-content: flex-start;
  }

  .app-header {
    height: 400px;
  }
}
</style>