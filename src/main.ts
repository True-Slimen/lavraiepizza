import { createApp } from "vue";
import "@/assets/styles/style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "@/router/router";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
