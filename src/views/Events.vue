<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <router-link
        id="page-prev"
        :to="{ name: 'Events', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev
      </router-link>
      <router-link
        v-for="cpage in totalPages"
        :key="cpage"
        :to="{ name: 'Events', query: { page: cpage } }"
        rel="new"
        class="credit"
        >{{ cpage }}
      </router-link>
      <router-link
        id="page-next"
        :to="{ name: 'Events', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        >Next &#62;
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";
import NProgress from "nprogress";
export default {
  props: ["page"],
  name: "Events",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      toalEvents: 0,
      totalPages: 0,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start();

    EventService.getEvents(2, routeTo.query.page || 1)
      .then((response) => {
        next((comp) => {
          comp.events = response.data;
          comp.toalEvents = parseInt(response.headers["x-total-count"]);

          comp.totalPages = Math.ceil(comp.toalEvents / 2);
        });
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          next({ name: "404Resource" });
        } else {
          next({ name: "NetworkError" });
        }
      })
      .finally(() => {
        NProgress.done();
      });
  },
  beforeRouteUpdate(routeTo) {
    NProgress.start();
    this.events = null;

    EventService.getEvents(2, routeTo.query.page || 1)
      .then((response) => {
        this.events = response.data;
        console.log(response.headers);
        this.toalEvents = parseInt(response.headers["x-total-count"]);

        this.totalPages = Math.ceil(this.toalEvents / 2);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          return { name: "404Resource" };
        } else {
          return { name: "NetworkError" };
        }
      })
      .finally(() => {
        NProgress.done();
      });
  },
  computed: {
    hasNextPage() {
      return this.page < this.totalPages ? true : false;
    },
  },
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
.credit {
  background-color: azure;
}
</style>
