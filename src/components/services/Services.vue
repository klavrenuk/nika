<template>
    <section id="Services" class="app-section services visible">
        <div class="app-container">
            <div class="app-component-layout">
                <div class="services__left">
                    <div class="services__section-name">
                        <SectionName>Услуги</SectionName>
                    </div>

                    <h3 class="app-custom-color-title">Изготовление из <span>керамогранита</span></h3>

                    <p class="services__description-left">
                        Выполняем резку любой сложности плитки, камня, мрамора, гранита и других материалов быстро,
                        качественно и недорого. Специалисты компании правильный вариант обработки плитки, камня,
                        мрамора, гранита и других материалов.
                    </p>

                    <div>
                        <a class="services__application app-button" href="#application">
                            оставить заявку
                        </a>
                    </div>
                </div>

                <div class="services__right">
                    <div class="services__right__header">
                        <h6 class="services__right__title">Изготовление ступеней</h6>

                        <span>
                            <img src="/images/arrow-right.svg" alt="" />
                        </span>
                    </div>

                    <p class="services__right__text">
                        Мы предлагаем ступени из керамогранита для лестниц разных форматов. В процессе производства
                        используется технология завальцовки (снятия фаски) с края керамогранита в 1/4 круга с
                        последующей полировкой и дополнительной обработкой (снятие фаски по нижней части переднего края
                        для устранения неровностей).
                    </p>

                    <ul class="services__right__list">
                        <li>
                            <img src="/images/services-img-1.png" alt="" class="services__right__list__img" />
                        </li>
                        <li>
                            <h6 class="services__right__list__title">Изготовление плинтуса</h6>
                            <a>
                                <img src="/images/services-arrow-right.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <h6 class="services__right__list__title">Прямой рез</h6>
                            <a>
                                <img src="/images/services-arrow-right.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionName from "@/components/section/SectionName.vue";
</script>

<style scoped lang="scss">
.services__left {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & .services__section-name {
        margin-bottom: 10px;
    }

    & .services__description-left {
        width: 100%;
        max-width: 600px;
        padding-bottom: 40px;
        color: #949494;
        font-size: 22px;
        line-height: 120%;
    }

    & .services__application {
        color: #fff;
    }
}

.services__right {
    display: flex;
    flex-direction: column;
    gap: 30px;

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        color: #121211;
        font-size: 22px;
    }

    &__text {
        color: #949494;
        font-size: 22px;
        line-height: 120%;
    }
}

.services__right__list {
    padding: 0;
    
    & li {
        padding: 30px 0;
        border-bottom: 1px solid #B8B8B8;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        color: #121211;
        font-size: 22px;
        line-height: 100%;
    }

    & .services__right__list__img {
        max-width: 690px;
        width: 100%;
        height: 380px;
    }
}
</style>