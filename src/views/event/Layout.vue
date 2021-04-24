<template>
  <div>
    <div id="nav-nest">
      <router-link :to="{ name: 'EventDetails' }">Details</router-link>
      <router-link :to="{ name: 'EventRegister' }">Register</router-link>
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>
    <router-view :event="event" v-if="event" />
  </div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  props: ["id"],
  name: "EventLayout",
  data() {
    return {
      event: null,
    };
  },
  created() {
    // lifecycle hook
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          this.$router.push({
            name: "404Resource",
            params: {
              resource: "Event",
            },
          });
        } else {
          this.$router.push({
            name: "NetworkError",
          });
        }
      });
  },
};
</script>

<style scoped>
#nav-nest {
  padding: 30px;
}

#nav-nest a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px;
}

#nav-nest a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
