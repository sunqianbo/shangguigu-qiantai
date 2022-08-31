import { reqAddressInfo, reqShopCartInfo } from "@/api";
const state = {
    address:[],
    shopList:{}
};
 const mutations = {
   ADDRESS(state, value) {
     state.address = value;
   },
   SHOPLIST(state, value) {
     state.shopList = value;
   },
 };
 const actions = {
   async address({ commit }) {
     let res = await reqAddressInfo();
      if(res.code === 200){
        commit("ADDRESS", res.data);
      }
   },
   async shopList({ commit }) {
     let res = await reqShopCartInfo();
     if (res.code === 200) {
       commit("SHOPLIST", res.data);
     }
   },
 };
 const getters = {};

 export default {
     state,
     mutations,
     actions,
     getters
 }