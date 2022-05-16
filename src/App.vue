<template>
  <div id="app">
    <HeaderRegion />

    <section class="intro">
      <hooper :autoPlay="true"
              :playSpeed="4000"
              :transition="1000"
              :wheelControl="false"
              :mouseDrag="false">
        <slide class="intro-slide">
          <div class="intro-slide__caption">
            <p>Стань частью футбольной академии Динамо имени Л.И. Яшина</p>

            <button class="btn btn-outline-primary mt-32">Узнать больше</button>
          </div>
        </slide>

        <slide class="intro-slide">
          <div class="intro-slide__caption">
            <p>Стань частью футбольной академии Динамо имени Л.И. Яшина</p>

            <button class="btn btn-outline-primary mt-32 disabled">Узнать больше</button>
          </div>
        </slide>

        <slide class="intro-slide">
          <div class="intro-slide__caption">
            <p>Стань частью футбольной академии Динамо имени Л.И. Яшина</p>

            <button class="btn btn-outline-primary mt-32"
                    href="#info">Узнать больше</button>
          </div>
        </slide>
      </hooper>
    </section>

    <NewsSection />

    <div class="promo-img-wrapper">
      <img src="@/assets/images/promo-img.png"
           class="promo-img" />
    </div>

    <section class="content">
      <Table />

      <Players />
    </section>

    <div class="promo-img-wrapper">
      <img src="@/assets/images/promo-img.png"
           class="promo-img" />
    </div>

    <EndowmentBlock />

    <FranchiseBlock />

    <div class="promo-img-wrapper">
      <img src="@/assets/images/promo-img.png"
           class="promo-img" />
    </div>

    <FooterRegion />
  </div>
</template>

<script>
import 'hooper/dist/hooper.css'
import { Hooper, Slide } from 'hooper'
import Table from './components/Table.vue'
import Players from './components/Players.vue'
import NewsSection from './components/NewsSection.vue'
import HeaderRegion from './components/HeaderRegion.vue'
import FooterRegion from './components/FooterRegion.vue'
import EndowmentBlock from './components/EndowmentBlock.vue'
import FranchiseBlock from './components/FranchiseBlock.vue'

export default {
  name: 'App',

  components: {
    Hooper,
    Slide,
    Table,
    Players,
    NewsSection,
    HeaderRegion,
    FooterRegion,
    EndowmentBlock,
    FranchiseBlock,
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: $hoves;
  overflow-x: hidden;
}

.promo-img-wrapper {
  height: 240px;
  width: 100%;

  @media(max-width: 800px){
    margin-left: 0px;
  }

  @media(max-width: 700px) {
    width: 120%;
    margin-left: -50px;
  }
}

.promo-img {
  background-image: url('./assets/images/promo-img.png');
  background-position: center;
  background-size: cover;
  height: 240px;
  width: 100%;

  @media(max-width: 960px) {
    background-position: right;
    background-repeat: no-repeat !important;
  }

  @media(max-width: 700px){
    background-clip:  inherit;
  }
}

.content {
  display: flex;

  @media(max-width: 1200px){
    flex-direction: column;
  }
}

.intro {
  width: 100%;
  height: 100%;

  .intro-slide {
    width: 100%;
    background-image: url('~@/assets/images/intro-img.png');
    background-position: bottom;
    background-size: cover;

    &__caption {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-transform: uppercase;
      color: white;

      p {
        font-family: $hoves;
        line-height: 120%;
        font-size: 54px;
        font-weight: 400;
        text-align: center;
        max-width: 1200px;

        @media(max-width: 1200px){
          font-weight: 500;
          padding-left: 65px;
          padding-right: 65px;
        }

        @media(max-width: 900px){
          font-size: 30px;
          padding-left: 10px;
          padding-right: 10px;
        }

        @media(max-width: 450px){
          padding-left: 15px;
          padding-right: 15px;
        }
      }
    }
  }
}
</style>
