<template>
    <div class="mains">
        <router-view  :key="key"></router-view>
    </div>
</template>

<script>
export default {
    created(){
        window.console.log(this.$route.path)
    },
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>

<style>
.mains{
    height: 100%;
    widows: 100%;
}
</style>