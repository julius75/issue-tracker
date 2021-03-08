<template>
    <div class="col-md-9">
      <div class="creation">
        <h1>Create Issue</h1>
        <form @submit.prevent="handleAddIssue">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="title" required>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" v-model="description" rows="2" placeholder="Leave a comment"></textarea>
          </div>
          <div class="form-group">
            <label for="assignee">Assignees</label>
            <select class="form-control" id="assignee" v-model="assignee">
              <option disabled selected value>None</option>
<!--              <option v-for="user in users" v-bind:key="user.id" :value="user.id">{{user.name}}</option>-->
            </select>
          </div>
          <div class="form-group">
            <label for="type">Label</label>
            <select class="form-control" id="type" v-model=" label">
              <option disabled selected value>Please select</option>
              <option value="Bug">Bug</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Proposal">Proposal</option>
              <option value="Task">Task</option>
            </select>
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <select class="form-control" id="status" v-model="status">
              <option disabled selected value>Please select</option>
              <option value="Open">Open</option>>
              <option value="Closed">Closed</option>
            </select>
          </div>

<!--          <template>-->
            <button  class="btn btn-info" type="submit">Submit</button>
<!--            <router-link :to="{ path: '/issues', params: {}}" class="btn btn-primary" id="cancel-button">{{'Cancel'}}</router-link>-->
<!--          </template>-->
        </form>
      </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
name: "AddIssue",
  data() {
    return {
      currentUser: {},
      users: {},
      errors: {},
      title: "",
      description: "",
      status: "",
      priority: "",
      label: "",
      assignee: ""
    }
  },
props:['repositoryId'],

  methods:{
  handleAddIssue:function (){
    //add issues
    this.$store.dispatch('addIssue',{
      repositoryId:this.repositoryId,
      title:this.title,
   //   description:this.description
    })
  },
  }
}
</script>

<style scoped>
/*.creation {*/
/*  margin-top: 20px;*/
/*  width: 100%;*/
/*}*/

form {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5%;
  margin-right: 5%;
}
</style>
