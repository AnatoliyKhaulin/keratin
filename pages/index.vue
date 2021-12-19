<template>
  <a-config-provider :auto-insert-space-in-button="false">
    <main class="main-wrapper">
      <Header />
      <Intro />
    </main>
  </a-config-provider>
</template>

<script>
import Header from '~/components/Header'
import Intro from '~/components/Intro'

export default {
  components: { Header, Intro },
  data: () => ({
    some: 'самый главный',
  }),
}
</script>

<style lang="scss"></style>
