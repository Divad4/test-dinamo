<template>
  <b-col class="bg-color-primary d-flex flex-column justify-content-between"
         xl="6"
         lg="12"
         md="12"
         sm="12"
         xs="12"
  >
    <div>
      <h1 class="w-100 d-flex align-items-center justify-content-between">
        игроки

        <img src="@/assets/icons/arrow-right-white.svg" />
      </h1>

      <div class="table-slider d-flex align-items-center justify-content-between">
        <img src="@/assets/icons/chevron-left-white.svg" />

        <p>М-ЛИГА, 2021-2022</p>

        <img src="@/assets/icons/chevron-right-white.svg"
             />
      </div>

      <div class="">
        <b-tabs content-class="">
          <b-tab title="БОМБАРДИРЫ" active>
            <b-card-text class="mt-40 p-20 mobile-hidden">
              <b-row class="m-0 pb-10 border-bottom">
                <b-col class="text-uppercase fsize-12"
                       xl=""
                       lg=""
                       md="">
                  игрок
                </b-col>

                <b-col class="text-uppercase text-right fsize-12"
                       xl="2"
                       lg="2"
                       md="2">
                  голы
                </b-col>

                <b-col class="text-uppercase text-right fsize-12"
                       xl="2"
                       lg="2"
                       md="2">
                  матчи
                </b-col>
              </b-row>

              <b-row class="m-0 pt-10 pb-10 border-bottom">
                <b-col class="text-uppercase fsize-12 d-flex"
                       xl=""
                       lg=""
                       md="">
                  <img src="@/assets/images/player-img.png"
                       class="mr-15" />

                  <div class="d-flex flex-column justify-content-between">
                    <p class="player-name">Максимилиан Филлипп</p>

                    <p class="player-number">33</p>
                  </div>
                </b-col>

                <b-col class="text-uppercase text-right player-numbers"
                       xl="2"
                       lg="2"
                       md="2">
                  28
                </b-col>

                <b-col class="text-uppercase text-right player-numbers"
                       xl="2"
                       lg="2"
                       md="2">
                  28
                </b-col>
              </b-row>

              <b-row class="m-0 pt-10 pb-10 border-bottom">
                <b-col class="text-uppercase fsize-12 d-flex"
                       xl=""
                       lg=""
                       md="">
                  <img src="@/assets/images/player-img.png"
                       class="mr-15" />

                  <div class="d-flex flex-column justify-content-between">
                    <p class="player-name">Максимилиан Филлипп</p>

                    <p class="player-number">33</p>
                  </div>
                </b-col>

                <b-col class="text-uppercase text-right player-numbers"
                       xl="2"
                       lg="2"
                       md="2">
                  28
                </b-col>

                <b-col class="text-uppercase text-right player-numbers"
                       xl="2"
                       lg="2"
                       md="2">
                  28
                </b-col>
              </b-row>

              <b-row class="m-0 pt-10 pb-10 border-bottom">
                <b-col class="text-uppercase fsize-12 d-flex"
                       xl=""
                       lg=""
                       md="">
                  <img src="@/assets/images/player-img.png"
                       class="mr-15" />

                  <div class="d-flex flex-column justify-content-between">
                    <p class="player-name">Максимилиан Филлипп</p>

                    <p class="player-number">33</p>
                  </div>
                </b-col>

                <b-col class="text-uppercase text-right player-numbers"
                       xl="2"
                       lg="2"
                       md="2">
                  28
                </b-col>

                <b-col class="text-uppercase text-right player-numbers"
                       xl="2"
                       lg="2"
                       md="2">
                  28
                </b-col>
              </b-row>
            </b-card-text>

            <b-card-text class="mt-40 p-20 d-flex content-players-wrapper mobile-display">
              <div class="player-card d-flex">
                <div class="position-relative w-fit-content h-100">
                  <img src="@/assets/images/player-img.png"
                       class="h-100" />

                  <div class="card-badge">33</div>
                </div>

                <div class="ml-12 d-flex flex-column justify-content-between">
                  <p class="player-name">Бессмертный Станислав</p>

                  <div class="d-flex">
                    <div class="player-info">
                      Голы

                      <p class="player-numbers">28</p>
                    </div>

                    <div class="player-info">
                      матчи

                      <p class="player-numbers">28</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="player-card d-flex">
                <div class="position-relative w-fit-content h-100">
                  <img src="@/assets/images/player-img.png"
                       class="h-100" />

                  <div class="card-badge">33</div>
                </div>

                <div class="ml-12 d-flex flex-column justify-content-between">
                  <p class="player-name">Бессмертный Станислав</p>

                  <div class="d-flex">
                    <div class="player-info">
                      Голы

                      <p class="player-numbers">28</p>
                    </div>

                    <div class="player-info">
                      матчи

                      <p class="player-numbers">28</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="player-card d-flex">
                <div class="position-relative w-fit-content h-100">
                  <img src="@/assets/images/player-img.png"
                       class="h-100" />

                  <div class="card-badge">33</div>
                </div>

                <div class="ml-12 d-flex flex-column justify-content-between">
                  <p class="player-name">Бессмертный Станислав</p>

                  <div class="d-flex">
                    <div class="player-info">
                      Голы

                      <p class="player-numbers">28</p>
                    </div>

                    <div class="player-info">
                      матчи

                      <p class="player-numbers">28</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-card-text>
          </b-tab>

          <b-tab title="АССИСТЕНТЫ">
            <b-card-text class="mt-40 p-20">
              Тут могли бы быть ассистенты
            </b-card-text>
          </b-tab>
        </b-tabs>
      </div>
    </div>

    <div class="d-flex justify-content-end w-100">
      <p class="table-button">
        полная таблица

        <img src="@/assets/icons/arrow-right-white.svg" />
      </p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'Table',

  data() {
    return {
    }
  },

  computed: {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
.table-slider {
  height: 90px;
  padding-left: 33px;
  padding-right: 33px;
  border-top: 1px solid #0F6DC2;
  border-bottom: 1px solid #0F6DC2;

  @media(max-width: 700px){
    padding-left: 19px;
    padding-right: 19px;
  }

  p {
    font-size: 26px;
    line-height: 30px;
    color: white;
    text-transform: uppercase;
    font-weight: 500;

    @media(max-width: 700px){
      font-size: 20px;
    }
  }

  img {
    @include clickable-item;
  }
}

.border-bottom {
  border-color: #0F6DC2 !important;
}

h1 {
  font-weight: 600;
  font-size: 56px;

  @media(max-width: 700px){
    font-size: 28px;
  }
}

h1, p {
  margin-bottom: 0;
  color: white;
}

.table-button {
  @include clickable-item;

  font-size: 14px;
  color: white;
  float: right;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-bottom: 34px;
  margin-right: 22px;

  img {
    width: 14px;
    height: 14px;
    margin-left: 13px;
  }
}

.player-numbers {
  font-size: 48px;
  font-weight: 500;
  line-height: 48px;
}

.player-name {
  font-size: 20px;
  font-weight: 400;
  max-width: 175px;
  line-height: 24px;
  text-transform: none;
}

.player-number {
  font-size: 16px;
  margin-bottom: 0;
}

.content-players-wrapper {
  overflow-x: scroll !important;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none !important;
  }
}

.player-card {
  background-color: white;
  padding: 12px;
  height: 160px;
  width: 240px;
  margin-left: 15px;

  &:first-child {
    margin-left: 0;
  }

  .card-badge {
    background-color: white;
    position: absolute;
    color: $primary-blue;
    font-size: 14px;
    height: 22px;
    width: 27px;
    text-align: center;
    vertical-align: middle !important;
    font-weight: 500;
    right: 10px;
    top: 105px;
  }

  .player-name {
    color: $primary-blue;
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
  }

  .player-info {
    color: $primary-blue;
    font-weight: 600;
    font-size: 10px;
    text-transform: uppercase;
    margin-right: 23px;
  }

  .player-numbers {
    color: $primary-blue;
    font-size: 30px;
    font-weight: 500;
    line-height: 30px;
    margin: 0;
  }
}

.mobile-hidden {
  @media(max-width: 800px){
    display: none;
  }
}

.mobile-display {
  display: none !important;

  @media(max-width: 799px){
    display: flex !important;
  }
}
</style>
