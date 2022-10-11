import qs from 'qs'
import request from '../utils/request'


export default{
    Catalog(datas){
        return request({
            url:'Question/Catalog',
            method:'POST',
            headers:{
                'Content-type': 'multipart/form-data'
               },
            data:datas
        })
    },
    //getQuestion
    getQuestion(datas){
        return request({
            url:'Question/getQuestion',
            method:'POST',
            headers:{
                'Content-type': 'multipart/form-data'
               },
            data:datas
        })
    },
    saveErrorQuestion(datas){
        return request({
            url:'Question/saveErrorQuestion',
            method:'POST',
            headers:{
                'Content-type': 'multipart/form-data'
               },
            data:datas
        })   
    },
    
    //获取错题记录
    getRecordErrorQuestion(datas){
        return request({
            url:'Question/getRecordErrorQuestion',
            method:'POST',
            headers:{
                'Content-type': 'multipart/form-data'
               },
            data:datas
        })
    }
}