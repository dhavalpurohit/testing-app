import { createApp } from "vue";
import VueGridLayout from "vue-grid-layout";
import App from "./App.vue";

const app = createApp(App);
app.use(VueGridLayout);
app.mount("#app");
