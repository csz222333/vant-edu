<template>
    <div class="bod">
        <div class="cont">
            <h1 style="text-align:center">用户登入</h1>
            <van-cell-group inset>
                <van-field v-model="value" label="文本" placeholder="请输入用户名" />
            </van-cell-group>
            
            <van-cell-group inset>
                <van-field style="margin-top: 20px" v-model="value" type="password"  label="密码" placeholder="请输入密码" />
            </van-cell-group>
        </div>

        <div class="btn">
            <van-button type="primary" style="width:55%;margin-bottom: 5%;margin-top: 5%;">登入</van-button>
            <van-button type="default" style="width:55%" @click="tz()">注册</van-button>
        </div>

        

    </div>
</template>

<script>
export default {
    methods:{
        tz(){
            window.console.log(123)

            this.$router.push({path:'/register'})
        }
    }
}
</script>


<style>
.bod{
    width: 100%;
    height: 100%;
   
}
.cont{
    padding-top: 35%;
}
.btn{
    width: 100%;
    padding-left:22.5%
}
</style>