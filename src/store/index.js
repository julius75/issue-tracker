import Vue from "vue";
import Vuex from "vuex";
import {defaultClient as apolloClient} from '../main';
// import {gql} from "apollo-boost";

import {GET_REPOS,ADD_ISSUE} from "@/queries";

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
          query: GET_REPOS,
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
  },

    addIssue:({commit},payload)=>{
      apolloClient.mutate({
        mutation:ADD_ISSUE,
        variables:payload,
        // update:(cache,{data :{addIssue}})=>{
        //   console.log(cache,'cache.data')
        //   const data = cache.readQuery({query:GET_REPOS});
        //   data.getRepos.unshift(addIssue)
        //   console.log(data)
        //   cache.writeQuery({
        //     query:GET_REPOS,
        //     data
        //   })
        // },
      // optimisticResponse:{
      //     __typename:"Mutation",
      //   addIssue:{
      //     __typename,
      //     _id:-1
      //     ...payload
      //   }
      // },

      })
          .then(({data})=>{
              console.log(data);
      })
          .catch(err => {
              console.log(err)
      })
      },
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
