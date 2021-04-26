<template>
  <div v-if="GlobalStorage.flashMessage" id="flashMessage">
    {{ GlobalStorage.flashMessage }}
  </div>
  <div id="nav">
    <router-link :to="{ name: 'Events' }">Events</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'CreateEvent' }">Create Event</router-link>
    <span v-if="!loggedIn">
      | <router-link :to="{ name: 'LoginUser' }">Login</router-link> |
      <router-link :to="{ name: 'RegisterUser' }">Register</router-link>
    </span>
    <button @click="logout" v-if="loggedIn">Logout</button>
  </div>
  <router-view />
</template>
<script>
import { authComputed } from "./vuexStore/helper";
export default {
  computed: {
    ...authComputed,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user!==null) {
      this.$store.commit("SET_USER_DATA", user);
    }
  },
  inject: ["GlobalStorage"],
};
</script>
<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0em;
  margin: 0em;
}

a:visited {
  color: #2c3e50;
}

.button,
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 2em;
  margin: 0.5em;
  border-radius: 5px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  font-size: 1em;
  color: white;
  border: none;
  outline: none;
}

form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 15em;
  margin-bottom: 2em;
}
form p {
  color: red;
}
input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 2.6em;
  padding: 0.5em;
  margin-bottom: 1em;
  font: 1em "Avenir", Helvetica, sans-serif;
}

h1 {
  margin-top: 0;
}

@keyframes yellowfade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
button {
  align-items: center;
  height: 50px;
  padding: 0 40px;
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s linear;
}
button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
h2 {
  font-size: 40px;
  font-weight: 700;
}
h3 {
  font-size: 25px;
  font-weight: 700;
}
h4 {
  font-size: 20px;
  font-weight: 700;
}
input,
textarea {
  display: block;
  width: 100%;
  height: 30px;
  margin-bottom: 24px;
}
input[type="text"] {
  padding: 0px 10px;
}
input:focus,
textarea:focus {
  border-color: #16c0b0;
  outline: 0;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}
select:focus {
  border-color: #16c0b0;
  outline: 0;
}
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
