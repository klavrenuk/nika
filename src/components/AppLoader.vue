<script setup>
import { ref } from 'vue'

const colors = ['#7A4FF1', '#121211', '#868B91']
const rotation = ref(0)
const colorIndex = ref(0)

// Функция для обновления анимации
const animate = () => {
  rotation.value += 90
  colorIndex.value = (colorIndex.value + 1) % colors.length
}

// Запускаем анимацию каждые 1 секунду
setInterval(animate, 1000)
</script>

<template>
  <div class="loader-container">
    <div
        v-for="i in 4"
        :key="i"
        class="cube"
        :style="{
        transform: `rotateY(${rotation}deg) translateZ(-150px)`,
        backgroundColor: colors[colorIndex]
      }"
    ></div>
  </div>
</template>

<style scoped>
.loader-container {
  perspective: 800px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube {
  height: 70px;
  width: 70px;
  margin: 5px;
  transform-style: preserve-3d;
  animation: rotate 1s linear infinite;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

  &::before {
    transform: rotateY(0deg);
  }

  &::after {
    transform: rotateY(180deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  25% {
    transform: rotateY(90deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  75% {
    transform: rotateY(270deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
