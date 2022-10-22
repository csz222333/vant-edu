import qs from 'qs'
import request from '../utils/request'


export default {
    Catalog(datas) {
        return request({
            url: 'Question/Catalog',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },
    //getQuestion
    getQuestion(datas) {
        return request({
            url: 'Question/getQuestion',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },
    saveErrorQuestion(datas) {
        return request({
            url: 'Question/saveErrorQuestion',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },

    //获取错题记录
    getRecordErrorQuestion(datas) {
        return request({
            url: 'Question/getRecordErrorQuestion',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },

    //删除错题记录
    getdeleteErrorQuestion(datas) {
        return request({
            url: '/Question/deleteErrorQuestion',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },
    //题目详情
    getQuestionById(datas) {
        return request({
            url: '/Question/getQuestionById',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },
    //计划列表
    getListPlan(datas) {
        return request({
            url: '/Plan/ListPlan',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },
    //获取错数目
    getErrorQS() {
        return request({
            url: '/Question/getErrorQS',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
        })
    },
    //新增计划
    addPlan(datas) {
        return request({
            url: '/Plan/addPlan',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },
    updatePlanStatus(datas) {
        return request({
            url: '/Plan/updatePlanStatus',
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data'
            },
            data: datas
        })
    },
    downFile(item) {
        return request({
            method: "get",
            url: item.urls,
            headers: {
                type: 'application/pdf',
            },
            responseType: 'blob',
        }).then(res => {
            let url = window.URL.createObjectURL(new Blob([res.data]));  // new Blob([data])用来创建URL的file对象或者blob对象
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = url;
            link.download = item.name //docNumber 动态文件名
            document.body.appendChild(link);
            link.click();
        })
    }
}