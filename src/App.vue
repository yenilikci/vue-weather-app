<template>
  <div id="app">
    <CurrentData />
    <HourlyWeather />
    <MultiData />
  </div>
</template>

<script>
  import CurrentData from "./components/CurrentData.vue";
  import HourlyWeather from "./components/HourlyWeather.vue";
  import MultiData from "./components/MultiData.vue";

  export default {
    name: "App",
    components: {
      CurrentData,
      HourlyWeather,
      MultiData,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
