<template>
  <section class="reviews" id="reviews">
    <h2 class="section-title">Отзывы клиентов</h2>
    <silent-box :gallery="images" :lazy-loading="true" class="reviews__gallery">
    </silent-box>
  </section>
</template>

<script>
export default {
  name: 'Reviews',
  data: () => ({
    images: [
      {
        src: 'images/review_1.jpeg',
      },
      {
        src: 'images/review_2.jpeg',
      },
      {
        src: 'images/review_3.jpeg',
      },
      {
        src: 'images/review_4.jpeg',
      },
    ],
    index: null,
  }),
}
</script>

<style lang="scss">
.reviews {
  padding: 40px 0;

  &__gallery {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-top: 40px;

    .silentbox-item {
      display: flex;
      overflow: hidden;
      width: 300px;
      height: 400px;
      transition-property: transform, background-color, box-shadow;
      transition-duration: 0.3s;

      @media (min-width: 1024px) {
        &:hover {
          z-index: 2;
          transform: scale(1.2);
          box-shadow: 0 0 15px rgba(#000, 0.1);
          background-color: #fff;
          transition-property: transform, background-color, box-shadow;
          transition-duration: 0.3s;
        }
      }

      &:nth-of-type(odd) {
        margin-left: auto;
      }

      &:nth-of-type(2) {
        margin-top: auto;
        height: 200px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &::before {
      content: '”„';
      font-size: 160px;
      line-height: 1;
      position: absolute;
      right: 200px;
      top: 20px;
      z-index: -1;
      color: $second-color;
      font-family: $title-font;
    }

    &::after {
      content: '';
      width: 160px;
      height: 160px;
      position: absolute;
      left: 150px;
      bottom: -40px;
      z-index: -1;
      background-color: $second-color;
    }
  }
}
</style>
