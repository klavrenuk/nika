<script setup>
import { ref, onMounted } from 'vue'

import FounderInfo from "@/components/founder/FounderInfo.vue";

const isActivePhoto = ref(false)

let observer = null

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        isActivePhoto.value = true
      }, 600)

      observer.unobserve(entry.target)
    }
  })
}


onMounted(() => {
  const elements = document.querySelectorAll('#Founder')

  observer = new IntersectionObserver(handleIntersection, {
    rootMargin: '0px',
    threshold: 0.1
  })

  elements.forEach(element => {
    observer.observe(element)
  })
})
</script>

<template>
  <section class="founder app-section" id="Founder">
    <div class="app-container">
      <div class="app-component-layout">
        <div>
          <img src="/images/founder-photo.svg" alt="Камбулат Германбиевич" class="founder__photo" :class="{'active': isActivePhoto}" />
        </div>
        <FounderInfo />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.founder {
  background: #7A4FF1;

  &__photo {
    width: 568px;
    height: 576px;

    opacity: 0;
    transform: translateY(50px) scale(0.95);
    will-change: transform, opacity; /* Оптимизация для анимации */

    transition:
        opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
}

@media all and (max-width: 720px) {
  .founder__photo {
    display: none;
  }
}
</style>