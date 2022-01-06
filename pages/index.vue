<template>
  <a-config-provider :auto-insert-space-in-button="false">
    <main class="main-wrapper">
      <Header />
      <Intro />
      <About />
      <Works />
      <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
      <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/ehtisham-abid" title="Ehtisham Abid">Ehtisham Abid</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
      <!-- <div>Автор иконок: <a href="https://www.flaticon.com/ru/authors/berkahicon" title="berkahicon">berkahicon</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
      <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/surang" title="surang">surang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
      <!-- <div>Автор иконок: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> -->
    </main>
  </a-config-provider>
</template>

<script>
import Header from '~/components/Header'
import Intro from '~/components/Intro'
import About from '~/components/About'
import Works from '~/components/Works'

export default {
  components: { Header, Intro, About, Works },
  data: () => ({
    some: 'самый главный',
  }),
}
</script>

<style lang="scss"></style>
