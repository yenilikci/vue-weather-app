import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    weatherValues: [],
  },
  mutations: {
    setWeatherValue(state, payload) {
      state.weatherValues.unshift(payload);
    },
  },
});

export default store;
