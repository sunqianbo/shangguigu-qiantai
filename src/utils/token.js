export const userToken =(data)=>{
     localStorage.setItem("TOKEN",data)
}
export const getToken = ()=>{
   return  localStorage.getItem("TOKEN");
}
//清除token
export const clearToken = () => {
  localStorage.removeItem("TOKEN");
};
