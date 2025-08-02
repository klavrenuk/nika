<script setup>
import { whyChooseUsBlocks } from '@/constants/constants';

import ChooseAdvance from "@/components/why-choose-us/ChooseAdvance.vue";
</script>

<template>
  <div class="why-choose-us-right app-section">
    <div class="why-choose-us-right__advances d-flex flex-column">
      <ChooseAdvance v-for="advance in whyChooseUsBlocks" :data="advance" :key="advance.title" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.why-choose-us-right {
  &__advances {
    gap: 30px;
  }
}
</style>