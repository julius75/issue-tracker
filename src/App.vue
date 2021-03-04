<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4 aside">
        <div class="card card-default">
          <Repositories>

          </Repositories>
          <div class="card-header repo-list">
            <div class="el1">
              <router-link to="/">julius75/simplesocial</router-link>
            </div>
          </div>
          <div class="card-header repo-list">
            <div class="el1">
              <router-link to="/">julius75/simplesocial</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card card-default">
          <div class="card-header">
            <div class="el1">
              <router-link to="/">julius75
                / simplesocial</router-link></div>
          </div>
        </div>
      </div>

      <router-view />
  </div>
  </div>
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import Repositories from "@/components/Repositories.vue";

export default {
  name: "App",
  components: { Repositories }
};
</script>
<style>
@import "assets/main.css";
</style>
