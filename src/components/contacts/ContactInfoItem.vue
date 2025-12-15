<script setup>
defineProps({
  label: String,
  text: String
})
</script>

<template>
  <div class="contact-info-item d-flex flex-column">
    <label class="contact-info-item__label">{{ label }}</label>
    <span class="contact-info-item__text" v-html="text" />
  </div>
</template>

<style scoped lang="scss">
.contact-info-item {
  gap: 15px;

  &__label {
    color: #868B91;
    font-size: 16px;
  }

  &__text {
    color: #121211;
    font-size: 22px;
    line-height: 28px;
  }
}

@media all and (max-width: 720px) {
  .contact-info-item {
    gap: 4px;
  }

  .contact-info-item__text {
    font-size: 16px;
  }
}
</style>