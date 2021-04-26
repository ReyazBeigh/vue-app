import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    UNSET_USER_DATA(){
      //state.user=null;
      localStorage.removeItem("user");
      /*axios.defaults.headers.common[
        "Authorization"
      ] = null;
      */
      location.reload()
    },
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
  },
  actions: {
    logout({commit}){
      commit("UNSET_USER_DATA");
    },
    register({ commit }, user) {
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": 86400,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      return axios
        .post("//localhost:8001/mock.php?request=register", user, headers)
        .then((response) => {
          commit("SET_USER_DATA", response.data);
        })
    },

    login({ commit }, user) {
      const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Max-Age": 86400,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      console.log(headers);
      return axios
        .post("//localhost:8001/mock.php?request=login", user, headers)
        .then((response) => {
          console.log("Response is", response);
          commit("SET_USER_DATA", response.data);
        })
        .catch((error) => {
          console.log("There is an error", error);
        });
    },
  },
  getters:{
    loggedIn(state){
      console.log(state);
      return !!state.user //!! returs truthfullness of the statement 
    }
  },
  modules: {},
});
