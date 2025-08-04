<script setup>
defineProps({
  title: String,
  text: String,
  isHide: Boolean
})
</script>

<template>
  <div class="stage d-flex flex-column" :class="{'is-hide': isHide}">
    <h6 class="stage__title">{{ title }}</h6>

    <div class="stage__blocks">
      <span v-for="n in 15" :key="n" class="stage__block"></span>
    </div>

    <div class="stage__circle">
      <div class="stage__circle__inner"></div>
    </div>

    <p class="stage__text">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.stage {
  gap: 26px;

  &__blocks {
    display: flex;
    gap: 15px;
    padding-right: 15px;
  }

  &__block {
    height: 15px;
    width: 3px;
    display: inline-block;
    background: #C1C1C1;
  }

  &.is-hide {
    opacity: .3;
  }

  &__title {
    color: #121211;
    font-size: 25px;
    text-align: center;
  }

  &__text {
    color: #868B91;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
  }
}

.stage__circle {
  margin: 0 auto;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E9E4F8;
  border-radius: 100%;

  &__inner {
    width: 20px;
    height: 20px;
    display: inline-block;
    background: #7A4FF1;
    border-radius: 100%;
  }
}
</style>