<template>
  <div>
    <div class="weather-block">
      <table>
        <tr>
          <th>Date</th>
          <th>Temperature (Kelvin)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
          <th>Temperature Max (Kelvin)</th>
          <th>Temperature Min (Kelvin)</th>
          <th>Wind Speed (meter/sec)</th>
          <th>Wind Degree</th>
        </tr>
        <tr v-for="(i, index) in $store.state.weatherValues" :key="index">
          <td>{{ i.date }}</td>
          <td>{{ i.body.main.temp }}</td>
          <td>{{ i.body.main.pressure }}</td>
          <td>{{ i.body.main.humidity }}</td>
          <td>{{ i.body.main.temp_max }}</td>
          <td>{{ i.body.main.temp_min }}</td>
          <td>{{ i.body.wind.speed }}</td>
          <td>{{ i.body.wind.deg }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SomeValue",
  };
</script>

<style>
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
