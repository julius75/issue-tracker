<template>
  <div class="container">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <div class="row">
      <RepoList :repos="repos" @repoSelect="onRepoSelect"></RepoList>
      <RepoDetails :repo="selectedRepo"></RepoDetails>
    </div>
    <router-view />
  </div>

</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import RepoList from "@/components/RepoList";
import RepoDetails from "@/components/RepoDetails";

import {mapGetters} from "vuex";

export default {
  name: "App",
  components: {RepoList, SearchBar ,RepoDetails},

  data() {
    return {
      selectedRepo:null,
    };
  },
  created() {
    this.handleGetRepositories();
  },
  //receive getter
  computed:{
    ...mapGetters(['loading','repos']),
    // repos(){
    //   return this.$store.getters.repos;
    // },
    // loading(){
    //   return this.$store.getters.loading;
    // },
  },
  methods:{
    onTermChange:function (searchTerm){
      console.log(searchTerm);
    },
    handleGetRepositories(){
      //react store and get the action
      this.$store.dispatch('getRepos')
    },
    onRepoSelect:function (repo){
      this.selectedRepo = repo;
      console.log(repo);//repo passed from repolist,repoitem
    }
  },
};
</script>
<style>
@import "assets/main.css";
</style>
