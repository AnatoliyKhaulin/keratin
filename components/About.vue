<template>
  <section class="about">
    <h2 class="section-title">О моем курсе</h2>

    <div class="about__wrapper">
      <article class="about__description">
        <h5>Всем привет!</h5>
        <p>
          Меня зовут Новикова Александра, я сертифицированный мастер и технолог
          в сфере реконструкции волос. Преображаю волосы моих прекрасных гостей
          более 4 лет.
        </p>
        <p>Я рада тебя видеть на странице своей студии.</p>
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
      <p>
        Курс с нуля строго индивидуальный, длится 2 полных дня с 10:00 до вечера
        <br />
        (как закончим).
      </p>
      <p>
        На курсе предоставляются все методички, теоретические материалы, модели,
        расходные материалы, вкусняшки, шампанское в конце.
      </p>
      <p>Вам нужна с собой только тетрадь с ручкой и хорошее настроение.</p>
      <p>Поддержка после обучения от меня 24/7 навсегда.</p>
      <p>Стоимость курса <strong>20.000 рублей</strong>.</p>
    </footer>
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
    width: 80%;
    text-align: center;
    margin: 0 auto 40px;

    h5 {
      font-size: 22px;
    }
  }

  &__footer {
    width: 80%;
    text-align: center;
    margin: 0 auto 40px;
    padding-top: 10px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;

    strong {
      font-weight: 900;
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
    border-radius: 50%;
    overflow: hidden;
    border: 10px solid @white-color;

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
