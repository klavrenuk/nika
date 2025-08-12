<template>
  <div class="why-choose-us-right">
    <div class="why-choose-us-right__advances d-flex flex-column">
      <ChooseAdvance
          v-for="(advance, index) in whyChooseUsBlocks"
          :data="advance"
          :key="advance.title"
          class="scroll-animate"
          :data-delay="index"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { whyChooseUsBlocks } from '@/constants/constants'
import ChooseAdvance from '@/components/why-choose-us/ChooseAdvance.vue'

const isShowContent = ref(false)

let observer = null

const handleIntersection = async (entries) => {
  await new Promise(resolve => setTimeout(resolve, 2000)) // задержка 2 секунды

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isShowContent.value = true
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}

onMounted(() => {
  const elements = document.querySelectorAll('.scroll-animate')

  observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '0px',
    threshold: 0.1
  })

  elements.forEach((element, index) => {
    const delay = (index + 1) * 0.2 // задержка между элементами
    element.style.animationDelay = `${delay}s`
    observer.observe(element)
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.why-choose-us-right__advances {
  position: relative;
  gap: 30px;
  overflow: hidden;
}

.scroll-animate {
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s ease;
  animation: appearFromRight 0.5s ease forwards;
  visibility: hidden; /* Полное скрытие до анимации */
}

.scroll-animate.visible {
  opacity: 1;
  transform: translateX(0);
  visibility: visible; /* Показ после анимации */
}

@keyframes appearFromRight {
  from {
    opacity: 0;
    transform: translateX(100%);
    visibility: hidden; /* Дополнительное скрытие */
  }
  to {
    opacity: 1;
    transform: translateX(0);
    visibility: visible; /* Показ в конце анимации */
  }
}
</style>
