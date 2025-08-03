<script setup>
import AboutRight from "@/components/about/AboutRight.vue";
import SectionName from "@/components/section/SectionName.vue";
import AboutAchievements from "@/components/about/AboutAchievements.vue";
</script>

<template>
  <section class="about app-section">
    <div class="app-component-layout">
      <div class="about__left d-flex flex-column">
        <SectionName>О бренде</SectionName>

        <div class="about__company">
          <div class="about__company__images d-flex align-items-end">
            <img src="/images/about-left-img.png" alt="" class="about__company__img" />
            <div class="about__company__rect"></div>
          </div>
          <p class="about__company__text"></p>
        </div>

        <AboutAchievements text="5 млн+ м²" description="плитки реализовано на объектах" />
      </div>

      <AboutRight />
    </div>
  </section>
</template>

<style scoped lang="scss">
.about__company {
  width: 100%;
  max-width: 360px;

  &__images {
    gap: 10px;
  }

  &__text {
    color: #121211;
    font-size: 22px;
  }

  & .about__company__img {
    height: 184px;
    width: 184px;
  }

  & .about__company__rect {
    height: 25px;
    width: 25px;
    background: #7A4FF1;
  }
}

.about__left {

}
</style>