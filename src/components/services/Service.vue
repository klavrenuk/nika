<template>
    <div class="service">
        <div class="service__container">
            <a class="service__header" @click="handleToggleView">
                <h6 class="service__title">
                    {{ data.name }}
                </h6>

                <img :src="arrowSrc" alt="" />
            </a>

            <template v-if="isOpen">
                <div class="service__container">
                    <img v-if="data.img" :src="data.img" alt="" class="service__img" />

                    <p class="service__text">
                        {{ data.text }}
                    </p>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const { openDefault, data } = defineProps({
    openDefault: {
        type: Boolean,
        required: false,
        default: false
    },
    data: {
        type: Object,
        required: false,
    }
})

const isOpen = ref(openDefault)

const arrowSrc = computed(() => {
    if (isOpen.value) return '/images/arrow-right.svg';

    return '/images/services-arrow-right.svg';
})

const handleToggleView = () => {
    isOpen.value = !isOpen.value;
}
</script>

<style lang="scss" scoped>
.service {
    width: 100%;

    &__container {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        color: #121211;
        font-size: 22px;
        line-height: 100%;
    }

    &__img {
        width: 100%;
        height: 380px;
        object-fit: cover;
    }

    &__text {
        color: #949494;
        font-size: 22px;
        line-height: 120%;
    }
}
</style>