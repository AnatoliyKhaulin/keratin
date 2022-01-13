<template>
  <section class="contacts">
    <div class="contacts__map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A8e2ae906772d0a5158c4b5e0d311a2c920db32c136e39d5a937da2140c11bceb&amp;source=constructor"
        width="100%"
        height="360"
        frameborder="0"
      ></iframe>
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

<style lang="less">
.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 60px;

  &__form {
    padding-right: 25px;
  }

  &__title {
    display: inline-block;
    position: relative;
    font-size: 48px;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background-color: #ef98aa;
    }
  }
}

.contacts-form {
  position: relative;
  max-width: 320px;

  &::after {
    content: '';
    width: 160px;
    height: 160px;
    border-radius: 50%;
    position: absolute;
    right: -80px;
    bottom: 40px;
    z-index: -1;
    background-color: @primary-color;
  }
}
</style>
