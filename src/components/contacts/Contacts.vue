<script setup>
import SectionName from '@/components/section/SectionName.vue';
import ContactInfoItem from "@/components/contacts/ContactInfoItem.vue";
</script>

<template>
  <section class="contacts">
    <div class="app-component-layout">
      <div class="d-flex flex-column contacts__top">
        <SectionName />
        <div>
          <h4 class="contacts__title">
            Свяжитесь с нами
          </h4>
          <h6 class="contacts__subtitle">
            ООО «Ника»
          </h6>
        </div>

        <div class="contacts__info">
          <ContactInfoItem label="Телефон:" text="+7 (938) 080-22-22" />
          <ContactInfoItem label="Почта:" text="plitka2222@mail.ru" />
          <ContactInfoItem label="Адрес:" text="Ростов-на-Дону, ул. Ерёменко, 89Б/5" />
          <ContactInfoItem label="Часы работы:" text="Пн–Вс 10:00–20:00" />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped lang="scss">
.contacts {
  &__top {
    gap: 40px;
  }
}
</style>