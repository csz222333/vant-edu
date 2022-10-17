<template>
  <div class="plan_apps">
    <div class="tops_bt">
      <!-- <p style="text-align: center;margin-top: 0;">今日计划:{{todaySize}}项</p> -->
      <div>
        <van-grid square :column-num="3" :gutter="10">
          <van-grid-item v-for="value in list" :key="value.id" icon="photo-o" :text="value.title"
            @click="edit(value)" />
        </van-grid>
      </div>
    </div>
    <div class="cent_sub">
      <van-button round block type="info" @click="submit" native-type="submit">新增计划</van-button>
    </div>
  </div>
</template>

<script>
import question from '../../apis/question'
export default {
  data() {
    return {
      todaySize: 0,
      completeSize: 0,
      show: false,
      date: '',
      dateShow: false,
      showPicker: false,
      columns: ['男', '女'],
      list: [],
    }
  },
  methods: {
    submit() {
      this.$router.push({ path: '/edu/planInfo' })
    },
    edit(value) {
      this.$router.push({ name: "PlanInfo", params: value })
    }
  },
  mounted() {
    question.getListPlan().then(res => {
      this.list = res.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.plan_apps {
  height: 100%;
  width: 100%;
}

.tops_bt {
  height: 60%;
  width: 100%;
  //   margin-top: 5%;
  margin-bottom: 5%;
  padding-top: 20%;
  // background-color: #fff;
}

/deep/ .van-grid-item__content {
  border-radius: 20px !important;
}

.cent_sub {
  padding-top: 20%;
  height: 5%;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>