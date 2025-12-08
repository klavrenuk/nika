<template>
    <section id="Production" class="app-section production">
        <div class="app-container">
            <div class="production__container">
                <SectionName>Продукция</SectionName>

                <h3 class="production__title app-custom-color-title">
                    <span>Варианты</span> продукции:
                </h3>

                <div class="app-component-layout production__layout">
                    <ProductionCard v-for="item in list" :key="item.id" :data="item" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { list } from './constants'

import SectionName from "@/components/section/SectionName.vue";
import ProductionCard from './ProductionCard.vue';
</script>


<style scoped lang="scss">
.production {
    &__title {
        margin-top: 30px;
    }

    &__layout {
        margin-top: 80px;
    }
}    
</style>