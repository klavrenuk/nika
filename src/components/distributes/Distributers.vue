<template>
    <section id="Distributers" class="app-section distributers">
        <div class="app-container">
            <div class="distributers__container">
                <SectionName>Официальный представитель</SectionName>

                <h3 class="distributers__title app-custom-color-title scroll-animate">
                    <span>Дистрибьюторы</span> компаний:
                </h3>

                <div class="distributes__block-images">
                    <div class="marquee-track">
                        <div class="marquee-group">
                            <div v-for="(distributer, index) in distributers" 
                                 :key="`first-${index}`" 
                                 class="marquee-item">
                                <img :src="distributer" alt="Дистрибьютор" />
                            </div>
                        </div>

                        <div class="marquee-group">
                            <div v-for="(distributer, index) in distributers" 
                                 :key="`second-${index}`" 
                                 class="marquee-item">
                                <img :src="distributer" alt="Дистрибьютор" />
                            </div>
                        </div>
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
    align-items: center;
    min-height: 120px;
}

.marquee-track {
    display: flex;
    width: max-content;
    animation: marquee-scroll 20s linear infinite;
    will-change: transform;
}

.marquee-group {
    display: flex;
    flex-direction: column;
    gap: 60px;
    margin-right: 30px;
}

.marquee-item {
    height: 105px;
    display: flex;
    align-items: center;
    
    img {
        height: 100%;
        width: auto;
        object-fit: contain;
    }
    
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        background: #fff;
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

@media all and (max-width: 1200px) {
    .marquee-group {
        gap: 40px;
    }
    
    .marquee-item {
        height: 80px;
    }
}

@media all and (max-width: 768px) {
    .marquee-group {
        gap: 30px;
    }
    
    .marquee-item {
        height: 60px;
        
        &:after {
            right: -15px;
            width: 2px;
        }
    }
    
    .marquee-track {
        animation-duration: 15s;
    }
}
</style>