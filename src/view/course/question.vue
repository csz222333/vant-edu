<template>
  <div class="questionMain">
    <div class="fhtop">
      <top-bar-vue ref="tbr"></top-bar-vue>
    </div>
    <div class="questionMain"
         v-if="flag">
      <van-cell-group inset
                      v-for="item in reqList"
                      :key="item.id">
        <template>
          <div class="tags">
            <van-tag type="success"
                     v-if="SucessFlag">正确</van-tag>
            <van-tag type="danger"
                     v-if="ErrorFlag">错误</van-tag>
            <van-button round
            @click="nextQuestion"
                        type="success"
                        size="mini"
                        v-if="nextFlag">下一题</van-button>
          </div>
        </template>
        <van-cell :value="item.context" />
        <van-cell :value="'A.'+item.options.optionA"
                  @click="clickOption('A',item)" />
        <van-cell :value="'B.'+item.options.optionB"
                  @click="clickOption('B',item)" />
        <van-cell :value="'C.'+item.options.optionC"
                  @click="clickOption('C',item)" />
        <van-cell :value="'D.'+item.options.optionD"
                  @click="clickOption('D',item)" />
        <van-cell v-show="item.flag"
                  class="colored"
                  :value="item.resolving">
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
      flag: false, // 展示解析
      queSize: 0,
      SucessFlag: false,
      ErrorFlag: false,
      nextFlag: false,
    }
  },
  components: {
    topBarVue,
  },
  created() {
    this.req = this.$route.query.data
    question
      .getQuestion({ parentId: this.$route.params.data.options })
      .then((res) => {
        this.reqList = res.data.data
        // window.console.log(this.reqList)
        this.reqList.forEach((item) => {
          item.options = JSON.parse(item.options)
          item.flag = false
        })
        this.flag = true
      })
  },
  mounted() {
    this.$refs.tbr.setPaths('/edu/course')
  },
  methods: {
    clickOption(option, item) {
      item.flag = true
      this.nextFlag = true
      if (option === item.answer) {
        this.SucessFlag = true
      } else {
        this.ErrorFlag = true
        //提交当前题目
        question.saveErrorQuestion(item).then((res) => {})
      }
      this.$forceUpdate()
    },
    nextQuestion() {
        this.ErrorFlag  = false;
        this.SucessFlag = false;
        this.nextFlag = false;
      question
        .getQuestion({ parentId: this.$route.params.data.options })
        .then((res) => {
          this.reqList = res.data.data
          this.reqList.forEach((item) => {
            item.options = JSON.parse(item.options)
            item.flag = false
          })
          this.flag = true
        })
    },
  },
  beforeRouteLeave(to, from, next) {
    window.console.log(this.reqList)
    this.reqList = []
    next()
  },
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
    > span {
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
