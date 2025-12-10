<template>
    <div class="production-card">
        <div class="production-card__wrap-img">
            <img :src="imgSrc" alt="" class="production-card__img" />

            <div class="production-card__magnifier">
                <img :src="`/images/production/${data.magnifier}`"
            </div>
        </div>

        <p class="production-card__text">
            {{ data.text }}
        </p>
        <a class="production-card__link">
            подробнее
        </a>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const { data } = defineProps({
    data: {
        type: Object
    }
})

const imgSrc = computed(() => {
    return `/images/production/${data.img}`;
})
</script>

<style lang="scss" scoped>
.production-card {
    width: 643px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media all and (max-width: 1200px) {
        width: 100%;
        gap: 10px;
    }


    &__wrap-img {
        position: relative;
        width: 100%;
        height: 422px;
        margin-bottom: 10px;
    }

    &__img {
        width: 100%;
        height: 100%;
    }

    &__text {
        color: #212121;
        font-size: 21px;
        line-height: 100%;

        @media all and (max-width: 1200px) {
            font-size: 16px;
        }
    }

    &__link {
        color: #949494;
        font-size: 18px;

        &:hover, &:active {
            color: #7A4FF1;
        }

        @media all and (max-width: 1200px) {
            font-size: 14px;
        }
    }
}

.production-card__magnifier {
    position: absolute;
    bottom: 10px;
    right: 15px;
    border: 4px solid #fff;
    width: 80px;
    height: 80px;

    & img {
        width: 100%;
        height: 100%;
    }
}
</style>