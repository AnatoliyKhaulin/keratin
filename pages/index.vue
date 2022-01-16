<template>
  <div>
    <a-config-provider :auto-insert-space-in-button="false">
      <main class="main-wrapper">
        <Header />
        <Intro />
        <About />
        <Works />
        <Reviews />
        <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/ehtisham-abid" title="Ehtisham Abid">Ehtisham Abid</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/berkahicon" title="berkahicon">berkahicon</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Автор иконок: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
        <a-drawer
          title="Запись на курс"
          placement="right"
          width="40%"
          :closable="false"
          :visible="isShowModal"
          @close="hideModal()"
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
      </main>
    </a-config-provider>
    <Contacts />
    <Footer/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from '~/components/Header'
import Intro from '~/components/Intro'
import About from '~/components/About'
import Works from '~/components/Works'
import Reviews from '~/components/Reviews'
import Contacts from '~/components/Contacts'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Intro,
    About,
    Works,
    Reviews,
    Contacts,
    Footer
  },
  data() {
    return {
      visible: true,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  head: {
    title: 'Кератиновое выпрямление и ботокс волос',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Кератиновое выпрямление и ботокс волос, Курс кератиновое выпрямление, курс ботокс волос',
      },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  computed: { ...mapState(['isShowModal']) },
  methods: {
    ...mapActions(['hideModal']),
    // afterVisibleChange(val) {
    //   console.log('visible', val)
    // },
    // showDrawer() {
    //   this.visible = true
    // },
    // onClose() {
    //   this.visible = false
    // },
    // showModal() {
    //   this.visible = true
    // },
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

<style></style>
