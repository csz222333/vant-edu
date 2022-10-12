<template>
  <div class="questionMain">
    <div class="fhtop">
      <top-bar-vue ref="tbr"></top-bar-vue>
    </div>
    <div class="questionMain">
      <van-cell-group inset v-for="item in reqList" :key="item.id">
        <van-cell :value="item.context" />
        <van-cell :value="'A.'+item.options.optionA" @click="clickOption('A',item)" />
        <van-cell :value="'B.'+item.options.optionB" @click="clickOption('B',item)" />
        <van-cell :value="'C.'+item.options.optionC" @click="clickOption('C',item)" />
        <van-cell :value="'D.'+item.options.optionD" @click="clickOption('D',item)" />
        <van-cell class="colored" :value="item.resolving">
        </van-cell>

      </van-cell-group>
      <div class="siq"></div>
    </div>
  </div>
</template>
  
<script>
import topBarVue from '../commpoents/topBar.vue'
import question from '../../apis/question'
export default {
  data() {
    return {
      reqList: [],
    }
  },
  components: {
    topBarVue,
  },
  created() {
    let req = this.$route.params
    question.getQuestionById({ id: req.id }).then(res => {
      let item = res.data.data
      item.options = JSON.parse(item.options)
      this.reqList.push(item)
    })
  },
  mounted() {
    this.$refs.tbr.setPaths('/edu/errorquestionList')
  },
  methods: {
  }
}
</script>
  
<style>
.questionMain {
  width: 100%;
  margin-top: 5%;
  height: 95%;
}

.van-cell-group--inset {
  margin-top: 20px !important;
}
</style>
<style lang="less" scoped>
.colored {
  /deep/ .van-cell__value {
    >span {
      color: red;
    }
  }
}

.tags {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 15px;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
}
</style>
  