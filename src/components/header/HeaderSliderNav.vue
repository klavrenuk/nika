<script setup>

const { activeSlider } = defineProps({
    activeSlider: {
        type: Number
    }
})


const emits = defineEmits(['select']);

const sliders = [0, 1, 2, 3];

const handleSelect = (index) => {
    emits('select', index)
}
</script>

<template>
    <nav class="header-slider-nav">
        <a v-for="slider in sliders" :key="slider" @click="handleSelect(slider)"
            :class="{ 'active': activeSlider === slider }"></a>
    </nav>
</template>

<style scoped lang="scss">
.header-slider-nav {
    display: flex;
    align-items: center;
    gap: 10px;

    & a {
        cursor: pointer;
        background: #FFFFFF;
        width: 12px;
        height: 12px;
        border-radius: 100px;

        &.active {
            background: #7A4FF1;
        }
    }
}
</style>