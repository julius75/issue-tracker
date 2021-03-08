<template>
  <div v-if="repo" class="col-md-9">
    <div class="details">
      <h1>{{ repo.nameWithOwner }}</h1>
  </div>
    <Tabs v-bind:number="number">
      <Tab name="Issues" :selected="true">
        <IssuesList :issues="repo.issues.edges" :repositoryId="repo.id"></IssuesList>
      </Tab>
      <Tab name="Pull requests">
        <h1>Label issues and pull requests for new contributors</h1>
      </Tab>
      <Tab name="Actions">
        <h1>Get started with GitHub Actions</h1>
      </Tab>
    </Tabs>
  </div>
</template>
<script>
import Tabs from "@/components/Tabs";
import Tab from "@/components/Tab";
import IssuesList from "@/components/IssuesList";
export default {
name: "RepoDetails",
  components: {IssuesList, Tab, Tabs},
  props:['repo'],
  data() {
    return {
      number:10,
      counts:4,
      tabTitle: 'Issues <span class="badge badge-secondary">12</span>'
    };
  },
}
</script>

<style scoped>
.details{
  padding-left: 32px;
  background: #d1d5da;
  border-radius: 4px;
}
h1{
  font-weight: 400;
  font-size: 20px
}
</style>
