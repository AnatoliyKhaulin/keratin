<template>
  <section class="intro">
    <div class="intro__social">
      <a
        href="https://instagram.com/hair_aleksandra"
        target="_blank"
        class="intro__inst"
      >
        <a-icon type="instagram" :style="{ fontSize: '36px' }" />
      </a>
    </div>
    <div class="intro-title">
      <p class="intro-title__sup">Курс</p>
      <h1 class="intro-title__title">Кератиновое выпрямление и ботокс волос</h1>
      <a-button type="primary" size="large" @click="showModal()">
        Записаться на курс
      </a-button>
    </div>
    <div>
      <picture class="intro__image">
        <img
          src="images/intro.jpg"
          alt="Курс кератиновое выпрямление и ботокс волос"
        />
      </picture>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Intro',
  methods: {
    ...mapActions(['showModal']),
  },
}
</script>

<style lang="scss">
.intro {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 60px;
  height: calc(100vh - 48px);
  align-items: center;

  &__image {
    display: block;
    margin: auto;
    height: 420px;
    width: 420px;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__social {
    position: absolute;
    right: 0;
    top: 50%;
  }

  &__inst {
    color: #c13584;
  }
}

.intro-title {
  &__title {
    font-size: 57px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__sup {
    color: $primary-color;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 0;
  }
}
</style>
