<!-- CustomCursor.vue -->
<template>
  <div ref="cursor" class="custom-cursor">
    <div class="cursor-dot"></div>
    <div class="cursor-line"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const cursor = ref(null)

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseenter', handleMouseEnter)
  document.addEventListener('mouseleave', handleMouseLeave)
  document.addEventListener('click', handleClick)

  function handleMouseMove(e) {
    const x = e.clientX
    const y = e.clientY
    cursor.value.style.transform = `translate(${x}px, ${y}px)`
  }

  function handleMouseEnter(e) {
    if (e.target.classList && e.target.classList.contains('link')) {
      cursor.value.classList.add('hover')
    }
  }

  function handleMouseLeave(e) {
    if (e.target.classList && e.target.classList.contains('link')) {
      cursor.value.classList.remove('hover')
    }
  }

  function handleClick() {
    cursor.value.classList.add('click')
    setTimeout(() => {
      cursor.value.classList.remove('click')
    }, 300)
  }
})
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;

  @media all and (max-width: 1200px) {
    display: none;
  }
}

.cursor-dot {
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, background 0.2s ease;
  border: 1px solid #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  transform: translateX(-50%) translateY(-50%) scale(1) translateZ(0px);
}

.cursor-line {
  position: absolute;
  width: 2px;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
  transform: translate(-1px, -10px) rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.custom-cursor.hover .cursor-dot {
  width: 20px;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
}

.custom-cursor.hover .cursor-line {
  opacity: 1;
}

.custom-cursor.click .cursor-dot {
  animation: pulse 0.5s ease;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
