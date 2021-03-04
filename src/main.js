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
  const token = "fb37b08842efae8902a0406a6af54e7991513fba";
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
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

const apolloProvider = new VueApollo({
  defaultClient: client,
})

new Vue({
  router,
  apolloProvider,
  store,
  render: h => h(App)
}).$mount("#app");
