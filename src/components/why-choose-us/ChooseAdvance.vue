<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="choose-advance d-flex flex-column">
    <h6 class="choose-advance__title">{{ data.title }}</h6>
    <p class="choose-advance__text">{{ data.description }}</p>
  </div>
</template>

<style scoped lang="scss">
.choose-advance {
  gap: 40px;

  &__title {
    border-left: 3px solid #7A4FF1;
    padding-left: 15px;
    color: #121211;
    font-size: 22px;
  }

  &__text {
    color: #868B91;
    font-size: 16px;
    font-weight: 500;
  }
}

@media all and (max-width: 720px) {
  .choose-advance {
    gap: 16px;
  }
}
</style>