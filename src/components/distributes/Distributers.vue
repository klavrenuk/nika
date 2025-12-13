<template>
    <section id="Distributers" class="app-section distributers">
        <div class="app-container">
            <div class="distributers__container">
                <SectionName>Официальный представитель</SectionName>

                <h3 class="distributers__title app-custom-color-title scroll-animate">
                    <span>Дистрибьюторы</span> компаний:
                </h3>

                <div class="distributes__block-images">
                    <div v-for="(distributer, index) in distributers"" :key="distributer" class="marquee-group" :class="`marquee-image marquee-image--${index % 2 === 0 ? 'left' : 'right'}`">
                        <img :src="distributer"
                            alt="Дистрибьютор" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionName from "@/components/section/SectionName.vue";

const distributers = [
    '/images/dist1.png',
    '/images/dist2.png',
    '/images/dist3.png',
];
</script>

<style scoped lang="scss">
.distributers {
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
    align-items: center;
}

.distributes__marquee-track {
    display: flex;
    gap: 60px;
    width: max-content;
    animation: marquee-scroll 20s linear infinite;
}

.marquee-group {}

.distributes__marquee-track {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.marquee-image {
    width: auto;
    object-fit: contain;
    flex-shrink: 0;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
}

.marquee-image--left {
    animation: scroll-left 25s linear infinite;
    animation-delay: 0.5s;
}

.marquee-image--right {
    animation: scroll-right 25s linear infinite;
    animation-delay: 0.5s;
}

@keyframes scroll-left {
    0% {
        transform: translateX(100vw);
    }
    100% {
        transform: translateX(-100vw);
    }
}

@keyframes marquee-scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-100% / 3));
    }
}

@keyframes float-left {

    0%,
    100% {
        transform: translateY(0) rotate(-2deg);
    }

    50% {
        transform: translateY(-10px) rotate(2deg);
    }
}

@keyframes float-right {

    0%,
    100% {
        transform: translateY(0) rotate(2deg);
    }

    50% {
        transform: translateY(-10px) rotate(-2deg);
    }
}

@keyframes scroll-right {
    0% {
        transform: translateX(-100vw);
    }
    100% {
        transform: translateX(100vw);
    }
}

@media all and (max-width: 1200px) {
    .distributes__block-images {
        height: 80px;
    }

    .marquee-image {
        height: 50px;
    }

    .distributes__marquee-track,
    .marquee-group {
        gap: 40px;
    }
}
</style>