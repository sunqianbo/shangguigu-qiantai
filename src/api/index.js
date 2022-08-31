import request from './request'
import mockRequest from '@/api/mockAjax'
//三级联动接口
//1:商品分类的数据接口
export  const reqCategoryList = () =>{
          return request({
            url: "/product/getBaseCategoryList",
            method: "get",
          });
}
//获取轮播图的数据
export const bannerList = ()=>{
   return mockRequest({
     url: "/banner",
     method: "get",
   });
}
//获取floor的数据
export const reqGetFloorList = () =>{
  return mockRequest({
    url: `/floor`,
    method: "get",
  });
}
//搜索产品的接口
export const reqSearchList =(params)=>{
        return request({
          url:'/list',
          method:"post",
          data:params
        })
}
//获取验证码的接口
export const reqGetCode = (phone)=>{
      return request({
      url: `/user/passport/sendCode/${phone}`,
      method: "get" 
    });
}
//注册接口
export const userRegister = ({ phone, code, password }) => {
  return request({
    url: `/user/passport/register`,
    data:{phone,code,password},
    method: "post",
  });
};
//注册登录接口
export const  userLogin = (data)=>{
   return request({
     url: "/user/passport/login",
     data,
     method:"post"
   });
   
}
//获取用户信息的接口
export const reqUserInfo = () =>
  request({
     url: `/user/passport/auth/getUserInfo`,
      method: "get" 
    });
    //退出登录的接口【通知服务器销毁当前token身份】
///api/user/passport/logout  get 
export const reqLogout = ()=>{
   return request({
      url: `/user/passport/logout`,
      method: "get" });
}
//获取用户地址信息
export const reqAddressInfo = ()=>{
  return request({
    url: `/user/userAddress/auth/findUserAddressList`,
    method: "get",
  })
}
//获取购物清单
export const reqShopCartInfo =()=>{
  return request({
     url: `/order/auth/trade`,
      method: "get" });
}