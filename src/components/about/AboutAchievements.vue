<script setup>
defineProps({
  text: String,
  description: String
})
</script>

<template>
  <div class="about-achievements d-flex flex-column">
    <h4 class="about-achievements__text">{{ text }}</h4>
    <p class="about-achievements__description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.about-achievements {
  gap: 5px;

  &__text {
    color: #121211;
    font-size: 80px;
    text-transform: uppercase;
    font-weight: 500;

    @media all and (max-width: 1200px) {
      margin-top: 30px;
    }
  }

  &__description {
    color: #949494;
    font-size: 22px;
  }
}

@media all and (max-width: 720px) {
  .about-achievements__text {
    font-size: 32px;
  }

  .achievements__description {
    font-size: 16px;
  }

  .about-achievements__description {
    font-size: 16px;
  }

  .about-achievements {
    gap: 0;
  }
}
</style>