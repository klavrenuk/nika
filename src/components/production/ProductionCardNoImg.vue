<template>
    <section class="production-card-no-img">
        <div class="production-card-no-img__header">
            <div class="production-card-no-img__square"></div>
            <h3 class="production-card-no-img__title">
                {{  data.id }}
            </h3>
        </div>

        <p class="production-card-no-img__text">
            {{  data.text }}
        </p>
        <a class="production-card-no-img__link">
            подробнее
        </a>
    </section>
</template>

<script setup>
const { data } = defineProps({
    data: {
        type: Object
    }
})
</script>

<style lang="scss" scoped>
.production-card-no-img {
    display: flex;
    flex-direction: column;
    gap: 14px;

    &__header {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__square {
        width: 24px;
        height: 22px;
        background: #7A4FF1;
    }

    &__title {
        color: #949494;
        font-size: 17px;
        line-height: 120%;
    }

    &__text {
        margin-top: 3px;
        color: #212121;
        font-size: 21px;
        line-height: 120%;
    }

    &__link {
        color: #949494;
        font-size: 17px;
        line-height: 100%;
        cursor: pointer;

        &:hover, &:active, &:focus {
            color: #7A4FF1;
        }
    }
}
</style>