//home仓库的小模块 
import { reqCategoryList, bannerList, reqGetFloorList } from "@/api";
const state = {
  categoryList: [],
  bannerList: [],
  getFloorList:[]
};
const mutations = {
  GETCATEGORY(state, value) {
    state.categoryList = value;
  },
  GETBANNERLIST(state, value) {
    state.bannerList = value;
  },
  GETFLOORLIST(state,value){
      state.getBannerList = value
  }
};
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      //提交mutation
      commit("GETCATEGORY", result.data);
    }
  },
 async getBannerList({commit}){
          let sun = await bannerList();
          if(sun.code === 200){
            commit("GETBANNERLIST",sun.data);
          }
          
  },
  //获取floor组件
   getFloorList({commit}){
        let kang = reqGetFloorList()
        if(kang.code === 200){
          commit("GETFLOORLIST",kang.data);
        }
   }
};
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}