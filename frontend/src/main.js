import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import axios from "axios";

const app = createApp(App);

app.use(router);
app.use(store);
app.use({
  install: (app) => {
    app.config.globalProperties.$axios = axios.create({
      baseURL: "https://uni-group.herokuapp.com",
    });
  },
});
app.mount("#app");

// Slots
import BaseCard from "@/components/ui/BaseCard.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import UniTag from "@/components/ui/UniTag.vue";
import StatCard from "@/components/ui/StatCard.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("uni-tag", UniTag);
app.component("stat-card", StatCard);
app.component("base-spinner", BaseSpinner);
