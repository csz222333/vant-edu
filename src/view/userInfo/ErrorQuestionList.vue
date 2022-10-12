<template>
    <div class="main">
        <topBarVue />
        <div class="box" v-for="item in record" :key="item.parentId">
            <van-swipe-cell>
                <van-cell :border="false" :title="item.context" value="内容" />
                <template #right>
                    <van-button square type="danger" text="删除" />
                </template>
            </van-swipe-cell>
        </div>
        <van-pagination v-model="currentPage" @change="getList" :page-count="pages" mode="simple" />
    </div>
</template>
<script>
import topBarVue from '../commpoents/topBar.vue'
import question from '../../apis/question'
export default {
    data() {
        return {
            currentPage: 1, //当前页码
            pageSize: 8, //查询的每页数量
            record: [],
            pages: 0,
        }
    },
    components: {
        topBarVue,
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            let page = {
                size: this.pageSize,
                current: this.currentPage,
            }
            question.getRecordErrorQuestion(page).then((res) => {
                console.log(res, 'res');
                this.record = res.data.data.records
                this.pages = res.data.data.pages
            })
        }
    }
};
</script>
<style lang="less" scoped>
.box {
    margin-top: 5%;
}
</style>