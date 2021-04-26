import { createApp, reactive } from "vue";
import App from "./App.vue";
import store from "./vuexStore";
import router from "./router";
import "nprogress/nprogress.css";

const GlobalStorage = reactive({ flashMessage: "" });

createApp(App)
  .use(router)
  .use(store)
  .provide("GlobalStorage", GlobalStorage)
  .mount("#app");