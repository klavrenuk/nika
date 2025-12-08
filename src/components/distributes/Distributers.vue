<template>
    <section id="Distributers" class="app-section distributers">
        <div class="app-container">
            <div class="distributers__container">
                <SectionName>Официальный представитель</SectionName>

                <h3 class="distributers__title">
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
        font-size: 48px;
        line-height: 43px;
        font-weight: 500;

        & span {
            background: linear-gradient(90deg, #7A4FF1 0%, #462E8B 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }

    &__block-img {
        height: 305px;

        & .distributers__img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }
}
</style>