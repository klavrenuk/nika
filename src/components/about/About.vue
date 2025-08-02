<script setup>
import AboutRight from "@/components/about/AboutRight.vue";
</script>

<template>
  <div class="about">
    <div></div>
    <AboutRight />
  </div>
</template>

<style scoped lang="scss">
.about {
  display: grid;
  grid-template-columns: 392px auto;
  gap: 270px;
  justify-content: space-between;
}
</style>