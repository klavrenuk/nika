<script setup>
import { ref, onMounted } from 'vue'

const quote = '«Сроки и качество — под моим личным контролем.»'

const displayedText = ref('')
const isTyping = ref(true)
let typewriterInterval = null

const startTyping = () => {
  typewriterInterval = setInterval(() => {
    if (displayedText.value.length < quote.length) {
      displayedText.value += quote[displayedText.value.length]
    } else {
      clearInterval(typewriterInterval)
      isTyping.value = false
    }
  }, 100)
}

onMounted(() => {
  startTyping()
})
</script>

<template>
  <div class="founder-person d-flex flex-column">
    <div class="founder-person__top d-flex flex-column">
      <h6 class="founder-person__post">
        <span class="founder-person__post__dot"></span>
        <span>основатель компании</span>
      </h6>

      <h5 class="founder-person__name">
        Камбулат Германбиевич
      </h5>
    </div>

    <div class="founder-person__bottom d-flex flex-column">
      <h6 class="founder-person__words">
        {{ displayedText  }}
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
    display: flex;
    align-items: center;
    gap: 10px;
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
    line-height: 22px;
  }
}

.founder-person__post__dot {
  display: inline-block;
  height: 9px;
  width: 9px;
  border-radius: 100%;
  background: #fff;
}

@media all and (max-width: 720px) {
  .founder-person {
    gap: 16px;
  }

  .founder-person__top {
    gap: 16px;
  }

  .founder-person__bottom {
    gap: 16px;
  }

  .founder-person__name {
    font-size: 32px;
  }

  .founder-person__words {
    font-size: 16px;
  }

  .founder-person__description {
    font-size: 16px;
  }
}
</style>