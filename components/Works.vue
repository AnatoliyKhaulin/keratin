<template>
  <section id="works" class="works">
    <h2 class="section-title">Работы моей студии</h2>
    <silent-box
      :gallery="images"
      :lazy-loading="true"
      class="works__gallery"
    ></silent-box>
  </section>
</template>

<script>
export default {
  name: 'Works',
  data: () => ({
    images: [
      {
        src: 'images/work_1.jpeg',
      },

      {
        src: 'images/work_2.jpeg',
      },
      {
        src: 'images/work_4.jpeg',
      },
      {
        src: 'images/work_5.jpeg',
      },
    ],
    index: null,
  }),
}
</script>

<style lang="scss">
.works {
  padding-bottom: 40px;

  &__gallery {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 340px;
    grid-auto-flow: dense;

    .silentbox-item {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:nth-of-type(4) {
        grid-column: span 2;
      }

      &:nth-of-type(2) {
        grid-row: span 2;
      }

      @media (max-width: 1024px) {
        width: 100%;
        height: 230px;
        margin-bottom: 20px;
      }
    }

    @media (max-width: 1024px) {
      display: block;
    }
  }

  @media (max-width: 1024px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
