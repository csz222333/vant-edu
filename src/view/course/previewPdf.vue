<template>
    <div class="m-area">
        <div>
            <topBar ref="tbr">
            </topBar>
        </div>
        <p> </p>
        <div v-show="loaded">
            <pdf v-for="index in numPages" :key="index" :src="pdfUrl" :page="index" />
        </div>

        <van-overlay :show="!loaded">

            <div class="wrapper">
                <van-loading type="spinner" size="24px" />
            </div>
        </van-overlay>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
import topBar from '../commpoents/topBar.vue'
export default {
    components: {
        pdf, topBar
    },
    data() {
        return {
            pdfUrl: "",
            title: "",
            numPages: "",
            loaded: false,

        }
    },
    created() {
        this.pdfUrl = this.$route.params.data.urls
        this.title = this.$route.params.data.name
        var docEl = window.document.documentElement
        var width = window.screen.availWidth || window.screen.width
        var rootSize = width / 15
        docEl.style.fontSize = rootSize + 'px'
        document.body.style.background = '#FFFFFF'
        document.body.style.margin = 0


    },
    mounted() {
        this.$refs.tbr.setPaths('/edu/Extracurricular')
        window.console.log("加载中...")
        this.loadPdf()
    },
    methods: {
        loadPdf() {
            this.pdfUrl = pdf.createLoadingTask(this.pdfUrl)
            this.pdfUrl.promise.then(pdf => {
                this.$nextTick(() => {
                    this.numPages = pdf.numPages // pdf总页数
                    this.loaded = true
                })
            })
        }
    }

}
</script>

<style lang="less" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.m-area {
    position: relative;

    .u-title {
        background: #FFFFFF;
        font-size: 0.72rem;
        height: 1.76rem;
        line-height: 1.76rem;
        margin: 0 auto;
        text-align: center;
        color: #333333;
    }

    .m-button {
        text-align: center;
        position: absolute;
        bottom: -2rem;

        .u-button {
            display: block;
            width: 15rem;
            height: 2rem;
            margin: 0 auto;
            background: #FBBF00;
            border: none;
            outline: none;
            font-size: 0.72rem;
            color: #FFFFFF;
            cursor: pointer; // 加上该属性后，点击元素会出现蓝色背景色，可通过添加以下样式解决
            -webkit-tap-highlight-color: transparent;
        }

        .u-button:active {
            opacity: 0.8;
        }
    }
}
</style>