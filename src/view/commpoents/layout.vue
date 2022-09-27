<template>
    <div class="Apps">
        <div class="Mains">
            <mains></mains>
        </div>
        <div class="Buts">
            <but-bar></but-bar>
        </div>
    </div>
</template>

<script>
import ButBar from './ButBar.vue';
import Mains from './Main.vue';
export default {
    components:{
        ButBar,Mains
    },    
}
</script>

<style lang="less">
.Apps{
    width: 100%;
    height: 100%;
}
.Mains{
    width: 100%;
    height: 94.4%;
}
.Buts{
    width: 100%;
    height: 5.6%;
}
</style>