<template>
  <footer class="footer">
    <div class="">
      <h4>наши партнеры</h4>

      <div class="footer__partners-wrapper">
        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/bet-icon.png" />
        </b-col>

        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/pik-icon.svg" />
        </b-col>

        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/bml-icon.png" />
        </b-col>

        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/solgar-icon.svg" />
        </b-col>

        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/vtb-icon.svg" />
        </b-col>

        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/pik-icon.svg" />
        </b-col>

        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/bml-icon.png" />
        </b-col>

        <b-col class="partner-logo"
               xl="3"
               lg="3"
               md="3"
        >
          <img src="@/assets/icons/solgar-icon.svg" />
        </b-col>
      </div>

      <nav class="footer__navigation-menu">
        <b-col class="menu-nav"
               xl="6"
               lg=""
               md="12">
          <div class="">
            <h4 class="mb-20">футбольный клуб</h4>

            <div class="menu-item">Новости</div>

            <div class="menu-item">Команды</div>

            <div class="menu-item">Матчи</div>

            <div class="menu-item">Динамо ТВ</div>

            <div class="menu-item">Клуб</div>

            <div class="menu-item">Билеты</div>

            <div class="menu-item">Магазин</div>
          </div>

          <div class="">
            <h4 class="mb-20">мы в соцсетях</h4>

            <div class="menu-item">Facebook</div>

            <div class="menu-item">Вконтакте</div>

            <div class="menu-item">Twitter</div>

            <div class="menu-item">Instagram</div>

            <div class="menu-item">Toutube</div>

            <div class="menu-item">Telegram</div>
          </div>

          <div class="">
            <h4 class="mb-20">наши проекты</h4>

            <div class="menu-item">Академия</div>

            <div class="menu-item">Ветераны</div>

            <div class="menu-item">Программа лояльности</div>

            <div class="mobile-display">
              <h4>новостная рассылка</h4>

              <div class="position-relative clickable-item">
                <b-form-input :type="email"
                              class="email-input"
                              placeholder="Email address"
                >
                </b-form-input>

                <img src="@/assets/icons/arrow-right-white.svg"
                     class="input-icon">
               </div>
             </div>
          </div>
        </b-col>

        <b-col class="menu-mailing lg-hidden"
               xl="6"
               lg="6"
               md="12">
           <h4>новостная рассылка</h4>

           <div class="position-relative clickable-item">
             <b-form-input :type="email"
                           class="email-input"
                           placeholder="Email address"
             >
             </b-form-input>

             <img src="@/assets/icons/arrow-right-white.svg"
                  class="input-icon">
            </div>
        </b-col>
      </nav>

      <div class="footer__copyright-section">
        <div>
          © 1923—2020 ФК «Динамо-Москва». <br>
          Все права защищены.
        </div>

        <div class="d-flex align-items-center">
          <p class="copyright-text">Design by Charmer</p>

          <p class="copyright-text">Developed by Func.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterRegion',

  computed: {
  },

  methods: {
  },
}
</script>

<style lang="scss" scoped>
.footer {
  color: white;
  margin-top: 80px;
  background-color: $primary-blue;
  font-family: $hoves;
  padding-left: 15px;
  padding-right: 25px;
  padding-bottom: 20px;
  padding-top: 40px;

  &__partners-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    border: 1px solid #0F6DC2;
    border-left: none;
    border-right: none;
  }

  @media(max-width: 768px){
    padding-right: 15px;
    padding-left: 15px;
  }

  &__navigation-menu {
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 480px){
      margin-top: 20px;
    }

    .menu-nav {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      @media(max-width: 1199px){
        justify-content: flex-start;

        div {
          margin-right: 50px;
          min-width:  190px;

          &:last-child {
            margin-right: 0;
            max-width: none;
            width: fill;
          }
        }
      }

      @media(max-width: 800px){
        div {
          margin-right: 30px;
          width: 130px !important;
          min-width: 130px !important;
        }
      }

      @media(max-width: 480px){
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .menu-item {
        @include clickable-item;
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
        margin-bottom: 5px;
        width: fit-content;

        &:last-child {
          margin-bottom: none;
        }

        @media(max-width: 480px){
          margin-bottom: 10px;
        }
      }
    }
  }

  &__copyright-section {
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;

    @media(max-width: 480px){
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      div {
        display: block !important;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .copyright-text {
      max-width: 200px;
      margin-left: 40px;
      margin-bottom: 0;

      @media(max-width: 1199px){
        width: auto;
        max-width: 400px;
      }

      @media(max-width: 480px){
        margin-left: 0px;
      }
    }
  }
}

.menu-mailing {
  max-width: 440px;

  @media(max-width: 800px){
    margin-top: 30px;
    width: 100%;
    max-width: none;
  }

  @media(max-width: 480px){
    margin-top: 10px;
  }
}

.partner-logo {
  height: 120px;
  border-bottom: 1px solid #0F6DC2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #0F6DC2;

  &:nth-child(4n) {
  border-right: none;
  }

  @media(max-width: 768px){
    width: 33%;

    &:nth-child(3n) {
    border-right: none;
    }

    &:nth-child(4n) {
    border-right: 1px solid #0F6DC2;
    }
  }

  @media(max-width: 480px){
    width: 50%;

    &:nth-child(even) {
    border-right: none !important;
    }

    &:nth-child(3n) {
    border-right: 1px solid #0F6DC2;
    }
  }
}

h4 {
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-transform: uppercase;
  line-height: 20px;
  margin-bottom: 20px;

  @media(max-width: 800px){
    font-size: 12px;
  }

  @media(max-width: 480px){
    margin-top: 20px;
  }
}

.lg-hidden {
  display: block;

  @media(max-width: 1200px){
    display: none;
  }

  @media(max-width: 800px){
    display: block;
  }
}

.mobile-display {
  display: none;
  margin-top: 40px;

  @media(max-width: 1199px){
    display: block;
  }

  @media(max-width: 800px){
    display: none;
  }
}
</style>
