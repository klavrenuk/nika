<template>
    <swiper :slides-per-view="'auto'" :centered-slides="true" :space-between="30" :pagination="{
        clickable: true,
    }" :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(image, index) of list" :key="image.id">
            <a class="slider-item" @click="handleSliderClick(index)">
                <PortfolioSliderCustom v-if="image.isCustom" />
                <img v-else :src="image.src" :alt="image.alt" class="slider-item__img">
                <div class="portfolio__wrap-title" v-if="index !== 2">
                    <span class="portfolio__right__title">{{ image.text }}</span>
                    <span class="portfolio__right__title">15 000 м²</span>
                </div>
            </a>
        </swiper-slide>
    </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import PortfolioSliderCustom from './PortfolioSliderCustom.vue';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
        PortfolioSliderCustom
    },

    props: {
        list: {
            type: Array
        }
    },

    setup() {
        return {
            modules: [Pagination, Autoplay], // 添加 Autoplay 模块
        };
    },
};
</script>

<style lang="scss">
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-slide {
    width: 60%;
}

.swiper-slide:nth-child(2n) {
    width: 40%;
}

.swiper-slide:nth-child(3n) {
    width: 20%;
}

.slider-item {
    display: inline-block;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.portfolio__wrap-title {
    padding-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.portfolio__right__title {
    color: #FFFFFF;
    font-size: 22px;
}

.swiper-pagination {
    display: none;
}

.slider-item__img {
    height: 561px !important;
}
</style>