<template>
  <div v-if="repo" class="col-md-9">
    <div class="details">
      <h1>{{ repo.nameWithOwner }}</h1>
  </div>
    <Tabs>
      <Tab name="Issues" :selected="true">
        <Issues></Issues>
      </Tab>
      <Tab name="Pricing">
        <h1>How much we do it for</h1>
      </Tab>
      <Tab name="About Us">
        <h1>Why we do it</h1>
      </Tab>
    </Tabs>
  </div>
</template>
<script>
import Issues from "@/components/Issues";
import Tabs from "@/components/Tabs";
import Tab from "@/components/Tab";
export default {
name: "RepoDetails",
  components: {Tab, Tabs, Issues},
  props:['repo'],
  data() {
    return {
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
