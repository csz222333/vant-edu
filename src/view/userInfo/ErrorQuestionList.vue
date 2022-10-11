<template>
    <div class="main">
        <van-swipe-cell>
            <van-cell :border="false" title="单元格" value="内容" />
            <template #right>
                <van-button square type="danger" text="删除" />
            </template>
        </van-swipe-cell>
    </div>
</template>
<script>
import topBarVue from '../commpoents/topBar.vue'
export default {
    data() {
        return {
        }
    },
};
</script>
<style lang="less" scoped>

</style>