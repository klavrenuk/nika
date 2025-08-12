<script setup>
import WhyChooseUsRight from "@/components/why-choose-us/WhyChooseUsRight.vue";
import WhyChooseUsLeft from "@/components/why-choose-us/WhyChooseUsLeft.vue";
import {onMounted, ref} from "vue";

let observer = null
const isShowContent = ref(false)

const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isShowContent.value = true
      observer.unobserve(entry.target)
    }
  })
}

onMounted(() => {
  const elements = document.querySelectorAll('#WhyChooseUs')

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
  <section id="WhyChooseUs" class="why-choose-us app-section">
    <div class="app-container">
      <div class="app-component-layout">
        <WhyChooseUsLeft />
        <WhyChooseUsRight v-if="isShowContent" />
      </div>
    </div>
  </section>
</template>