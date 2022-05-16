<template>
  <b-col class="d-flex flex-column justify-content-between"
         xl="6"
         lg="12"
         md="12"
         sm="12"
         xs="12"
  >
    <div>
      <h1 class="w-100 d-flex align-items-center justify-content-between">
        таблицы

        <img src="@/assets/icons/arrow-right-blue.svg" />
      </h1>

      <div class="table-slider d-flex align-items-center justify-content-between">
        <img src="@/assets/icons/chevron-left.svg" />

        <p>М-ЛИГА, 2021-2022</p>

        <img src="@/assets/icons/chevron-right.svg" />
      </div>

      <div class="pl-20 pr-20">
        <b-table :items="items"
                 hover
                 class="mobile-hidden"
        >
        </b-table>

        <b-table :items="mobileItems"
                 hover
                 class="mobile-display"
        >
        </b-table>
      </div>
    </div>

    <div class="d-flex justify-content-end w-100">
      <p class="table-button">
        полная таблица

        <img src="@/assets/icons/arrow-right-blue.svg" />
      </p>
    </div>
  </b-col>
</template>

<script>
export default {
  name: 'Table',

  data() {
    return {
      items: [
        { Команда: '01 ЦСКА', И: '28', В: '23', Н: '4', П: '1', О: '35' },
        { Команда: '02 Спартак', И: '28', В: '28', Н: '28', П: '28', О: '28' },
        { Команда: '03 Динамо', И: '28', В: '20', Н: '3', П: '5', О: '28' },
        { Команда: '04 Крылья Советов', И: '28', В: '28', Н: '28', П: '28', О: '28' },
        { Команда: '05 Рубин', И: '28', В: '28', Н: '8', П: '8', О: '28' }
      ],

      mobileItems: [
        { Команда: '01 ЦСКА', Н: '4', 'З-П': '38-28', О: '35' },
        { Команда: '01 Спартак', Н: '4', 'З-П': '24-22', О: '45' },
        { Команда: '01 Динамо', Н: '4', 'З-П': '38-28', О: '28' },
        { Команда: '01 Крылья Советов', Н: '4', 'З-П': '39-36', О: '35' },
        { Команда: '01 Рубин', Н: '4', 'З-П': '38-28', О: '35' },
      ],
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
  border-top: 1px solid #EAF5FF;
  border-bottom: 1px solid #EAF5FF;
  margin-bottom: 70px;

  @media(max-width: 700px){
    padding-left: 19px;
    padding-right: 19px;
  }

  p {
    font-size: 26px;
    line-height: 30px;
    color: $primary-blue;
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

h1 {
  font-weight: 500;
  font-size: 56px;

  @media(max-width: 700px){
    font-size: 28px;
  }
}

h1, p {
  margin-bottom: 0;
}

.table-button {
  @include clickable-item;

  font-size: 14px;
  color: $primary-blue;
  text-transform: uppercase;
  display: flex;
  max-width: 167px;
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

.mobile-hidden {
  @media(max-width: 700px){
    display: none !important;
  }
}

.mobile-display {
  display: none !important;

  @media(max-width: 699px){
    display: table !important;
  }
}

.pr-20 {
  padding-right: 20px !important;

  @media(max-width: 700px){
    padding-right: 15px !important;
  }
}

.pl-20 {
  padding-left: 20px;

  @media(max-width: 700px){
    padding-left: 15px !important;
  }
}
</style>
