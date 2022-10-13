<template>
  <div class="register_body">
    <div class="topbas">
      <top-bar></top-bar>
    </div>
    <div class="top-font">
      <p style="margin: 0">用户注册</p>
    </div>
    <div>
      <van-form @submit="onSubmit">

        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field readonly clickable label="性别" :value="sexValue" placeholder="选择性别" @click="showPicker = true" />

        <van-popup v-model="showPicker" round position="bottom">
          <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
        </van-popup>

        <van-field v-model="phone" type="number" name="手机号码" label="手机号码" placeholder="手机号码"
          :rules="[{ required: true, message: '请填写手机号码' },{pattern,message:'请输入正确的手机号'}]" />

        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />

        <div style="margin: 16px; margin-top: 40%">
          <van-button round block type="info" @click="submit" native-type="submit">提交</van-button>
        </div>

      </van-form>
      <van-overlay :show="show" @click="show = false">
        <van-loading type="spinner" vertical color="#1989fa" />
        加载中.....
      </van-overlay>
    </div>
  </div>
</template>

<script>
import TopBar from '../commpoents/topBar.vue'
import { Toast } from 'vant'
import security from '../../apis/security'
export default {
  components: {
    TopBar,
  },
  data() {
    return {
      username: '',
      password: '',
      phone: '',
      columns: ['男', '女'],
      showPicker: false,
      sexValue: '',
      datas: {},
      show: false,
      pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    }
  },
  methods: {
    submit() { },
    onSubmit() { },
    onConfirm(value, index) {
      //   Toast(`当前值：${value}, 当前索引：${index},${this.showPicker}`)
      this.sexValue = value
      this.showPicker = false
    },
    submit() {
      this.show = true
      let datas = {
        phone: this.phone,
        username: this.username,
        password: this.password,
        sex: this.sexValue,
      }
      security.register(datas).then((res) => {
        this.show = false
        if (res.data.code === 200) {

          Notify(datas.username + '用户注册成功');
          this.$router.push({ path: '/lgoin' })

        } else {
          Notify(datas.username + '用户注册失败');
        }
      })
    },
  },
}
</script>

<style>
.topbas {
  height: 8%;
}

.register_body {
  height: 100%;
  width: 100%;
}

.top-font {
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  height: 15%;
}
</style>