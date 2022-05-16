<template>
  <section class="d-flex flex-column align-items-center">
    <h1 class="w-100 d-flex align-items-center justify-content-between">
      новости

      <img src="@/assets/icons/arrow-right-blue.svg" />
    </h1>

    <div class="news-wrapper">
      <div class="new-card">
        <div>
          <div class="d-flex justify-content-between">
            <p class="mt-20 mr-20">28 сен</p>

            <img src="@/assets/images/news-img.png" />
          </div>

          <h3>Кирилл Новиков успешно сдал экзамен на лицензию PRO</h3>
        </div>

        <div class="d-flex">
          <img src="@/assets/icons/gallery-icon.svg"
               class="new-card__icon" />

          <p># кубок россии</p>
        </div>
      </div>

      <div class="new-card new-card-video">
        <div>
          <div class="d-flex justify-content-between">
            <p class="mt-20 mr-20">28 сен</p>

            <img src="@/assets/images/news-img.png" />
          </div>

          <h3>Кирилл Новиков успешно сдал экзамен на лицензию PRO</h3>
        </div>

        <div class="d-flex">
          <img src="@/assets/icons/video-icon.svg"
               class="new-card__icon" />

          <p># кубок россии</p>
        </div>
      </div>

      <div class="new-card mobile-hidden">
        <div>
          <div class="d-flex justify-content-between">
            <p class="mt-20 mr-20">28 сен</p>

            <img src="@/assets/images/news-img.png" />
          </div>

          <h3>Кирилл Новиков успешно сдал экзамен на лицензию PRO</h3>
        </div>

        <div class="d-flex">
          <img src="@/assets/icons/gallery-icon.svg"
               class="new-card__icon" />

          <p># кубок россии</p>
        </div>
      </div>

      <div class="new-card new-card-video">
        <div>
          <div class="d-flex justify-content-between">
            <p class="mt-20 mr-20">28 сен</p>

            <img src="@/assets/images/news-img.png" />
          </div>

          <h3>Кирилл Новиков успешно сдал экзамен на лицензию PRO</h3>
        </div>

        <div class="d-flex">
          <img src="@/assets/icons/video-icon.svg"
               class="new-card__icon" />

          <p># кубок россии</p>
        </div>
      </div>

      <div class="new-card mobile-hidden">
        <div>
          <div class="d-flex justify-content-between">
            <p class="mt-20 mr-20">28 сен</p>

            <img src="@/assets/images/news-img.png" />
          </div>

          <h3>Кирилл Новиков успешно сдал экзамен на лицензию PRO</h3>
        </div>

        <div class="d-flex">
          <img src="@/assets/icons/gallery-icon.svg"
               class="new-card__icon" />

          <p># кубок россии</p>
        </div>
      </div>

      <div class="new-card">
        <div>
          <div class="d-flex justify-content-between">
            <p class="mt-20 mr-20">28 сен</p>

            <img src="@/assets/images/news-img.png" />
          </div>

          <h3>Кирилл Новиков успешно сдал экзамен на лицензию PRO</h3>
        </div>

        <div class="d-flex">
          <img src="@/assets/icons/gallery-icon.svg"
               class="new-card__icon" />

          <p># кубок россии</p>
        </div>
      </div>
    </div>

    <button class="btn btn-outline-blue mt-20 mb-20">показать еще</button>
  </section>
</template>

<script>
export default {
  name: 'NewsSection',

  computed: {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
h3 {
  margin-top: 15px;
  margin-bottom: 0;
  font-size: 26px;
  font-weight: 500;

  @media(max-width: 480px) {
    font-size: 20px;
    line-height: 25px;
  }
}

.btn-outline-blue {
  font-size: 18px !important;
  height: 60px !important;
  width: calc(100% - 40px);

  @media(max-width: 900px) {
    width: calc(100% - 30px) !important;
  }
}

.news-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}

.new-card {
  @include clickable-item;

  width: 480px;
  height: 400px;
  color: $primary-blue;
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    opacity: 0.9;
    border-radius: 4px;
    box-shadow: 5px 5px 10px 5px rgba(34, 60, 80, 0.4);
  }

  @media(max-width: 480px) {
    width: 360px;
    height: 285px;
    padding-left: 15px;
    padding-bottom: 15px;

    img {
      width: 240px;
      height: 160px;
    }

    &__icon {
      width: 18px !important;
      height: 16px !important;
      margin-right: 85px;
    }
  }

  &-video {
    background-color: $primary-blue;
    color: white;
    border-color: $primary-blue;
    z-index: 9999;
  }

  p {
    margin-bottom: 0;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
  }

  &__icon {
    width: 18px;
    height: 16px;
    margin-right: 81px;
  }
}

.mobile-hidden {
  @media(max-width: 1000px){
    display: none !important;
  }
}
</style>
