<script setup>
import FooterLeft from './FooterLeft.vue';
import FooterRight from "@/components/footer/FooterRight.vue";
</script>

<template>
  <div class="footer app-section">
    <div class="app-component-layout">
      <FooterLeft />
      <FooterRight />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: #121212;
  padding-bottom: 60px;
}
</style>