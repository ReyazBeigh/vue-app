<template>
  <h1>Oops!</h1>
  <h3>Sorry, The {{ resource }} you are looking is not found!</h3>
  Click <router-link :to="{ name: 'Events' }">Here</router-link> to go back to
  home page
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
};
</script>
