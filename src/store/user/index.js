import { reqGetCode, userRegister, userLogin, reqUserInfo ,reqLogout} from "@/api";
import { userToken, getToken ,clearToken} from "@/utils/token";
const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};
const mutations = {
  GETCODE(state, value) {
    state.code = value;
  },
  USERLOGIN(state, value) {
    state.token = value;
  },
  GETUSERINFO(state, value) {
    state.userInfo = value;
  },
  CLEARTOKEN(state){
     state.code = ""
     state.userInfo = {}
     clearToken();

  }
};
const actions = {
  //验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code === 200) {
      commit("GETCODE", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //注册
  async register({ phone, code, password }) {
    let result = await userRegister({ phone, code, password });
    if (result.code === 200) {
      return "Ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //登录
  async userlogin({commit},data) {
    let res = await userLogin(data);
     if(res.code === 200){
       commit("USERLOGIN",res.data.token) //把token存到仓库里面
        userToken(res.data.token); // 把token存到本地存储里面
       return 'ok'
     }else{
      return Promise.reject(new Error("faile"));
     }
  },
  //获取用户信息
  async getUserInfo({commit}){
         let res = await reqUserInfo()
          commit("GETUSERINFO",res.data)
         
   },
   //退出登录
   async userLogin({commit}){
       let res = await reqLogout();
       //退出登录成功之后 要将将库数据清空,本地存储也要清空
      if(res.code === 200){
        commit('CLEARTOKEN')
      }
   }
};
const getters ={};
export default {
    state,
    mutations,
    actions,
    getters
}