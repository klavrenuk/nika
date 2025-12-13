<template>
    <div>
        <swiper 
            :slidesPerView="'auto'" 
            :spaceBetween="30" 
            :centeredSlides="true" 
            :pagination="{
                clickable: false,
            }" 
            :modules="modules" class="mySwiper"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
        >
            <swiper-slide v-for="(image, index) of list">
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
import { Pagination, Autoplay } from 'swiper/modules';

export default {
    props: {
        list: {
            type: Array
        }
    },

    emits: ['on-click'],

    components: {
        Swiper,
        SwiperSlide,
        PortfolioSliderCustom
    },

    methods: {
        handleSliderClick(index) {
            console.log('ooo', index);

            this.$emit('on-click', { index });
        }
    },

    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    }
};
</script>

<style lang="scss">
.mySwiper {
}

#app .swiper-wrapper {
    height: auto !important;
    // overflow: visible !important;
}

.swiper {
    width: 100%;
    height: 100%;
}

.slider-item {
    display: inline-block;
}

.swiper-slide {
    width: 650px !important;
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