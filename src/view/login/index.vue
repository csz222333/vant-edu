<template>
    <div class="bod">
        <div class="cont">
            <h1 style="text-align:center">用户登入</h1>
            <van-cell-group inset>
                <van-field v-model="form.phone" label="手机号码" placeholder="请输入用户名" />
            </van-cell-group>
            <div style="margin-top: 40px"></div>
            <van-cell-group inset>
                <van-field  v-model="form.password" type="password"  label="密码" placeholder="请输入密码" />
            </van-cell-group>
        </div>

        <div class="btn">
            <van-button type="primary" style="width:55%;margin-bottom: 5%;margin-top: 5%;" @click="login">登入</van-button>
            <van-button type="default" style="width:55%" @click="tz()">注册</van-button>
        </div>

        

    </div>
</template>

<script>
import security from '../../apis/security'

export default {
    data(){
        return{
            form:{
                phone:'',
                password:'',
            }
    }},
    methods:{
        tz(){
            window.console.log(123)

            this.$router.push({path:'/register'})
        },
        login(){
            security.login(this.form).then(res=>{
                if(res.data.code===200){
                    localStorage.setItem("token",res.data.data.token)
                    // localStorage.setItem("user",)
                    let xx = JSON.stringify(res.data.data.data)
                    localStorage.setItem("user",xx)
                    this.$router.push({path:'/edu/setting'})
                }else if(res.data.code===503){
                    this.form.password=''
                    this.$notify({ type: 'warning', message: '账号或者密码错误' });
                }
            })
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