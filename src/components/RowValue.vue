<template>
  <div>
    <div class="weather-block">
      <span>{{ item.body.weather[0].main }}</span>
      <span>{{ item.body.weather[0].description }}</span>
      <img
        :src="
          `http://openweathermap.org/img/wn/${item.body.weather[0].icon}@2x.png`
        "
        class="icon-class"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "RowValue",
    props: {
      item: Object,
    },
  };
</script>

<style>
  .weather-block {
    display: flex;
    flex-direction: row;
  }
  .icon-class {
    width: 60px;
    height: 60px;
  }
</style>
