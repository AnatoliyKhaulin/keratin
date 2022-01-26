<template>
  <div>
    <a-config-provider :auto-insert-space-in-button="false">
      <main class="main-wrapper">
        <Header />
<!--        <Intro />-->
<!--        <About />-->
<!--        <Works />-->
<!--        <Reviews />-->
        <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/ehtisham-abid" title="Ehtisham Abid">Ehtisham Abid</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/berkahicon" title="berkahicon">berkahicon</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
        <!-- <div>Автор иконок: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
      </main>
    </a-config-provider>
<!--    <Contacts />-->
<!--    <Footer/>-->
    <a-drawer
      title="Запишись на курс"
      placement="right"
      :width="$device.isDesktop ? '40%' : '100%'"
      :closable="$device.isMobile"
      :visible="isShowModal"
      @close="hideModal()"
    >
      <a-form
        :form="form"
        layout='vertical'
        @submit="handleSubmit"
        class='drawer-form'
      >
        <a-form-item label="Имя">
          <a-input
            size="large"
            v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Как вас зовут?' }],
                  },
                ]"
          />
        </a-form-item>
        <a-form-item label="Телефон">
          <a-input
            size="large"
            type='number'
            v-decorator="[
                  'phone',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Введите ваш номер телефона',
                      },
                    ],
                  },
                ]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button type="primary" html-type="submit" size="large" class='drawer-form__btn'>
            Записаться!
          </a-button>
        </a-form-item>
      </a-form>
    </a-drawer>
    <a-drawer
      placement="left"
      width="100%"
      :closable="true"
      :visible="isShowMenu"
      @close="hideMenu()"
      class='menu-mob'
    >
      <nuxt-link :to="{path: '/', hash: 'about'}" v-scroll-to="{el: '#about'}" class='menu-mob__item' @click.native='hideMenu()'>
        <a-icon type="fund" />
        <span>О курсе</span>
      </nuxt-link>

      <nuxt-link :to="{path: '/', hash: 'works'}" v-scroll-to="{el: '#works'}"  class='menu-mob__item' @click.native='hideMenu()'>
        <a-icon type="home" />
        <span>Студия</span>
      </nuxt-link>

      <nuxt-link :to="{path: '/', hash: 'reviews'}" v-scroll-to="{el: '#reviews'}"  class='menu-mob__item' @click.native='hideMenu()'>
        <a-icon type="message" />
        <span>Отзывы</span>
      </nuxt-link>
    </a-drawer>
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
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      currentNav: []
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
  computed: { ...mapState(['isShowModal', 'isShowMenu']) },
  methods: {
    ...mapActions(['hideModal', 'hideMenu', 'showMenu']),
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.table(values)
          this.$mail.send({
            from: 'Обратная связь',
            subject: 'Заявка с сайта keratin-course, запись на курс',
            text: `
              <p>Имя: ${values.name}</p>
              <p>Телефон: ${values.phone}</p>
            `
          })
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

<style lang='scss'>
.ant-drawer-title {
  font-weight: 700;
  font-size: 28px;
}
.drawer-form {
  &__btn {
    width: 100%;
  }
}
.menu-mob {
  height: 100%;
  .ant-drawer-body {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }

  &__item {
    font-size: 18px;
    padding: 10px;
  }
}
</style>
