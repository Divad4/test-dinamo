<template>
  <header class="header">
    <div class="d-flex h-100 header-desktop">
      <b-col class="d-flex align-items-center justify-content-center header__logo-block h-100"
             xl="1"
             lg="1"
             sm="1">
        <img src="@/assets/logo-academy.svg" />
      </b-col>

      <b-col class="d-flex flex-column h-100"
             xl=""
             lg=""
             sm="">
        <div class="header__nav-block d-flex fsize-12 p-20 border-bottom">
          <b-link href="#dinamo"
                  class="text-uppercase fsize-12 mr-20">
            фк динамо

            <img src="@/assets/icons/arrow-top-right.svg" />
          </b-link>

          <b-link href="#dinamo"
                  class="text-uppercase fsize-12 mr-20">
            жфк динамо

            <img src="@/assets/icons/arrow-top-right.svg" />
          </b-link>

          <b-link href="#dinamo"
                  class="text-uppercase fsize-12 mr-20">
            динамо-2

            <img src="@/assets/icons/arrow-top-right.svg" />
          </b-link>

          <b-link href="#dinamo"
                  class="text-uppercase fsize-12 mr-20">
            эндаумент-фонд

            <img src="@/assets/icons/arrow-top-right.svg" />
          </b-link>

          <b-link href="#dinamo"
                  class="text-uppercase fsize-12 mr-20 desktop-sm__none">
            франшиза

            <img src="@/assets/icons/arrow-top-right.svg" />
          </b-link>

          <b-link href="#dinamo"
                  class="text-uppercase fsize-12 mr-20 desktop-sm__none">
            магазин

            <img src="@/assets/icons/arrow-top-right.svg" />
          </b-link>
        </div>

        <div class="header__nav-block d-flex align-items-center justify-content-stretch">
          <b-col class="d-flex align-items-center justify-content-center border-right h-100">
            <b-link href="#news"
                    class="text-uppercase fsize-14">новости</b-link>
          </b-col>

          <b-col class="d-flex align-items-center justify-content-center border-right h-100">
            <b-link href="#teams"
                    class="text-uppercase fsize-14">команды</b-link>
          </b-col>

          <b-col class="d-flex align-items-center justify-content-center border-right h-100">
            <b-link href="#matches"
                    class="text-uppercase fsize-14">матчи</b-link>
          </b-col>

          <b-col class="d-flex align-items-center justify-content-center">
            <b-link href="#academy"
                    class="text-uppercase fsize-14">академия</b-link>
          </b-col>

          <b-col class="d-flex align-items-center justify-content-center d-xl-none">
            <b-link href="#academy"
                    class="text-uppercase fsize-14">
              магазин

              <img src="@/assets/icons/arrow-top-right.svg" />
            </b-link>
          </b-col>

          <b-col class="d-flex align-items-center justify-content-center d-xl-none">
            <b-link href="#academy"
                    class="text-uppercase fsize-14">
              франшиза

              <img src="@/assets/icons/arrow-top-right.svg" />
            </b-link>
          </b-col>
        </div>
      </b-col>

      <b-col class="border-left header__logo-block"
             xl="1"
             lg="1"
             sm="1">
        <div class="header__nav-block d-flex align-items-center border-bottom">
          <img src="@/assets/logo-vtb.svg"
               class="ml-26" />
        </div>

        <div class="d-flex header__icons-block">
          <div class="w-100 d-flex align-items-center justify-content-center">
            <img src="@/assets/icons/profile-icon.svg"/>
          </div>

          <div class="border-left w-100 d-flex align-items-center justify-content-center">
            <img src="@/assets/icons/search-icon.svg"/>
          </div>
        </div>
      </b-col>
    </div>

    <div class="d-flex h-100 header-mobile">
      <b-col class="d-flex align-items-center justify-content-center header__logo-block h-100">
        <img src="@/assets/logo-academy.svg" />
      </b-col>

      <b-col class="d-flex align-items-center justify-content-between ml-16">
        <div class="d-flex align-items-center header-mobile__menu">
          <img src="@/assets/icons/menu-icon.svg" />

          меню
        </div>

        <div class="d-flex align-items-center h-100">
          <div class="header-mobile__icon">
            <img src="@/assets/logo-vtb.svg"
                 class="" />
          </div>

          <div class="header-mobile__icon border-left clickable-item">
            <img src="@/assets/icons/profile-icon.svg"
                 class="" />
          </div>

          <div class="header-mobile__icon border-left clickable-item">
            <img src="@/assets/icons/search-icon.svg"
                 class="" />
          </div>
        </div>
      </b-col>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderRegion',

  computed: {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
.header {
  height: 120px;
  background-color: white;
  font-family: $hoves;
  box-shadow: 0px 1px 0px #0959A1;

  @media(max-width: 960px) {
    height: 50px;

    .header-desktop {
      display: none !important;
    }

    .header-mobile {
      display: flex !important;
    }
  }

  &__logo-block {
    background-color: $primary-blue;
    max-width: 120px;
    min-width: 120px;

    &:last-child {
      background-color: white;
    }

    @media(max-width: 960px) {
      max-width: 50px;
      min-width: 50px;

      img {
        height: 50px;
        width: 50px;
      }
    }
  }

  &__nav-block {
    height: 60px;

    @media(max-width: 1200px) {
      padding: 20px;
      justify-content: flex-start !important;

      div {
        justify-content: flex-start !important;
        max-width: min-content;
        margin-right: 20px;
      }
    }
  }

  &__icons-block {
    height: 60px;

    img {
      @include clickable-item;
    }
  }
}

.header-mobile {
  display: none !important;

  &__menu {
    @include clickable-item;

    font-size: 14px;
    color: $primary-blue;
    font-weight: 500;
    text-transform: uppercase;

    img {
      margin-right: 11px;
    }
  }

  &__icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;

    &:first-child {
      margin-right: 10px;
    }

    img {
      max-width: 40px;
    }
  }
}

//

.border-left, .border-bottom, .border-right {
  border-color: $primary-blue !important;
  border-width: 1px;
}

.border-right {
  @media(max-width: 1200px) {
    border: none !important;
  }
}
</style>
