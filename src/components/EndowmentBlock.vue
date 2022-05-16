<template>
  <article class="endownment-block-wrapper">
    <h1 class="w-100 d-flex align-items-center justify-content-between">
      Эндаумент-фонд

      <img src="@/assets/icons/arrow-right-white.svg" />
    </h1>

    <div class="endownment-block">
      <b-col class="mr-20"
             xl=""
             lg=""
             md=""
      >
        <div class="framer">
          <iframe src="https://www.youtube-nocookie.com/embed/xr-aBvMKDZo?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Ffcdm.ru%2Fclub%2Fendowment&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Ffcdm.ru&widgetid=1"
                  border="none"
                  width=""
                  height=""
                  allowfullscreen
                  class="iframe">
          </iframe>
        </div>
      </b-col>

      <b-col class="border-top d-flex flex-column justify-content-between pr-20"
             xl=""
             lg=""
             md=""
      >
        <p class="endownment-block-wrapper__text">ФК Динамо ставит перед собой задачу создания футбольной Академии
           мирового уровня для воспитания новых звезд российского футбола.
        </p>

        <b-button variant="outline-primary"
                  class="basic-hover">Стать дарителем</b-button>
      </b-col>
    </div>
  </article>
</template>

<script>
export default {
  name: 'EndownmentBlock',

  computed: {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
.endownment-block-wrapper {
  background-color: $primary-blue;
  height: fit-content;
  padding: 20px;
  border-radius: 12px;
  margin-top: 80px;

  @media(max-width: 999px){
    padding: 15px;
    margin-top: 60px;
  }

  .endownment-block {
    display: flex;

    @media(max-width: 1440px){
      display: flex;
      flex-direction: column;
    }
  }

  &__text {
    color: white;
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
      max-width: none !important;
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
      margin-top: 32px;
    }
  }
}

h1 {
  color: white;
  margin-bottom: 15px;

  @media(max-width: 1440px){
    padding: 0;
    font-size: 36px;
  }

  @media(max-width: 800px){
    font-size: 28px;
  }
}

.border-top {
  border-color:  #A9C6E0 !important;

  @media(max-width: 1440px){
    border: none !important;
  }
}

.btn-outline-primary {
  background-color: white !important;
  color: $primary-blue !important;
  width: 100% !important;
  max-width: none !important;
  font-size: 32px !important;
  font-weight: 400px !important;
  height: 116px !important;
  transition: all 2 !important;

  @media(max-width: 800px){
    font-size: 20px !important;
    height: 72px !important;
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
		background-color: darken($primary-blue, 0%);
		transition: all .5s;
		border-radius: 56px !important;
		z-index: -1;
    transition: all 2 !important;
	}

	&:hover {
    opacity: 0.9;
    background-color: $primary-blue !important;
    color: white !important;
    border-color: white !important;
    transition: all 2 !important;

		&:before {
			width: 100%;
		}
	}

  &:active,
  &:focus {
    box-shadow: none !important;
    border-color: transparent !important;
    background-color: white !important;
    color: $primary-blue !important;
  }
}

.basic-hover {
  cursor: pointer !important;
}

.pr-20 {
  padding-right: 20px !important;

  @media(max-width: 1440px){
    padding: 0px !important;
  }
}
</style>
