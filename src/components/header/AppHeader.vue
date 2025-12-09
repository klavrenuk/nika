<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import HeaderTop from '@/components/header/HeaderTop.vue'
import HeaderBottom from '@/components/header/HeaderBottom.vue'
import HeaderSliderNav from './HeaderSliderNav.vue'

const activeSlider = ref(0)
let intervalId = null

const setActiveSlider = (index) => {
  activeSlider.value = index
}

onMounted(() => {
  intervalId = setInterval(() => {
    activeSlider.value = activeSlider.value === 3 ? 0 : activeSlider.value + 1
  }, 5000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="app-header" :class="`active-slider-${activeSlider}`">
    <div class="app-header__img-top"></div>

    <div class="app-container app-header__container h-100">
      <div class="d-flex flex-column app-header__blocks h-100">
        <HeaderTop />
        <div class="app-header__slider-nav">
          <HeaderSliderNav @select="setActiveSlider" :activeSlider="activeSlider" />
        </div>
        
        <HeaderBottom :activeSlider="activeSlider" />

        <div class="app-header__img-bottom"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url('@/assets/images/slider-back-0.png') top left no-repeat;
  background-color: #000;
  background-size: cover !important;
  z-index: 2;
  padding-bottom: 50px;
  overflow: hidden;

  &.active-slider-1 {
    opacity: 1;
    background: url('@/assets/images/slider-back-1.png') top left no-repeat;
  }

  &.active-slider-2 {
    opacity: 1;
    background: url('@/assets/images/slider-back-2.png') top left no-repeat;
  }

  &.active-slider-3 {
    opacity: 1;
    background: url('@/assets/images/slider-back-3.png') top left no-repeat;
  }

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

.app-header__slider-nav {
  position: absolute;
  top: 113px;
  right: 0;
  z-index: 10;
}

.app-header__img-top {
  position: absolute;
  right: auto;
  left: -170px;
  top: 26%;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: url("@/assets/images/slider-top-1.png") center center no-repeat;
}

.app-header__img-bottom {
  position: absolute;
  bottom: -50px;
  left: -95px;
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
</style>