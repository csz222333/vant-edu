<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item name="course"
                       icon="home-o">课程</van-tabbar-item>
      <van-tabbar-item name="plan"
                       icon="search" @click="tz()">计划</van-tabbar-item>
      <!-- <van-tabbar-item name="friends"
                       icon="friends-o">标签</van-tabbar-item> -->
      <van-tabbar-item name="setting"
                       icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
    data(){
        return{
            active:0
        }
    },
    methods:{
        tz(){
            window.console.log("跳转",this.active)
        }
    },
    watch:{
        active(newd,olsd){
            
            this.$router.push({path:'/edu/'+newd})
        }
    }
}
</script>