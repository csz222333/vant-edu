<template>
    <div class="simp">
        <div class="simp-top">
            <top-bar ref="tbr"></top-bar>
        </div>
        <div id="simp-phg">
            <div class="phg-title">

            </div>
            <div id="phg-px">

            </div>
        </div>
    </div>
</template>

<script>
import question from '../../apis/question'
import TopBar from '../commpoents/topBar.vue'
import * as echarts from "echarts";

export default {
    components: {
        TopBar
    },
    created() {

    },
    mounted() {
        this.$refs.tbr.setPaths('/edu/setting')
        this.draw()
    },
    data() {
        return {

        }
    },
    methods: {
        draw() {
            var myChart = echarts.init(document.getElementById('phg-px'));
            let datad = []
            let titles = []
            question.getErrorQS().then(res => {
                res.data.data.map(item => {
                    datad.push({ name: item.context, value: item.errorSum })
                    titles.push(item.context)
                    console
                })
                let title = {
                    text: '错题统计图',
                    top: '0%',
                    left: 'center'
                }
                const option = {
                    title: title,
                    legend: {
                        // 图例
                        data: titles,
                        right: "10%",
                        top: "92%",
                        orient: "vertical"
                    },
                    series: [{
                        type: 'pie',
                        label: {
                            show: true,
                            formatter: "{c} ({d}%)" // b代表名称，c代表对应值，d代表百分比
                        },
                        data: datad
                    }]
                }
                myChart.setOption(option);
            })

        }
    },
}
</script>

<style lang="less" scoped>
.simp {
    height: 100%;
    width: 100%;

}

.simp-top {
    width: 100%;
    height: 8%;

}

#simp-phg {
    width: 100%;
    height: 80%;
}

.phg-title {
    width: 100%;
    height: 10%;
}

#phg-px {
    width: 100%;
    height: 40%;
    // padding-left: 30%;
}
</style>