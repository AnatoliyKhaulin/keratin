<template>
  <header class="main-header">
    <a-button v-if='$device.isMobile' type="primary" @click="toggleCollapsed" size='large'>
      <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
    </a-button>

    <a-anchor
      v-if='$device.isDesktop'
      wrapper-class="main-header__anchor"
      :affix="false"
      :offset-top="40"
    >
      <a-menu v-model="currentNav" mode="horizontal" class="main-header__menu">
        <a-menu-item key="about">
          <a-icon type="fund" />
          <!-- О курсе -->
          <a-anchor-link href="#about" title="О курсе" />
        </a-menu-item>
        <a-menu-item key="works">
          <a-icon type="home" />
          <a-anchor-link href="#works" title="Студия" />
        </a-menu-item>
        <a-menu-item key="reviews">
          <a-icon type="message" />
          <a-anchor-link href="#reviews" title="Отзывы" />
        </a-menu-item>
      </a-menu>
    </a-anchor>

    <a-button type="primary" size="large" @click="showModal()">
      Записаться на курс
    </a-button>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainHeader',
  data() {
    return {
      currentNav: [],
      collapsed: false
    }
  },
  methods: {
    ...mapActions(['showModal', 'showMenu']),
    toggleCollapsed() {
      this.showMenu()
      this.collapsed = !this.collapsed
    }
  },
}
</script>

<style lang="scss">
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  &__menu {
    background-color: $bg-color;
  }

  &__anchor {
    padding: 0;
    margin: 0;
    background-color: transparent;
    overflow: hidden;

    .ant-anchor {
      padding: 0;
      margin: 0;
    }

    .ant-anchor-ink {
      display: none;
    }

    .ant-anchor-link {
      padding: 0;
      display: inline-block;
      vertical-align: middle;
    }

    .ant-menu-item {
      cursor: default;
    }
  }
}
</style>
