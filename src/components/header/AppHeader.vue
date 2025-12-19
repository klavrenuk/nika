<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

import HeaderTop from '@/components/header/HeaderTop.vue'
import HeaderBottom from '@/components/header/HeaderBottom.vue'
import HeaderSliderNav from './HeaderSliderNav.vue'

const activeSlider = ref(0)
const isChangeSlider = ref(false)
let intervalId = null

const setActiveSlider = (index) => {
  clearInterval(intervalId)
  activeSlider.value = index
}

const startAnimation = () => {
  intervalId = setInterval(() => {
    isChangeSlider.value = true;
    activeSlider.value = activeSlider.value === 3 ? 0 : activeSlider.value + 1
  }, 10000)
}

onMounted(() => {
  setTimeout(() => {
    startAnimation()
  }, 10000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div :class="{ 'slider-changed': isChangeSlider }">
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
  </div>
</template>

<style scoped lang="scss">
.slider-changed {
  opacity: 1;
  transform: translateY(0);
}

.app-header {
  position: relative;
  height: 100vh;
  width: 100%;
  background: url('/public/images/header-slider-0.jpg') center center no-repeat;
  background-color: #000;
  overflow: hidden;
  z-index: 2;
  background-size: cover !important;
  padding-bottom: 50px;
  overflow: hidden;

  &.active-slider-1,
  &.active-slider-2,
  &.active-slider-3 {
    opacity: 1;
    transform: translateY(0);
  }

  &.active-slider-1 {
    background: url('/public/images/header-slider-1.jpg') center center no-repeat;
  }

  &.active-slider-2 {
    background: url('/public/images/header-slider-2.jpg') center center no-repeat;
  }

  &.active-slider-3 {
    background: url('/public/images/header-slider-3.jpg') center center no-repeat;
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

.app-header__img-bottom {
  position: absolute;
  bottom: -50px;
  left: -95px;
  height: 77px;
  width: 307px;
  background: url("@/assets/images/header-bottom-img.svg") center center no-repeat;
}

@media all and (max-width: 1200px) {
  .app-header {
    background-size: auto !important;
  }

  .app-header__img-top {
    display: none;
  }

  .app-header__img-bottom {
    display: none;
  }
}
</style>