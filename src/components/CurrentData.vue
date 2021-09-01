<template>
  <div class="current-data">
    <div v-if="loading"><RowValue :item="weatherValues" /></div>
    <button @click="currentValue()">Get weather</button>
  </div>
</template>

<script>
  import RowValue from "../components/RowValue.vue";
  export default {
    name: "CurrentData",
    components: {
      RowValue,
    },
    data() {
      return {
        weatherValues: [],
      };
    },
    methods: {
      currentValue() {
        this.$http
          .get(
            "http://localhost:8080/data/2.5/weather?q=London&appid=e27e11e0f84ba08de34ebcccbdc01163"
          )
          .then(
            (response) => {
              const dateValue = new Date();
              const value = {
                date: dateValue,
                body: response.body,
              };
              this.weatherValues.unshift(value);
            },
            (response) => {
              console.log(response);
            }
          );
      },
    },
    computed: {
      loading() {
        if (this.weatherValues !== []) {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>

<style></style>
