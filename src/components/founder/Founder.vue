<script setup>
import FounderInfo from "@/components/founder/FounderInfo.vue";
</script>

<template>
  <section class="founder app-section">
    <div class="app-container">
      <div class="app-component-layout">
        <div>
          <img src="/images/founder-photo.svg" alt="Камбулат Германбиевич" class="founder__photo" />
        </div>
        <FounderInfo />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.founder {
  background: #7A4FF1;

  &__photo {
    width: 568px;
    height: 576px;
  }
}

@media all and (max-width: 720px) {
  .founder__photo {
    display: none;
  }
}
</style>