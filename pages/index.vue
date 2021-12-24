<template>
  <a-config-provider :auto-insert-space-in-button="false">
    <main class="main-wrapper">
      <Header />
      <Intro />
      <About />
    </main>
  </a-config-provider>
</template>

<script>
import Header from '~/components/Header'
import Intro from '~/components/Intro'
import About from '~/components/About'

export default {
  components: { Header, Intro, About },
  data: () => ({
    some: 'самый главный',
  }),
}
</script>

<style lang="scss"></style>
