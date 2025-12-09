<script setup>
import SectionName from '@/components/section/SectionName.vue';
import ContactInfoItem from "@/components/contacts/ContactInfoItem.vue";
</script>

<template>
  <section id="Contacts" class="contacts app-section">
    <div class="app-container">
      <div class="app-component-layout">
        <div class="d-flex flex-column contacts__top">
          <div>
            <SectionName>Контакты</SectionName>
            <h4 class="contacts__title">
              Свяжитесь с нами
            </h4>
          </div>

          <h6 class="contacts__subtitle">
            ООО «Ника»
          </h6>

          <div class="contacts__info">
            <ContactInfoItem label="Телефон:" text="+7 (938) 080-22-22" />
            <ContactInfoItem label="Почта:" text="plitka2222@mail.ru" />
            <ContactInfoItem label="Адрес:" text="Ростов-на-Дону, ул. Ерёменко, 89Б/5" />
            <ContactInfoItem label="Часы работы:" text="Пн–Вс 10:00–20:00" />
          </div>
        </div>

        <div class="contacts__map">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc07e653bf4510318cf2b7d3e088ff792998a9a814c2c16512ee9d56add71614&amp;source=constructor" width="100%" height="521" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contacts {
  overflow: hidden;

  &__top {
    gap: 40px;
  }

  &__title {
    margin: 20px 0 50px;
    color: #121211;
    font-weight: 600;
    font-size: 48px;
  }

  &__subtitle {
    padding-bottom: 10px;
    color: #121211;
    font-size: 22px;
  }

  &__info {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 70px;
  }
}

.contacts__map__img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

@media all and (max-width: 720px) {
  .contacts__title {
    font-size: 32px;
  }

  .contacts__info {
    grid-template-columns: 100%;
    gap: 24px;
  }
}

@media all and (max-width: 720px) {
  .contacts__map {
    margin-top: 16px;
  }

  .contacts__top {
    gap: 16px;
  }
}
</style>