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
                        качественно и недорого. Специалисты компании подберут правильный вариант обработки плитки, камня,
                        мрамора, гранита и других материалов.
                    </p>

                    <div>
                        <a class="services__application app-button" href="#application">
                            оставить заявку
                        </a>
                    </div>
                </div>

                <div class="services__right">
                    <ul class="services__right__list">
                        <li v-for="service in services" :key="service.name">
                            <Service :data="service" :openDefault="service.isOpenDefault" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionName from "@/components/section/SectionName.vue";
import Service from './Service.vue'

const services = [
    {
        id: 1,
        name: 'Изготовление ступеней',
        text: 'Мы предлагаем ступени из керамогранита для лестниц разных форматов. В процессе производства используется технология завальцовки (снятия фаски) с края керамогранита в 1/4 круга с последующей полировкой и дополнительной обработкой (снятие фаски по нижней части переднего края для устранения неровностей).',
        img: '/images/services-img-1.png',
        isOpenDefault: true
    },
    {
        id: 2,
        name: 'Изготовление плинтуса',
        text: 'Изготовление плинтуса из керамогранита под заказ. Точная подрезка, обработка кромки и полировка для идеального сочетания с напольным покрытием.'
    },
    {
        id: 3,
        name: 'Прямой рез',
        text: 'Точная резка керамогранита под 90° без сколов и перекосов. Гарантируем чистый срез для стыков, плинтусов и ступеней.'
    }
]
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

    @media all and (max-width: 1200px) {
        margin-top: 30px;
        gap: 1rem;
    }

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

        @media all and (max-width: 1200px) {
            font-size: 16px;
        }
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

        @media all and (max-width: 1200px) {
            padding: 1rem 0;
        }
    }

    &__title {
        color: #121211;
        font-size: 22px;
        line-height: 100%;

        @media all and (max-width: 1200px) {
            font-size: 16px;
        }
    }

    & .services__right__list__img {
        max-width: 690px;
        width: 100%;
        height: 380px;
    }
}

.services__right__arrow {
    @media all and (max-width: 1200px) {
        display: none;
    }
}
</style>