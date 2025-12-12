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
const projects = [
    'Автовокзал им. М.А. Шолохова',
    'Музей Самбекские высоты',
    'Автовокзал им. М.А. Шолохова',
    'Музей Самбекские высоты',
    'Автовокзал им. М.А. Шолохова',
    'Музей Самбекские высоты',
    'Автовокзал им. М.А. Шолохова',
    'Музей Самбекские высоты'
]    
</script>

<style lang="scss" scoped>
.portfolio-slider-custom {
    width: 650px;
    padding: 50px 60px;
    background: #633DCA;
    display: flex;
    flex-direction: column;
    gap: 35px;
    height: 560px;
    position: relative;
    top: -25px;

    @media all and (max-width: 1200px) {
        top: 0;
        height: auto;
        padding: 1rem .5rem;
        gap: 1rem;
    }

    &__title {
        color: #fff;
        font-weight: 600;
        font-size: 35px;
        line-height: 120%;

        @media all and (max-width: 1200px) {
            font-size: 24px;
        }
    }

    &__list {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        color: #FFFFFF;
        font-size: 24px;
        line-height: 120%;

        @media all and (max-width: 1200px) {
            font-size: 16px;
            gap: .5rem;
        }
    }
}    
</style>