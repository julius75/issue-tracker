<template>
  <div class="aside">
<li class="list-group-item" @click="onRepoSelect">
  {{repo.nameWithOwner}}
</li>
  </div>
</template>

<script>
export default {
name: "RepoListItem",
  props:['repo'],
  methods:{
    onRepoSelect:function (){
      this.$emit('repoSelect', this.repo)
    }
  }
}
</script>

<style scoped>
li{
  cursor: pointer;
  color: #0366d6;
  background-color:#fff;
  border-right: 1px solid #e1e4e8;
  border: none !important;
}
li:hover{
 text-decoration: underline;
}
</style>
