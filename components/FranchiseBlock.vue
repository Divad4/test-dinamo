<template>
  <article class="franchise-block-wrapper">
    <h1 class="w-100 d-flex align-items-center justify-content-between">
      ФРАНШИЗА футбольных школ

      <img src="@/assets/icons/arrow-right-blue.svg" />
    </h1>

    <div class="franchise-block">
      <b-col class="border-top d-flex flex-column justify-content-between"
             xl=""
             lg=""
             md=""
      >
        <p class="franchise-block-wrapper__text">
          «Динамо» всегда славилось системой подготовки футболистов, —
          говорит директор футбольной академии имени Л. И. Яшина
          Александр Кузнецов.
        </p>

        <b-button variant="outline-primary"
                  class="basic-hover">Оставить заявку</b-button>
      </b-col>

      <b-col class="map-wrapper w-100 position-relative"
             xl=""
             lg=""
             md=""
      >
        <img src="@/assets/images/map-img.png"
             class="map" />

        <div class="position-absolute d-flex align-items-center buttons-group">
          <b-button variant="outline-primary"
                    class="basic-hover active">все</b-button>

          <b-button variant="outline-primary"
                    class="basic-hover">франшизы</b-button>

          <b-button variant="outline-primary"
                    class="basic-hover">филиалы</b-button>
        </div>
      </b-col>
    </div>
  </article>
</template>

<script>
export default {
  name: 'FranchiseBlock',

  computed: {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
.franchise-block-wrapper {
  height: fit-content;
  padding: 20px;
  margin-top: 80px;

  @media(max-width: 999px){
    padding: 15px;
    margin-top: 60px;
  }

  .franchise-block {
    display: flex;

    @media(max-width: 1440px){
      display: flex;
      flex-direction: column;
    }
  }

  &__text {
    color: $primary-blue;
    font-size: 36px;
    font-weight: 400;
    line-height: 50px;
    margin-top: 39px;
    margin-bottom: 72px;
    max-width: 800px;

    @media(max-width: 1600px){
      max-width: 650px;
    }

    @media(max-width: 1440px){
      width: 100%;
      margin-bottom: 60px;
      max-width: none;
    }

    @media(max-width: 999px){
      max-width: 900px;
    }

    @media(max-width: 800px){
      line-height: 28px;
      font-size: 20px;
    }

    @media(max-width: 480px){
      line-height: 25px;
      font-size: 18px;
      margin-bottom: 40px;
    }
  }
}

h1 {
  color: $primary-blue;

  @media(max-width: 1440px){
    padding: 0;
    font-size: 36px;
  }

  @media(max-width: 800px){
    font-size: 28px;
  }

  @media(max-width: 480px){
    align-items: flex-start !important;
  }
}

.border-top {
  border-color:  #A9C6E0 !important;

  @media(max-width: 1440px){
    border: none !important;
  }
}

.btn-outline-primary {
  background-color: $primary-blue !important;
  color: white !important;
  width: 100% !important;
  max-width: none !important;
  font-size: 32px !important;
  font-weight: 400px !important;
  height: 116px !important;

  @media(max-width: 1440px){
    margin-bottom: 60px;
  }

  @media(max-width: 800px){
    font-size: 20px !important;
    height: 72px !important;
    margin-bottom: 28px;
  }

  @media(max-width: 480px){
    font-size: 18px !important;
  }

	&:before {
		content: '';
		position: relative;
    border-color: $primary-blue !important;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		transition: all .5s;
		border-radius: 56px !important;
		z-index: -1;
	}

	&:hover {
    opacity: 0.8;
    background-color: white !important;
    color: $primary-blue !important;
    border-color: $primary-blue !important;

		&:before {
			width: 100%;
		}
	}

  &:active,
  &:focus {
    box-shadow: none !important;
    border-color: transparent !important;
    background-color: $primary-blue !important;
    color: white !important;
  }
}

.map-wrapper {
  .map {
    width: 100%;
    max-height: 540px;
    padding-left: 20px;

    @media(max-width: 1440px){
      padding-left: 0;
    }

    @media(max-width: 600px){
      max-height: 270px;
    }
  }

  .buttons-group {
    right: 25px;
    bottom: 30px;

    .btn-outline-primary {
      background-color: white !important;
      color: $primary-blue !important;
      width: auto !important;
      max-width: none !important;
      font-size: 12px !important;
      font-weight: 500px !important;
      height: 40px !important;
      padding: 20px;
      display: flex;
      border-color: $primary-blue !important;
      align-items: center;
      justify-content: center;
      margin-right: 5px;
      text-transform: uppercase;

      &:last-child {
        margin-right: 0;
      }

      &:active,
      &:focus {
        box-shadow: none !important;
        border-color: transparent !important;
        background-color: $primary-blue !important;
        color: white !important;
      }

      @media(max-width: 1440px){
        margin-bottom: 0px;
      }

      @media(max-width: 800px){
        font-size: 12px !important;
        height: 40px !important;
        margin-bottom: 0px;
      }

      @media(max-width: 480px){
        font-size: 10px !important;
      }
    }
  }
}

.basic-hover {
  cursor: pointer !important;
}
</style>
