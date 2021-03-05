import { gql } from "apollo-boost";

/* REPOS Queries */
export const GET_REPOS = gql`
          query {
          viewer {
            name
            repositories(
              first: 3
              orderBy: { field: PUSHED_AT, direction: DESC }
            ) {
              edges {
              cursor
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
`;

/* User Queries */

/* Posts Mutations */

/* User Mutations */
