import { gql } from "apollo-boost";

/* REPOS Queries */
export const GET_REPOS = gql`
          query {
           viewer {
    name
    repositories(first: 20, orderBy: {field: PUSHED_AT, direction: DESC}) {
      edges {
        cursor
        node {
          id
          nameWithOwner
          issues(first: 20, orderBy: {field: CREATED_AT, direction: DESC},states:OPEN) {
            edges {
              node {
                id
                title
                number
                publishedAt
                number
                author {
                  login
                }
                state
              }
            }
            totalCount
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
        }
`;

/* Issues Mutations */
export const ADD_ISSUE =gql`
   mutation(
        $repositoryId:ID!,
         $title:String!
            ) {
       __typename
         createIssue(input: {repositoryId: $repositoryId, title: $title}) {
          issue {
             title
             publishedAt
            }
          }
        }
`;
