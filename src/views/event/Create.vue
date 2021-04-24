<template>
  <h1>Create an event</h1>
  <div class="form-container">
    <form @submit.prevent="createEvent">
      <label>Select Category:</label>
      <select v-model="event.category">
        <option
          v-for="(category, index) in categories"
          :key="index"
          :value="category"
        >
          {{ category }}
        </option>
      </select>

      <h3>Name and description of your event</h3>
      <label>Title:</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label>Description:</label>
      <textarea
        v-model="event.description"
        placeholder="Description"
      ></textarea>

      <h3>Where is your event</h3>
      <label>Location:</label>
      <input v-model="event.location" type="text" placeholder="Location" />

      <h3>When is your event</h3>
      <label>Date:</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>Time:</label>
      <input v-model="event.time" type="text" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categories: [
        "sustainability",
        "nature",
        "animal welfare",
        "housing",
        "education",
        "food",
        "community",
      ],
      event: {
        time: null,
        date: null,
        location: null,
        title: null,
        description: null,
        category: null,
        id: null,
        organizer: null,
      },
    };
  },
  methods: {
    createEvent() {
      this.event.id = uuidv4();
      this.event.organizer = this.$store.state.user;
      console.log(this.event);
    },
  },
};
</script>
