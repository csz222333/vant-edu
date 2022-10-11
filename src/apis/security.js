import qs from 'qs'
import request from '../utils/request'


export default{
    register(datas){
        return request({
            url:'user/register',
            method:'POST',
            headers:{
                'Content-type': 'multipart/form-data'
               },
            data:datas
        })
    },
    login(datas){
        return request({
            url:'user/login',
            method:'POST',
            headers:{
                'Content-type': 'multipart/form-data'
               },
            data:datas
        })
    },
}