<template>
  <div>
    <div class="weather-block" v-if="$store.state.hourlyWeather.length !== 0">
      <table>
        <tr>
          <th>Timezone</th>
          <th>Date</th>
          <th>Current</th>
          <th>Hourly</th>
        </tr>
        <tr v-for="(i, index) in $store.state.hourlyWeather" :key="index">
          <td>{{ i.body.timezone }}</td>
          <td>{{ i.date }}</td>
          <td>{{ i.body.current.temp }}</td>
          <td>{{ new Date(i.body.current.dt * 1000) }}</td>
        </tr>
      </table>
    </div>
    <button @click="hourlyValue()">Hourly value</button>
  </div>
</template>

<script>
  export default {
    name: "HourlyWeather",
    methods: {
      hourlyValue() {
        this.$http
          .get(
            "http://localhost:8080/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=e27e11e0f84ba08de34ebcccbdc01163"
          )
          .then(
            (response) => {
              const dateValue = new Date();
              const value = {
                date: dateValue,
                body: response.body,
              };
              this.$store.commit("setHourlyWeather", value);
            },
            (response) => {
              console.log(response);
            }
          );
      },
    },
  };
</script>

<style scoped>
  table {
    width: 80%;
  }
  th,
  td {
    border: 1px solid #000;
    border-collapse: collapse;
    padding: 10px;
  }
  .weather-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
</style>
