<script setup>

</script>

<template>
  <div class="section-name d-flex align-items-center">
    <span class="section-name__dot"></span>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.section-name {
  gap: 10px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;

  &__dot {
    height: 9px;
    width: 9px;
    border-radius: 100%;
    background: #7A4FF1;
  }
}
</style>