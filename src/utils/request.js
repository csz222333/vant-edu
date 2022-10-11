import axios from 'axios'

const request = axios.create({
    baseURL:'/api',
    timeout:60000,
    headers: {
       
      }

})

let _this = this

// http request 拦截器
request.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token")
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      if (token ) { 
        //请求头加上token
        config.headers['jwt-token'] = token  
      }
      return config
    },
    err => {
        console.log(err,111)
        if(err.data.code===501){
            localStorage.removeItem("token")
            this.$router.push({path:'/login'})
        }
      return Promise.reject(err)
    })


export default request