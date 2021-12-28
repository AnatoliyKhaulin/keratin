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

      <div class="about-list">
        <picture class="about-list__icon">
          <img src="images/work_3.jpeg" alt="" />
        </picture>
        <div class="about-list__text">
          <h4 class="about-list__title">
            Приглашаю вас на курс для новичков с нуля. После него вы узнаете:
          </h4>
          <ul>
            <li>Всю теорию по строению волос</li>
            <li>Как правильно вести Инстаграм мастеру</li>
            <li>Как привлекать и удерживать клиентов</li>
            <li>Какой стартовый набор для начала нужно купить</li>
            <li>Как без страха подбирать температуру утюга</li>
            <li>Основы сервиса и многое другое</li>
          </ul>
        </div>
      </div>

      <div class="about-list about-list_right-text">
        <div class="about-list__text">
          <h4 class="about-list__title">
            Что вас ждёт на курсе и после него :
          </h4>
          <ul>
            <li>Сможете выйти за заработок от 70.000 в месяц</li>
            <li>Отпуск и выходные тогда , когда захочется</li>
            <li>Никаких начальников -сама себе хозяйка</li>
            <li>Работа в атмосфере красоты и позитива</li>
            <li>
              Сразу без страха сможете начать работу , взять моделей на
              отработку
            </li>
            <li>
              У вас будет доступ к чату с моими учениками , где вы сможете
              задавать любые интересующие вопросы , делиться опытом с другими
              мастерами
            </li>
          </ul>
        </div>
        <picture class="about-list__icon">
          <img src="images/work_6.jpeg" alt="" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="less">
.about {
  &__description {
    padding: 20px 0;
    width: 63%;
    margin: 0 auto 40px;

    h5 {
      font-size: 22px;
    }
  }

  &__wrapper {
    max-width: 80%;
    margin: 0 auto;
  }
}

.about-list {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 60px;
  }

  &__text {
    width: 60%;
  }

  &__icon {
    width: 280px;
    height: 280px;

    img {
      max-width: 100%;
      max-height: 100%;

      margin: auto;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 20px;
    margin-bottom: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 18px;

      &:not(:last-of-type) {
        margin-bottom: 8px;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 10px;
        height: 2px;
        background-color: @primary-color;
      }
    }
  }

  &_right-text {
    .about-list__text {
      width: 60%;
    }
  }
}
</style>
