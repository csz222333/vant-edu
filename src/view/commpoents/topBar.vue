<template>
  <div class="bats">
    <van-nav-bar title=""
                 left-text="退后"
                 left-arrow
                 @click-left="onClickLeft"/>
  </div>
</template>

<script>
    
export default {
    data(){
      return{
        paths:'',
      }  
    },
    methods:{
        onClickLeft(){
            if(this.paths!==''){
                let xpath = this.paths
                //防止影响其他组件，提前修改为空
                this.setPaths('')
                this.$router.push({path:xpath})
                return
            }
            this.$router.push({path:'/login'})
        },
        setPaths(value){
            this.paths = value
        }
    }
}
</script>

<style lang="less">
.bats{
    height: 100%;
    width: 100%;
    
}
</style>

