import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: function() {
      return {
        message: "Hello Vuex!"
      };
    },
    mutations: {
      updateMessage(state, payload) {
        state.message = payload;
      }
    }
  });
};

export default createStore;
