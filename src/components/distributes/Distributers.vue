<template>
    <section id="Distributers" class="app-section distributers">
        <div class="app-container">
            <div class="distributers__container">
                <SectionName>Официальный представитель</SectionName>

                <h3 class="distributers__title app-custom-color-title scroll-animate">
                    <span>Дистрибьюторы</span> компаний:
                </h3>
            </div>
        </div>

        <div class="distributes__block-images">
            <div class="marquee-track marquee-track--top">
                <div class="marquee-content">
                    <div v-for="(distributer, index) in distributers" :key="'top-' + index" class="marquee-item">
                        <img :src="distributers[0]" alt="Дистрибьютор" />
                    </div>
                    <div v-for="(distributer, index) in distributers" :key="'top-duplicate-' + index"
                        class="marquee-item">
                        <img :src="distributers[0]" alt="Дистрибьютор" />
                    </div>
                </div>
            </div>

            <div class="marquee-track marquee-track--bottom">
                <div class="marquee-content">
                    <div v-for="(distributer, index) in [...distributers].reverse()" :key="'bottom-' + index"
                        class="marquee-item">
                        <img :src="distributers[1]" alt="Дистрибьютор" />
                    </div>
                    <div v-for="(distributer, index) in [...distributers].reverse()" :key="'bottom-duplicate-' + index"
                        class="marquee-item">
                        <img :src="distributers[[1]]" alt="Дистрибьютор" />
                    </div>
                </div>
            </div>

            <div class="marquee-track marquee-track--top">
                <div class="marquee-content">
                    <div v-for="(distributer, index) in distributers" :key="'top-' + index" class="marquee-item">
                        <img :src="distributers[2]" alt="Дистрибьютор" />
                    </div>
                    <div v-for="(distributer, index) in distributers" :key="'top-duplicate-' + index"
                        class="marquee-item">
                        <img :src="distributers[2]" alt="Дистрибьютор" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionName from "@/components/section/SectionName.vue";

const distributers = [
    '/images/dist1.svg',
    '/images/dist2.svg',
    '/images/dist3.svg',
];
</script>

<style scoped lang="scss">
.distributers {
    padding-left: 0;
    padding-right: 0;
    
    &__container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: hidden;
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
}

.distributes__block-images {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 20px;
}

.marquee-track {
    width: 100%;
    overflow: hidden;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100px;
        height: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        z-index: 2;
        pointer-events: none;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100%;
        background: linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        z-index: 2;
        pointer-events: none;
    }
}

.marquee-content {
    display: flex;
    gap: 60px;
    width: max-content;
    animation: marquee-scroll 60s linear infinite;
}

.marquee-track--bottom .marquee-content {
    animation-direction: reverse;
}

.marquee-item {
    flex-shrink: 0;
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: -5px;
        width: 10px;
        height: 100%;
        background: #fff;
    }

    img {
        height: 100%;
        width: auto;
        object-fit: contain;
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);
        }
    }
}

@keyframes marquee-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>