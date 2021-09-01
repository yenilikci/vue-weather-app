<template>
  <div>
    <div class="weather-block" v-if="$store.state.hourlyWeather.length !== 0">
      <table>
        <tr>
          <th>Date</th>
          <th
            v-for="(i, index) in $store.state.hourlyWeather[0].body.hourly"
            :key="index"
          >
            {{ new Date(i.dt * 1000) }}
          </th>
        </tr>

        <tr v-for="(i, index) in $store.state.hourlyWeather" :key="index">
          <td>Temperature (Kelvin)</td>
          <td
            v-for="(i, index) in $store.state.hourlyWeather[0].body.hourly"
            :key="index"
          >
            {{ Math.round(i.temp - 273.15) }}
          </td>
        </tr>

        <tr v-for="(i, index) in $store.state.hourlyWeather" :key="index">
          <td>Feels Temperature (Kelvin)</td>
          <td
            v-for="(i, index) in $store.state.hourlyWeather[0].body.hourly"
            :key="index"
          >
            {{ Math.round(i.feels_like - 273.15) }}
          </td>
        </tr>

        <tr v-for="(i, index) in $store.state.hourlyWeather" :key="index">
          <td>Pressure (hPa)</td>
          <td
            v-for="(i, index) in $store.state.hourlyWeather[0].body.hourly"
            :key="index"
          >
            {{ i.pressure }}
          </td>
        </tr>

        <tr v-for="(i, index) in $store.state.hourlyWeather" :key="index">
          <td>Humidity (%)</td>
          <td
            v-for="(i, index) in $store.state.hourlyWeather[0].body.hourly"
            :key="index"
          >
            {{ i.humidity }}
          </td>
        </tr>

        <tr v-for="(i, index) in $store.state.hourlyWeather" :key="index">
          <td>Wind Speed (m/s)</td>
          <td
            v-for="(i, index) in $store.state.hourlyWeather[0].body.hourly"
            :key="index"
          >
            {{ i.wind_speed }}
          </td>
        </tr>
      </table>
    </div>
    <span class="num">2)</span>
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
            "http://localhost:8080/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=e27e11e0f84ba08de34ebcccbdc01163"
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
    align-items: flex-start;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  button {
    margin: 10px !important;
    padding: 10px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fff;
    color: rgb(53, 53, 53);
    border-radius: 10px;
    margin: 0px 10px;
    border: 2px solid rgba(53, 53, 53);
  }
  .num {
    font-size: 25px;
    font-family: monospace;
  }
</style>
