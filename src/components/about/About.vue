<script setup>
import AboutRight from "@/components/about/AboutRight.vue";
</script>

<template>
  <section class="about app-section">
    <div></div>
    <AboutRight />
  </section>
</template>

<style scoped lang="scss">
.about {
  display: grid;
  grid-template-columns: 392px auto;
  gap: 270px;
  justify-content: space-between;
}
</style>