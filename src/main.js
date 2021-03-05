import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/main.css";
require('bootstrap/dist/css/bootstrap.min.css')
import VueApollo from "vue-apollo";

import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.use(VueApollo);
Vue.config.productionTip = false;

const getHeaders = () => {
  const headers = {};
  const token = "60e8e7f765a8abb32a3a6e579d459cc93bf171f2";
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }
  return headers;
};

// Create an http link:
const link = new HttpLink({
  uri: "https://api.github.com/graphql",
  fetch,
  headers: getHeaders()
});
export const defaultClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient
})

new Vue({
  router,
  apolloProvider,
  store,
  render: h => h(App)
}).$mount("#app");
