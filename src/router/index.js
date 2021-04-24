import { createRouter, createWebHistory } from "vue-router";
import Events from "../views/Events.vue";
import EventLayout from "../views/event/Layout.vue";
import EventCreate from "../views/event/Create.vue";
import EventDetails from "../views/event/Details.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";
import About from "../views/About.vue";
import NotFoundPage from "../views/errors/NotFound.vue";
import NetworkError from "../views/errors/NetworkError.vue";

const routes = [
  {
    path: "/",
    name: "Events",
    component: Events,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/create/event",
    name: "CreateEvent",
    component: EventCreate,
  },
  {
    path: "/event/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "/event/:id/register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "/event/:id/edit",
        name: "EventEdit",

        component: EventEdit,
      },
    ],
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundPage,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
