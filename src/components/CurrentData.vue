<template>
  <div>
    <button @click="currentValue()">Get weather</button>
  </div>
</template>

<script>
  export default {
    methods: {
      currentValue() {
        this.$http
          .get(
            "http://localhost:8080/data/2.5/weather?q=London&appid=e27e11e0f84ba08de34ebcccbdc01163"
          )
          .then(
            (response) => {
              console.log(response.body.weather);
            },
            (response) => {
              console.log(response);
            }
          );
      },
    },
  };
</script>

<style></style>
