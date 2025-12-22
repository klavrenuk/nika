<template>
    <div class="portfolio-slider-custom">
        <h3 class="portfolio-slider-custom__title">
            Другие наши проекты
        </h3>

        <ul class="portfolio-slider-custom__list">
            <li v-for="project in projects" :key="project">
                {{ project }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { projects } = defineProps({
    projects: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.portfolio-slider-custom {
    width: 650px;
    padding: 50px 60px;
    background: #633DCA;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc(560px + 25px);
    position: relative;
    top: -25px;
    overflow: hidden;

    @media all and (max-width: 1200px) {
        width: 100%;
        height: auto;
        padding: 2rem .5rem;
        height: 345px;
        overflow: hidden;
        gap: 10px;
    }

    &__title {
        color: #fff;
        font-weight: 600;
        font-size: 35px;
        line-height: 120%;

        @media all and (max-width: 1200px) {
            font-size: 18px;
        }
    }

    &__list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: #FFFFFF;
        font-size: 24px;
        line-height: 120%;
        gap: 12px;
        word-wrap: break-word;
        overflow-wrap: break-word;
        word-break: break-word;
        margin: 0;

        @media all and (max-width: 1200px) {
            gap: .5rem;
        }

        & li {
            width: 100%;
            box-sizing: border-box;
            white-space: normal;
            overflow-wrap: break-word;
            word-wrap: break-word;
            line-height: 110%;

            padding: 15px 13px;
            border: 1px solid #fff;

            @media all and (max-width: 1200px) {
                font-size: 16px;
                padding: 10px 13px;
            }
        }
    }
}
</style>