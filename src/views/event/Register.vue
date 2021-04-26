<template>
  <div>
    <h1>Register Here for {{ event.name }}</h1>
    <button @click="register">Register</button>
  </div>
</template>

<script>
export default {
  inject: ["GlobalStorage"],
  props: {
    event: Object,
  },
  methods: {
    register() {
      this.GlobalStorage.flashMessage =
        "You are Sucessfully Registered for " + this.event.title;
      setTimeout(() => {
        this.GlobalStorage.flashMessage = "";
      }, 3000);
      this.$router.replace({
        name: "EventDetails",
        id: this.event.id,
      });
    },
  },
};
</script>
