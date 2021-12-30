<template>
  <section class="intro">
    <div class="intro-title">
      <p class="intro-title__sup">Курс</p>
      <h1 class="intro-title__title">Кератиновое выпрямление и ботокс волос</h1>
      <a-button type="primary" size="large"> Записаться на курс </a-button>
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
export default {
  name: 'Intro',
}
</script>

<style lang="less">
.intro {
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
}

.intro-title {
  &__title {
    font-size: 57px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__sup {
    color: @primary-color;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 0;
  }
}
</style>
