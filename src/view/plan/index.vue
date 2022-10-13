<template>
  <div class="plan_apps">
    <div class="tops_bt">
      <p style="text-align: center;margin-top: 0;">今日计划:{{todaySize}}项,已经完成:{{completeSize}}项</p>
      <div>
        <van-grid square :column-num="3" :gutter="10">
          <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>
      </div>
    </div>
    <div class="cent_sub">
      <van-button round block type="info" @click="show=true" native-type="submit">新增计划</van-button>
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
    }
  },
  methods: {
    onConfirm(date) {
      this.show = false
      this.date = this.formatDate(date)
    },
  },
  mounted() { 
    question.getListPlan().then(res => { 
      console.log(res);
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