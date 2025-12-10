<template>
    <section id="Distributers" class="app-section distributers">
        <div class="app-container">
            <div class="distributers__container">
                <SectionName>Официальный представитель</SectionName>

                <h3 class="distributers__title app-custom-color-title">
                        <span>Дистрибьюторы</span> компаний:
                    </h3>

                <div class="distributers__block-img">
                    <img src="/images/distributers-img.png" alt="" class="distributers__img" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionName from "@/components/section/SectionName.vue";
</script>


<style scoped lang="scss">
.distributers {
    &__container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__title {
        padding: 30px 0 40px;

        @media all and (max-width: 1200px) {
            padding: 1rem 0;
            margin: 0;
            font-size: 24px;
            line-height: 24px;
        }
    }

    &__block-img {
        height: 305px;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 4px;
            background: #fff;
        }

        & .distributers__img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>