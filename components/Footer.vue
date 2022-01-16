<template>
  <footer class="main-footer">
    <div class='container'>
      <a href='http://keratin-course.ru/' class='main-footer__copy'>&copy; {{currentDate.getFullYear()}} Студия Александры Новиковой</a>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data(){
    return {
      currentDate: new Date,
    }
  }
}
</script>

<style lang="scss">
.main-footer {

  .container {
    padding: 40px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &__copy {
    color: $black-color;
  }
}
</style>
