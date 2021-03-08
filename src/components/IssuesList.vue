<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="list card-title">
          <h6 class="mr-4 closed"><span class="badge badge-primary badge-pill">{{issues.length}}</span>
            Open</h6>
          <div>
            <h6 class="closed"><span class="badge badge-primary badge-pill disabled">{{getClosed}}</span>
              Closed</h6>
<!--            <ClosedIssue></ClosedIssue>-->
          </div>
          <button class="btn btn-success button-add" @click="onClick()">New issue</button>
        </div>
        <div v-show="showAddIssue">
          <AddIssue :repositoryId="repositoryId"></AddIssue>
        </div>
        <ul class="list-group">
          <IssueListItem v-for="issue in issues"
            v-bind:issue="issue.node" v-bind:key="issue.id"
            @issueSelect="onIssueSelect"></IssueListItem>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import IssueListItem from "@/components/IssueListItem";
import AddIssue from "@/components/AddIssue";
export default {
name: "IssuesList",

  components: {AddIssue, IssueListItem},

  props:['issues','repositoryId'],

  data() {
    return {
      selectedIssue:null,
      showAddIssue:false,
    };
  },

  methods:{
    onIssueSelect:function (issue,editIssueDialog){ //repo passed from the repolistitem we focus on
      this.selectedIssue = issue;
      this.editIssueDialog = true,
      console.log(issue);

    },
    onClick:function (){
     // this.$emit('showAddIssue')
      this.showAddIssue = !this.showAddIssue
    }
  },

  computed:{
    getClosed:function (){
      return 2;
    },
  },
}
</script>

<style scoped>
ul{
  margin-right: 0;
  margin-left: 0;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
}
.list{
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
  border: 1px solid #e1e4e8;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
button{
  position: absolute;
  right: 0;
  margin: -1px -1px 0;
  display: inline-block;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
  border: 1px solid;
  border-radius: 6px;
}
.card-title{
  padding: 16px;
  margin: -1px -1px 0;
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.card-body{
  padding: unset !important;
}
.closed{
  cursor: pointer;
}
</style>
