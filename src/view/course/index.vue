<template>
  <div class="course_apps">
    <!-- <div class="left_bar">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="初一" />
        <van-sidebar-item title="初二" />
        <van-sidebar-item title="初三" />
      </van-sidebar>
    </div> -->
    <div class="right_main">
      <div>
        <van-grid square
                  :gutter="20"
                  :column-num="2">
          <van-grid-item v-for=" x in record"
                         @click="getque(x)"
                         :text="x.context"
                         :key="x.id">
            <!-- <van-image src="http://img.fangxz.top/2022/09/27/6331e6f675d9f.png" /> -->
          </van-grid-item>
        </van-grid>

      </div>
      <div>
        <van-pagination v-model="currentPage"
                        @change="getCatalog"
                        :page-count="pages"
                        mode="simple" />

      </div>
    </div>
  </div>
</template>

<script>
import question from '../../apis/question'

export default {
  data() {
    return {
      activeKey: '',
      'page-count': 0,
      currentPage: 1, //当前页码
      pageSize: 8, //查询的每页数量
      record: [],
      pages: 0,
    }
  },
  created() {
    this.getCatalog()
  },
  methods: {
    getCatalog() {
      let page = {
        size: this.pageSize,
        current: this.currentPage,
      }
      question.Catalog(page).then((res) => {
        this.record = res.data.data.records
        this.pages = res.data.data.pages
      })
    },
    getque(data){
        this.$router.push({name:"question",params:{data:data}})
    },
  },
}
</script>

<style lang="less" scoped>
.course_apps {
  height: 100%;
  width: 100%;
  display: flex;
}
.left_bar {
  height: 100%;
  width: 27%;
  background-color: #fff;
}
.right_main {
  padding-top: 5%;
  height: 95%;
  width: 100%;
}
.van-sidebar {
  width: 100%;
}
</style>