import store from "@/store";
import axios from "axios";
//进度条
import nprogress from 'nprogress';
//因为进度条样式咱们没有引入
import "nprogress/nprogress.css";
const requests= axios.create({
    baseURL:'api',
    timeout:5000
})
//请求拦截器
requests.interceptors.request.use((config)=>{
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()
       return res.data
},(error)=>{
      return Promise.reject(new error('faile'))  
} 
)
export default requests;