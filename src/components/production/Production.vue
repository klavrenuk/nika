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

                <div class="app-component-layout production__layout">
                    <ProductionCardNoImg v-for="itemNoImg in listNoImg" :key="itemNoImg.id" :data="itemNoImg" />
                </div>

                <div class="app-component-layout production__layout">
                    <ProductionCard v-for="item in listWithImg" :key="item.id" :data="item" />
                </div>
            </div>

            <div class="production__line"></div>
        </div>
    </section>
</template>

<script setup>
import { list, listNoImg, listWithImg } from '../../../public/images/production/constants'

import SectionName from "@/components/section/SectionName.vue";
import ProductionCard from './ProductionCard.vue';
import ProductionCardNoImg from './ProductionCardNoImg.vue';
</script>


<style scoped lang="scss">
.production {
    &__container {
        display: inline-block;
        height: 300px;
    }

    &__title {
        margin-top: 30px;

        @media all and (max-width: 1200px) {
            font-size: 32px;
            margin-top: 16px;
        }
    }

    &__layout {
        margin-top: 80px;

        @media all and (max-width: 1200px) {
            margin-top: 16px;
            gap: 10px;
        }
    }

    &__line {
        width: 100%;
        margin: 75px 0 30px;
        background:
            linear-gradient(to right, #C1C1C1 2px, transparent 2px) 0 0 / 10px 100%;
        height: 2px;
    }
}
</style>