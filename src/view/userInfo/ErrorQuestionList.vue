<template>
    <div class="main">
        <topBarVue ref="tbr" />
        <div class="box" v-for="item in record" :key="item.id">
            <van-swipe-cell>
                <van-cell :border="false" :title="item.context" @click="toerror(item.id)" />
                <template #right>
                    <van-button square type="danger" text="删除" @click="deletelist(item.id)" />
                </template>
            </van-swipe-cell>
        </div>
        <van-pagination v-show="!isShow" v-model="currentPage" @change="getList" :page-count="pages" mode="simple" />
        <van-empty v-show="isShow" description="暂无内容" />
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
            isShow: false,
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
                console.log(res);
                this.record = res.data.data.records
                this.pages = res.data.data.pages
                if (this.record.length == 0) {
                    this.isShow = true
                }
            })
        },
        deletelist(id) {
            console.log(id);
            question.getdeleteErrorQuestion({ "id": id }).then(res => {
                this.getList()
            })
        },
        toerror(id) { 
            this.$router.push({name:"ErrorQuestionInfo",params:{"id":id}})
        }

    }
};
</script>
<style lang="less" scoped>
.box {
    margin-top: 5%;
}
</style>