<template>
  <a class="footer-logo">
    <span class="footer-logo__rect"></span>
    <h6 class="footer-logo__text">
      НИКА
    </h6>
  </a>
</template>

<style scoped lang="scss">
.footer-logo {
  display: flex;
  gap: 20px;
  align-items: center;

  &__rect {
    height: 38px;
    width: 38px;
    background: #fff;
  }

  &__text {
    font-weight: 800;
    font-size: 33px;
    text-transform: uppercase;
  }
}
</style>