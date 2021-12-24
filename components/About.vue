<template>
  <section class="about">
    <h2 class="section-title">О моем курсе</h2>

    <div class="about__wrapper">
      <article class="about__description">
        <h5>Всем привет!</h5>
        <p>
          Меня зовут Новикова Александра, я сертифицированный мастер и технолог
          в сфере реконструкции волос. Преображаю волосы моих прекрасных гостей
          уже 4 года.
        </p>
        <p>Я рада тебя видеть на своей странице студии.</p>
        <p>
          В моей студии вы можете не только сделать себе красивые волосы, но и
          пройти обучение самой востребованной профессии современности: мастер
          реконструкции волос.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss">
.about {
  &__description {
    padding: 20px 0;
    width: 60%;

    h5 {
      font-size: 22px;
    }
  }
}
</style>
