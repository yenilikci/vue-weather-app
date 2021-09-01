<template>
  <div>
    <div class="weather-block">
      <table>
        <tr>
          <th>Date</th>
          <th>Main</th>
          <th>Description</th>
          <th>Icon</th>
        </tr>
        <tr v-for="(i, index) in item" :key="index">
          <td>{{ i.date }}</td>
          <td>{{ i.body.weather[0].main }}</td>
          <td>{{ i.body.weather[0].description }}</td>
          <td>
            <img
              :src="
                `http://openweathermap.org/img/wn/${i.body.weather[0].icon}@2x.png`
              "
              class="icon-class"
            />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RowValue",
    props: {
      item: Array,
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
  }
  .icon-class {
    width: 60px;
    height: 60px;
  }
</style>
