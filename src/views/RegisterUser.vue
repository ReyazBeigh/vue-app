<template>
  <h1>Register to create Events</h1>
  <div class="form-container">
    <form @submit.prevent="register">
      <label for="name"> Name: </label>
      <input v-model="name" type="text" name="name" value />

      <label for="email"> Email: </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password"> Password: </label>
      <input v-model="password" type="password" name value />
      <label for="password_confirmation"> Confirm Password: </label>
      <input v-model="password_confirmation" type="password" name value />

      <button type="submit" name="button">Register</button>
      <p>

       Already a User? Click <router-link :to="{name:'LoginUser'}">
          here 
      </router-link>to Login
       </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          this.$router.push({ name: "Events" });
        });
    },
  },
};
</script>

<style></style>
