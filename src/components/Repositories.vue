<template>
  <ul>
    <div v-for="edge in edges" :key="edge + '-name'">
    <li v-for="node in edge.node" :key="node.id +'-name'">
      <p>
        {{ edge.node.nameWithOwner }}</p>
    </li>
    </div>
  </ul>
</template>

<script>
import gql from "graphql-tag";
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
  template:` <h1> here</h1>`,
  data() {
    return {
        edges: [
        ],
      response:[],
    };
  },
  apollo: {
    viewer: {
      query: gql`
        query {
          viewer {
            name
            repositories(
              first: 10
              orderBy: { field: PUSHED_AT, direction: DESC }
            ) {
              edges {
                node {
                  id
                  nameWithOwner
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
            }
          }
        }
      `,
      // eslint-disable-next-line no-unused-vars
      result ({ data, loading, networkStatus }) {
        if(!loading){
          this.edges = data.viewer.repositories.edges;
         console.log(this.edges);
        }
        console.log('We got some result!')
      },
      // Error handling
      error (error) {
        console.error('We\'ve got an error!', error)
      },
    }
  },
  methods: {
    // a computed getter
  },


};
</script>

<style scoped></style>
