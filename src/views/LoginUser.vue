<template>
  <h1>Login to create Events</h1>
  <div class="form-container">
    <form @submit.prevent="login">
      <label for="email"> Email: </label>
      <input v-model="email" type="email" name value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Login</button>
       <p>

       New User? Click <router-link :to="{name:'RegisterUser'}">
          here 
      </router-link>to Register
       </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "Events" });
        });
    },
  },
};
</script>
