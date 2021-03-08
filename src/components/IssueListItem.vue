<template>
  <div>
    <li class="list-group-item" @click="onIssueSelect">
        <h6>{{issue.title}}</h6>
        <span>#{{issue.number}} {{Status}}  {{updatedAt}} by {{issue.author.login}}</span>
    </li>
  </div>
</template>

<script>
import moment from 'moment'

export default {

name: "IssueListItem",
data(){
  return{
    editIssueDialog:true,
  }
},
  props:['issue'],

  methods:{
    onIssueSelect:function (){
      console.log( this.issue,'here');
      this.$emit('issueSelect', this.issue)
    },
  //   onStatusSelect:function (){
  //     this.$emit('issueStatus', this.issue.)
  //   },
   },

  computed:{
  updatedAt:function (){
    return moment(this.issue.publishedAt).fromNow();
    // var d = new Date(this.issue.publishedAt);
    // return d.toDateString(); // Hours
  },
    Status:function (){
     if(this.issue.state === 'OPEN'){
       return 'opened ';
     }
      else
        return 'closed  ';

    }
  },
}
</script>

<style scoped>
li{
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;
  background-color:#fff;
}

h6:hover{
  text-decoration: none;
  color: #0366d6;

}
</style>
