<template>
  <div ref="mapContainer" class="map" style="width: 600px; height: 400px;"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const mapContainer = ref(null);

onMounted(() => {
  ymaps.ready(() => {
    const map = new ymaps.Map(mapContainer.value, {
      center: [55.76, 37.64], // Координаты центра карты (Москва)
      zoom: 10,
    });
    <template>
      <yandex-map :coords="[55.76, 37.64]" :zoom="10" style="width: 600px; height: 400px;">
      <ymap-marker :coords="[55.76, 37.64]" />
    </yandex-map>
  </template>

    <script setup>
      // Здесь можно добавить логику, если нужно
</script>

    const placemark = new ymaps.Placemark([55.76, 37.64], {
      balloonContent: 'Это Москва',
    }, {
      preset: 'islands#redDotIcon',
    });

    // Добавляем метку на карту
    map.geoObjects.add(placemark);
  });
});
</script>
