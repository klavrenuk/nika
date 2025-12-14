<script setup>
import FeedbackRight from "@/components/feedback/FeedbackRight.vue";
</script>

<template>
  <div id="application" class="feedback app-section">
    <div class="app-container">
      <div class="app-component-layout">
        <img src="/images/feedback-photo.png" alt="Форма обратной связи" />

        <FeedbackRight />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media all and (max-width: 720px) {
  .feedback {
    & img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>