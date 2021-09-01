<template>
  <div class="multi-data">
    <div class="weather-block" v-if="loading">
      <table>
        <tr>
          <th>TimeZone</th>
          <th>Date</th>
          <th>Main</th>
          <th>Description</th>
          <th>Icon</th>
          <th>Temperature (Kelvin)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        <tr v-for="(i, index) in $store.state.multiCity" :key="index">
          <td>{{ i.body.timezone }}</td>
          <td>{{ i.date }}</td>
          <td>{{ i.body.current.weather[0].main }}</td>
          <td>{{ i.body.current.weather[0].description }}</td>
          <td>
            <img
              :src="
                `http://openweathermap.org/img/wn/${i.body.current.weather[0].icon}@2x.png`
              "
              class="icon-class"
            />
          </td>
          <td>{{ i.body.current.temp }}</td>
          <td>{{ i.body.current.pressure }}</td>
          <td>{{ i.body.current.humidity }}</td>
        </tr>
      </table>
    </div>
    <span class="num">3)</span>
    <select v-model="selectValue" name="citys" id="citys">
      <option value="istanbul">Istanbul</option>
      <option value="izmir">Izmir</option>
      <option value="ankara">Ankara</option>
    </select>
    <button @click="setCityData">Get city data</button>
  </div>
</template>

<script>
  export default {
    name: "MultiData",
    data() {
      return {
        selectValue: "istanbul",
      };
    },
    methods: {
      setCityData() {
        this.$http
          .get(
            `http://localhost:8080/data/2.5/onecall?${this.latLong}&exclude=daily&appid=e27e11e0f84ba08de34ebcccbdc01163`
          )
          .then(
            (response) => {
              const dateValue = new Date();
              const value = {
                date: dateValue,
                body: response.body,
              };
              this.$store.commit("setMultiCity", value);
            },
            (response) => {
              console.log(response);
            }
          );
      },
    },
    computed: {
      latLong() {
        if (this.selectValue === "istanbul") {
          return "lat=41.015137&lon=28.979530";
        } else if (this.selectValue === "izmir") {
          return "lat=38.412726&lon=27.138376";
        } else if (this.selectValue === "ankara") {
          return "lat=39.911652&lon=32.840305";
        } else {
          return "lat=41.015137&lon=28.979530";
        }
      },

      loading() {
        if (this.$store.state.multiCity.length === 0) {
          return false;
        } else {
          return true;
        }
      },
    },
  };
</script>

<style scoped>
  .multi-data {
    padding: 10px;
  }
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
  select {
    margin: 0 10px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: rgb(53, 53, 53);
    color: #fff;
    padding: 10px;
  }
  button {
    padding: 10px;
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #fff;
    color: rgb(53, 53, 53);
    border-radius: 10px;
    border: 2px solid rgba(53, 53, 53);
  }
  .num {
    font-size: 25px;
    font-family: monospace;
  }
</style>
