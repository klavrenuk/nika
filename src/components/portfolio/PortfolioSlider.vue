<template>
    <swiper :slides-per-view="'auto'" :centered-slides="true" :pagination="{
        clickable: true,
    }" :autoplay="{
        delay: 30000,
        disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">
        <swiper-slide v-for="(image) of list" :key="image.id">
            <a class="slider-item">
                <PortfolioSliderCustom v-if="image.isCustom" :projects="image.projects" />
                <img v-else :src="image.src" :alt="image.alt" class="slider-item__img">
                <div class="portfolio__wrap-title" v-if="!image.isCustom">
                    <span class="portfolio__right__title">{{ image.text }}</span>
                    <span class="portfolio__right__title">{{ image.textRight }}</span>
                </div>
            </a>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import PortfolioSliderCustom from './PortfolioSliderCustom.vue';
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
            modules: [Pagination, Autoplay],
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
    width: 650px !important;
    max-width: 100% !important;
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

.slider-item {
    display: inline-block;
    width: 100%;
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
    width: 100% !important;
    object-fit: cover;
}

@media all and (max-width: 1200px) {
    .swiper-slide {
        width: 100% !important;
    }

    .slider-item__img {
        height: 302px !important;
    }
}
</style>