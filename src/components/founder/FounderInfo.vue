<script setup>

</script>

<template>
  <div class="founder-person d-flex flex-column">
    <div class="founder-person__top d-flex flex-column">
      <h6 class="founder-person__post">
        основатель компании
      </h6>

      <h5 class="founder-person__name">
        Камбулат Германбиевич
      </h5>
    </div>

    <div class="founder-person__bottom d-flex flex-column">
      <h6 class="founder-person__words">
        «Сроки и качество — под моим личным контролем.»
      </h6>

      <p class="founder-person__description">
        Я сам прошёл путь от проектных решений до крупных поставок и знаю, как важно, чтобы всё было в срок и без сбоев. Поэтому каждый объект я сопровождаю лично — от заявки до последней поставки. Это — мой подход, и он остаётся неизменным уже более 20 лет.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.founder-person {
  gap: 110px;

  &__top {
    gap: 55px;
  }

  &__bottom {
    gap: 35px;
  }

  &__post {
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    color: #fff;
  }

  &__name {
    color: #fff;
    font-weight: 500;
    font-size: 48px;
    line-height: 43px;
  }

  &__words {
    color: #fff;
    font-size: 22px;
  }

  &__description {
    color: #C1AAFF;
    font-size: 22px;
  }
}
</style>