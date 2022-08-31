import { reqSearchList } from "@/api";
const state = {
  searchList:{}
};

const mutations = {
  SEARCHLIST(state,value){
       state.searchList = value 
  }
};
const actions = {
 async  getSearchList({commit},params={}){
      let result =   await reqSearchList(params)
      if(result.code === 200){
          commit('SEARCHLIST',result.data)
      }
  }
};
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
  total(state){
      return state.searchList.total
  }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
