<template>
  <div class="simples">
    <div class="tops">
      <topBarVue ref="tbr"></topBarVue>
    </div>
    <div class="mains">
      <van-cell-group inset>
        <van-field v-model="user.icon" label="头像地址" placeholder="请输入地址" />
        <van-field v-model="user.username" label="用户名" placeholder="请输入用户名" />
        <van-field v-model="user.email" label="邮箱" placeholder="请输入邮箱" />
        <van-field v-model="user.email" label="密码" placeholder="请输入密码" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import topBarVue from '../commpoents/topBar.vue'

export default {
  components: {
    topBarVue,
  },
  data() {
    return {
        user:{},
    }
  },
  mounted() {
    this.$refs.tbr.setPaths('/edu/setting')
    let user =  localStorage.getItem("user")
        user =  JSON.parse(user)
       this.user = user
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.simples {
  height: 100%;
  width: 100%;
}
.mains {
  margin-top: 5%;
}
</style>