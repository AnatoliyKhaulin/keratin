<template>
  <section id="about" class="about">
    <h2 class="section-title">О курсе</h2>

    <div class="about__wrapper">
      <article class="about-description">
        <div class="about-description__text">
          <h5>Всем привет!</h5>
          <p>
            Меня зовут Новикова Александра, я сертифицированный мастер и
            технолог в сфере реконструкции волос. Преображаю волосы моих
            прекрасных гостей более 4 лет.
          </p>
          <p>Я рада тебя видеть на странице своей студии.</p>
          <p>
            В моей студии вы можете не только сделать себе красивые волосы, но и
            пройти обучение самой востребованной профессии современности: мастер
            реконструкции волос.
          </p>
        </div>
        <picture class="about-description__photo">
          <div class="about-description__photo-wrap">
            <img src="images/about.jpg" alt="" />
          </div>
        </picture>
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
            <li>Как правильно вести <strong>Инстаграм</strong> мастеру</li>
            <li>Как <strong>привлекать и удерживать</strong> клиентов</li>
            <li>
              Какой <strong>стартовый набор</strong> для начала нужно купить
            </li>
            <li>Как без страха подбирать температуру утюга</li>
            <li><strong>Основы сервиса</strong> и многое другое</li>
          </ul>
        </div>
      </div>

      <div class="about-list about-list_right-text">
        <div class="about-list__text">
          <h4 class="about-list__title">Что вас ждёт на курсе и после него:</h4>
          <ul>
            <li>
              Сможете выйти за заработок от <strong>70.000 в месяц</strong>
            </li>
            <li>Отпуск и выходные тогда, когда захочется</li>
            <li><strong>Никаких начальников</strong> - сама себе хозяйка</li>
            <li>Работа в атмосфере <strong>красоты и позитива</strong></li>
            <li>
              Сразу без страха сможете <strong>начать работу</strong>, взять
              моделей на отработку
            </li>
            <li>
              У вас будет доступ к чату с моими учениками, где вы сможете
              задавать любые интересующие вопросы, делиться опытом с другими
              мастерами
            </li>
          </ul>
        </div>
        <picture class="about-list__icon">
          <img src="images/work_6.jpeg" alt="" />
        </picture>
      </div>
    </div>

    <footer class="about__footer">
      <article class="about-result">
        <picture class="about-result__icon">
          <img src="images/icons/i_beauty_saloon.png" alt="" />
        </picture>
        <h5 class="about-result__title">
          Курс с нуля строго индивидуальный, длится 2 полных дня с 10:00 до
          вечера
          <br />
          (как закончим).
        </h5>
      </article>

      <article class="about-result">
        <picture class="about-result__icon">
          <img src="images/icons/i_guidelines.png" alt="" />
        </picture>
        <h5 class="about-result__title">
          На курсе предоставляются все методички, теоретические материалы,
          модели, расходные материалы, вкусняшки, шампанское в конце.
        </h5>
      </article>

      <article class="about-result">
        <picture class="about-result__icon">
          <img src="images/icons/i_notes.png" alt="" />
        </picture>
        <h5 class="about-result__title">
          Вам нужна с собой только тетрадь с ручкой и хорошее настроение.
        </h5>
      </article>

      <article class="about-result">
        <picture class="about-result__icon">
          <img src="images/icons/i_24_hours.png" alt="" />
        </picture>
        <h5 class="about-result__title">
          Поддержка после обучения от меня 24/7 - навсегда.
        </h5>
      </article>

      <article class="about-price">
        <picture class="about-price__icon">
          <img src="images/icons/i_ruble.png" alt="" />
        </picture>
        <h5 class="about-price__title">
          Стоимость курса <strong>20.000 рублей</strong>.
        </h5>
      </article>
    </footer>
    <a-button
      type="primary"
      size="large"
      class="about__btn"
      @click="showModal()"
    >
      Записаться на курс
    </a-button>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'About',
  methods: {
    ...mapActions(['showModal']),
  },
}
</script>

<style lang="less">
.about {
  padding-bottom: 80px;
  &__footer {
    text-align: center;
    margin: 0 auto 40px;
    padding-top: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  &__btn {
    display: block;
    margin: 0 auto;
  }
}

.about-description {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 20px;
  margin-bottom: 40px;
  padding-bottom: 20px;

  &__text {
    h5 {
      font-size: 22px;
    }
  }

  &__photo {
    position: relative;

    &-wrap {
      width: 100%;
      height: 320px;
      border-radius: 8px;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:after {
      content: '';
      position: absolute;
      left: -20px;
      bottom: -20px;
      height: 40px;
      width: 60%;
      z-index: -1;
      background-color: @primary-color;
    }

    &:before {
      content: '';
      position: absolute;
      right: -30px;
      top: -30px;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      z-index: -1;
      background-color: @primary-color;
    }
  }
}

.about-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  &__text {
    width: 60%;
  }

  &__icon {
    width: 350px;
    height: 350px;
    border-radius: 8px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: auto;
    }
  }

  &__title {
    text-transform: uppercase;
    font-size: 24px;
    margin-bottom: 16px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 0;

      &:not(:last-of-type) {
        margin-bottom: 8px;
      }

      &::before {
        content: '';
        position: absolute;
        left: -16px;
        top: -2px;
        width: 24px;
        height: 24px;
        z-index: -1;
        border-radius: 5px;
        background-color: @primary-color;
        opacity: 0.3;
      }
    }
  }

  &_right-text {
    .about-list__text {
      width: 60%;
    }
  }
}

.about-result,
.about-price {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 25%;
  padding: 20px 5px;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: lighten(@primary-color, 30%);
    box-shadow: 1px 1px 18px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;

    img {
      width: 50%;
      height: 50%;
    }
  }

  &__title {
    font-family: @base-font;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    margin: 0;
  }
}

.about-price {
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;

  &__icon {
    margin-bottom: 0;
    margin-right: 20px;
  }

  &__title {
    font-size: 22px;
  }
}
</style>
