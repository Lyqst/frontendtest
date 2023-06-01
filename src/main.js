import { createApp } from "vue";
import store from "./store";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiSolidSun, HiSolidMoon } from "oh-vue-icons/icons";

addIcons(HiSolidSun, HiSolidMoon);

const app = createApp(App);

app.use(store);

app.component("v-icon", OhVueIcon);

app.mount("#app");
