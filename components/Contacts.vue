<template>
  <section class="contacts">
    <div class="contacts__map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8e2ae906772d0a5158c4b5e0d311a2c920db32c136e39d5a937da2140c11bceb&amp;source=constructor"
        width="100%"
        height="360"
        frameborder="0"
      ></iframe>
      <div class="contacts__map-phone">
        <a href="tel:89169123114">8 (916) 912-31-14</a>
      </div>
    </div>
    <div class="contacts__form">
      <h2 class="contacts__title">Записаться онлайн</h2>
      <a-form
        :form="form"
        :layout="formLayout"
        class="contacts-form"
        @submit="handleSubmit"
      >
        <a-form-item label="Имя">
          <a-input
            v-decorator="[
              'name',
              { rules: [{ required: true, message: 'Введите ваше имя' }] },
            ]"
            size="large"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>

        <a-form-item label="Телефон">
          <a-input
            v-decorator="[
              'phone',
              { rules: [{ required: true, message: 'Введите ваш телефон' }] },
            ]"
            size="large"
            type='number'
          >
            <a-icon
              slot="prefix"
              type="phone"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" size="large">
            Записаться
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contacts',
  data() {
    return {
      formLayout: 'vertical',
      form: this.$form.createForm(this, { name: 'contacts' }),
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
  },
}
</script>

<style lang="scss">
.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 80px;
  padding-top: 60px;
  padding-bottom: 20px;
  overflow: hidden;

  &__form {
    padding-right: 25px;
  }

  &__title {
    display: inline-block;
    position: relative;
    font-size: 46px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: $primary-color;
    }

    &::before {
      content: '';
      width: 60px;
      height: 60px;
      border-radius: 50%;
      position: absolute;
      right: 20px;
      bottom: 20px;
      z-index: -1;
      background-color: $second-color ;
    }
  }

  &__map {
    position: relative;

    &-phone {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 10px 20px;
      background-color: $primary-color;

      a {
        color: #fff;
        font-size: 32px;
        font-weight: 700;

        &:hover,
        &:focus {
          color: #000;
        }
      }
    }
  }
}

.contacts-form {
  position: relative;
  max-width: 320px;
}
</style>
