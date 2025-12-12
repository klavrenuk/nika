<template>
    <div>
        <swiper :slidesPerView="'auto'" :spaceBetween="30" :pagination="{
            clickable: false,
        }" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(image, index) of list">
                <div class="slider-item">
                    <PortfolioSliderCustom v-if="image.isCustom" />
                    <img v-else :src="image.src" :alt="image.alt">
                    <div class="portfolio__wrap-title" v-if="index !== 2">
                        <span class="portfolio__right__title">{{ image.text }}</span>
                        <span class="portfolio__right__title">15 000 м²</span>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import PortfolioSliderCustom from './PortfolioSliderCustom.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    props: {
        list: {
            type: Array
        }
    },

    components: {
        Swiper,
        SwiperSlide,
        PortfolioSliderCustom
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>

<style lang="scss">
#app .swiper-wrapper {
    height: auto !important;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
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
    width: 80%;
}

.swiper-slide:nth-child(2n) {
    width: 60%;
}

.swiper-slide:nth-child(3n) {
    width: 40%;
}
</style>