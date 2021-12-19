<template>
  <header class="main-header">
    <a-menu v-model="currentNav" mode="horizontal">
      <a-menu-item key="about">
        <a-icon type="fund" />
        О курсе
      </a-menu-item>
      <a-menu-item key="works">
        <a-icon type="home" />
        Студия
      </a-menu-item>
      <a-menu-item key="reviews">
        <a-icon type="message" />
        Отзывы
      </a-menu-item>
    </a-menu>
    <a-button type="primary" size="large" @click="showModal">
      Записаться на курс
    </a-button>
    <a-drawer
      title="Запись на курс"
      placement="right"
      width="30%"
      :closable="false"
      :visible="visible"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <a-form
        :form="form"
        :label-col="{ span: 4 }"
        :wrapper-col="{ span: 20 }"
        @submit="handleSubmit"
      >
        <a-form-item label="Имя">
          <a-input
            v-decorator="[
              'name',
              {
                rules: [{ required: true, message: 'Как вас зовут?' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="Email">
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
                  {
                    required: true,
                    message: 'Введите вашу почту',
                    type: 'email',
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 20, offset: 4 }">
          <a-button type="primary" html-type="submit" size="large">
            Записаться!
          </a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      currentNav: [],
      visible: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val)
    },
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    showModal() {
      this.visible = true
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    },
    handleCancel(e) {
      console.log('Clicked cancel button')
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
