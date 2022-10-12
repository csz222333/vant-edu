<template>
  <div class="infos">
    <div class="infos_top">
      <van-image width="7rem" height="7rem" round fit="cover" :src=defaultinco />
      <div style="margin-left: 3%;">
        <p style="font-size: 1.5rem;font-weight: 400;">{{Names}}</p>
        <p>edu账号:{{phone}}</p>
      </div>
    </div>
    <div class="infos_setting">
      <van-cell title="更新资料" style="font-size: 1.2rem;" is-link @click="updateInfo" icon="edit" />
    </div>
    <div class="infos_content">
      <van-grid :column-num="2" square>
        <van-grid-item icon="photo-o" text="错题本" @click="toErrorQuestionList" />
        <van-grid-item icon="photo-o" text="收藏集" />
        <van-grid-item icon="photo-o" text="课外资料" @click="toExtracurricular" />
        <van-grid-item icon="photo-o" text="用户反馈" />
      </van-grid>
    </div>
    <div class="logout_ing">
      <van-button type="primary" block @click="logout">退出登入</van-button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '2747527180',
      Names: 'pprxo',
      defaultinco: "http://admin.fangxz.top/img/avatar.jpg"
    }
  },
  mounted() {
    let user = localStorage.getItem("user")
    user = JSON.parse(user)
    this.Names = user.username
    this.phone = user.phone
    if (user.icon !== null) {
      this.defaultinco = user.icon
    }

  },
  methods: {
    logout() {
      this.$router.push({ path: '/lgoin' })
    },
    updateInfo() {
      this.$router.push({ path: '/edu/userInfo' })
    },
    toErrorQuestionList() {
      this.$router.push({ path: '/edu/errorquestionList' })

    },
    toExtracurricular() {
      this.$router.push({ path: '/edu/Extracurricular' })
    }
  }
}
</script>

<style lang="less" scoped>
.infos {
  height: 100%;
  width: 100%;
}

.infos_top {
  width: 93%;
  height: 20%;
  padding-top: 10%;
  padding-left: 7%;
  background-color: #fff;
  display: flex;
}

.infos_setting {
  width: 100%;
  height: 8%;
  background-color: #fff;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.infos_content {
  width: 100%;
  height: 49%;
  background-color: #fff;
}
</style>