import Vue from 'vue';
import Ionic from '@ionic/vue';
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

Vue.use(Ionic);


import VueRouter from "vue-router";

import App from './App.vue';
import PeopleList  from './components/PeopleList.vue';
import PersonDetail  from './components/PersonDetail.vue';

import { loadAllPeople } from "./data-service";

Vue.config.productionTip = false

const routes = [
  {
    path: "/detail/:userId",
    name: "detail",
    component: PersonDetail,
    props: true
  },
  { path: "/", component: PeopleList },
];

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

loadAllPeople().then(() => {
  new Vue({
    render: h => h(App),
    router 
  }).$mount("#app");
});