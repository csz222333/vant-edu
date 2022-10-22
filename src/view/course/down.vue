<template>
    <div class="down-app">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell v-for="item in list" :key="item.urls" :title="item.name" @click="downloadFile(item)" />
        </van-list>
    </div>
</template>

<script>
import question from '../../apis/question'
export default {
    data() {
        return {
            list: [
                {
                    urls: 'http://img.fangxz.top/hjc/edu/Volatile%E7%A6%81%E6%AD%A2%E6%8C%87%E4%BB%A4%E9%87%8D%E6%8E%92.pdf',
                    name: '4种常用Java线程锁的特点，性能比较、使用场景.pdf',
                    img: "http://lsky.fangxz.top/i/2022/06/15/62a9453f4c7ef.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/Java%E6%8F%90%E4%BE%9B%E4%BA%86%E5%93%AA%E5%87%A0%E7%A7%8D%E7%BA%BF%E7%A8%8B%E6%B1%A0%EF%BC%9F%20%E9%9D%A2%E8%AF%95%E9%A2%98-.pdf',
                    name: 'Java提供了哪几种线程池？.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c66db318.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/ThreadLocal%E7%9A%84%E5%86%85%E5%AD%98%E6%B3%84%E9%9C%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%E5%88%86%E6%9E%90%E4%BB%A5%E5%8F%8A%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D.pdf',
                    name: 'ThreadLocal的内存泄露的原因分析以及如何避免.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c662418c.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/Volatile%E4%B8%8D%E4%BF%9D%E8%AF%81%E5%8E%9F%E5%AD%90%E6%80%A7%E5%8F%8A%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.pdf',
                    name: 'Volatile不保证原子性及解决方案.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c659274d.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/Volatile%E7%A6%81%E6%AD%A2%E6%8C%87%E4%BB%A4%E9%87%8D%E6%8E%92.pdf',
                    name: 'Volatile禁止指令重排.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c6429ab7.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/volatile%E5%8F%AF%E8%A7%81%E6%80%A7%E8%AF%A6%E8%A7%A3.pdf',
                    name: 'volatile可见性详解.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c6359804.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/%E4%BD%A0%E4%BA%86%E8%A7%A3Java%E5%B9%B6%E5%8F%91%E4%B9%8BAQS.pdf',
                    name: '你了解Java并发之AQS.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c61705da.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/%E4%BD%A0%E7%9F%A5%E9%81%93Java%E4%B8%AD%E6%9C%89%E5%93%AA%E4%BA%9B%E9%94%81.pdf',
                    name: '你知道Java中有哪些锁.pdf',
                    img: "http://img.fangxz.top/2022/07/17/62d420d80f11b.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/%E4%BD%A0%E7%9F%A5%E9%81%93ReentrantLock%E5%90%97%EF%BC%8C%E8%B0%88%E4%B8%80%E8%B0%88%E5%AF%B9%E5%AE%83%E7%9A%84%E7%90%86%E8%A7%A3.pdf',
                    name: '你知道ReentrantLock吗，谈一谈对它的理解.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c659274d.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/%E5%A6%82%E4%BD%95%E8%AE%BE%E8%AE%A1%E4%B8%80%E4%B8%AA%E9%AB%98%E5%B9%B6%E5%8F%91%E7%B3%BB%E7%BB%9F.pdf',
                    name: '如何设计一个高并发系统.pdf',
                    img: "http://img.fangxz.top/2022/07/17/62d42198523db.png"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8%E7%9A%84%E5%8E%9F%E7%90%86.pdf',
                    name: '并发容器的原理.pdf',
                    img: "http://img.fangxz.top/2022/07/17/62d42198523db.png"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/%E8%AE%A9%E6%88%91%E4%BB%AC%E8%81%8A%E4%B8%80%E8%81%8AJava%E5%B9%B6%E5%8F%91%E4%B9%8BSynchronized.pdf',
                    name: '让我们聊一聊Java并发之Synchronized.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c662418c.jpeg"
                },
                {
                    urls: 'http://img.fangxz.top/hjc/edu/%E8%B0%88%E4%B8%80%E8%B0%88%E5%B9%B6%E5%8F%91CAS%EF%BC%88Compare%20and%20Swap%EF%BC%89%E5%AE%9E%E7%8E%B0.pdf',
                    name: '谈一谈并发CAS（Compare and Swap）实现.pdf',
                    img: "http://img.fangxz.top/2022/05/27/62903c6429ab7.jpeg"
                },
            ],
            loading: false,
            finished: false,
        }
    },
    methods: {
        //下载文件
        downloadFile(item) {
            question.downFile(item).then(res => {

            })
        },
        onLoad() { },

    }

}

</script>

<style lang="less" scoped>

</style>