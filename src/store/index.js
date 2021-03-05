import Vue from "vue";
import Vuex from "vuex";
import {defaultClient as apolloClient} from '../main';
import {gql} from "apollo-boost";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    edges: [],
    loading:false,
    selectedRepo:null,

  },
  actions: {
  getRepos:({commit})=>{
    commit('setLoading', true);
    //use apolloclient to fire get repo query
    apolloClient.query(
        {
          query: gql`
          query {
          viewer {
            name
            repositories(
              first: 5
              orderBy: { field: PUSHED_AT, direction: DESC }
            ) {
              edges {
              cursor
                node {
                  id
                  nameWithOwner
                    issues(first: 10) {
            edges {
              node {
                id
                title
                updatedAt
                publishedAt
                number
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
      `,
        }
    ).then(({data})=>{
      //get data to state via a mutation
      //commit pass data from actions along to mutations function
      commit('setRepos',data.viewer.repositories.edges );
      console.log(data.viewer.repositories.edges)
      commit('setLoading', false);

    }).catch(err=>{
      commit('setLoading', false);
      console.log(err);
    })
  }
  },

  //set state
  mutations: {
    setRepos:(state, payload)=>{
      state.edges = payload;
    },
    setLoading:(state, payload)=>{
      state.loading = payload;
    }
  },

  //from state to component
  getters:{
    repos:state => state.edges,
    loading:state => state.loading,

  },

  modules: {}
});
