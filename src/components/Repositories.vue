<template>
  <div>
  <div class="card-header repo-list" v-for="edge in repos" :key="edge.cursor">
    <div class="el1" v-for="nod in edge.node" :key="nod.id">
      <router-link to="repo-detail"> {{ edge.node.nameWithOwner }}</router-link>
    </div>
  </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
// import gql from "graphql-tag";
// import {GET_REPO_ISSUES} from "@/components/HelloWorld";

// export const GET_ALL_REPO = gql`
//   query getAllRepos {
//     viewer {
//       name
//       repositories(first: 10, orderBy: { field: PUSHED_AT, direction: DESC }) {
//         edges {
//           node {
//             id
//             nameWithOwner
//           }
//         }
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//       }
//     }
//   }
// `;


export default {
  name: "Repositories",
  data() {
    return {
        edges: [
        ],
      response:[],
    };
  },
  created() {
    this.handleGetRepositories();
  },
  methods: {
    handleGetRepositories(){
      //react store and get the action
      this.$store.dispatch('getRepos')
    }
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

};
</script>

<style scoped></style>
