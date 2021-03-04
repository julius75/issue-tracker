<template>
  <div class="hello">

  </div>
<!--  <div class="hello">-->
<!--        <ApolloQuery :query="getRepoIssues">-->
<!--        <template slot-scope="">-->
<!--          <div></div>-->
<!--        </template>-->
<!--        </ApolloQuery>-->
<!--  </div>-->
</template>

<script>
import gql from "graphql-tag";

export const GET_REPO_ISSUES = gql`
  query getRepoIssues {
    repository(owner: "julius75", name: "flutter_adoption") {
      issue(number: 2) {
        id
        title
        bodyText
        __typename
      }
    }
  }
`;
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      type: "private",
      filterType: "all",
    };
  },
  apollo: {
    repository: GET_REPO_ISSUES
  }
};
</script>

<style scoped></style>
