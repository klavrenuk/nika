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
    max-width: 650px;
    width: 100%;
    padding: 50px 60px;
    background: #633DCA;
    display: flex;
    flex-direction: column;
    gap: 35px;

    &__title {
        color: #fff;
        font-weight: 600;
        font-size: 35px;
        line-height: 120%;
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
    }
}    
</style>