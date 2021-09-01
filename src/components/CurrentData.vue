<template>
  <div class="current-data">
    <div v-if="loading">
      <RowValue />
      <SomeValue />
    </div>
    <button @click="currentValue()">Get weather</button>
  </div>
</template>

<script>
  import RowValue from "../components/RowValue.vue";
  import SomeValue from "../components/SomeValue.vue";
  export default {
    name: "CurrentData",
    components: {
      RowValue,
      SomeValue,
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
              this.$store.commit("setWeatherValue", value);
            },
            (response) => {
              console.log(response);
            }
          );
      },
    },
    computed: {
      loading() {
        if (this.$store.state.weatherValues.length === 0) {
          return false;
        } else {
          return true;
        }
      },
    },
  };
</script>

<style></style>
