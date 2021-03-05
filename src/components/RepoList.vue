<template>
<ul class="list-group col-md-3">
  <RepoListItem v-for="repo in repos"
  v-bind:repo="repo.node" v-bind:key="repo.cursor"
   @repoSelect="onRepoSelect"
  >
  </RepoListItem>
  {{ repos.length }}
</ul>
</template>

<script>
import RepoListItem from "@/components/RepoListItem";

export default {
  name: "RepoList",
  components: {RepoListItem},
  props:['repos'],

  methods:{
    onRepoSelect:function (repo){ //repo passed from the repolistitem we focus on
      this.$emit('repoSelect', repo)

    }
  }
}
</script>

<style scoped>

</style>
