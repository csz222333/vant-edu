<template>
  <div class="bats">
    <van-nav-bar title="" left-text="退后" left-arrow @click-left="onClickLeft" v-if="flag" />
    <van-nav-bar title="" left-text="退后" left-arrow @click-left="onClickLeft" @click-right="parentMethod"
      right-text="完成" v-if="!flag" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      paths: '',
      flag: true,
    }
  },
  methods: {
    onClickLeft() {
      if (this.paths !== '') {
        let xpath = this.paths
        //防止影响其他组件，提前修改为空
        this.setPaths('')
        this.$router.push({ path: xpath })
        return
      }
      this.$router.push({ path: '/login' })
    },
    setPaths(value) {
      this.paths = value
    },
    setFlag(value) {
      this.flag = value
    },
    parentMethod() {
      this.$parent.fatherMethod();
    }
  }
}
</script>

<style lang="less">
.bats {
  height: 100%;
  width: 100%;

}
</style>

