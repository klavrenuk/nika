<script setup>
const avards = [
    '/images/avard-1.png',
    '/images/avard-2.png',
    '/images/avard-3.png'
]
</script>

<template>
    <div class="header-avards">
        <img v-for="avard in avards" :src="avard" alt="" />
    </div>
</template>

<style scoped lang="scss">
    .header-avards {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 50px;

        & img {
            height: 129px;
            width: 129px;
            object-fit: cover;

            @media all and (max-height: 800px) {
                height: 90px;
                width: 90px;
            }
        }
    }

    @media all and (max-width: 1200px) {
        .header-avards {
            display: none;
        }
    }
</style>