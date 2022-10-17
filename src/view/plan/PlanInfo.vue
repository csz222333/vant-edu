<template>
    <div class="main-plan">
        <div class="plan-top">
            <topBar ref="tbr"></topBar>
        </div>
        <div class="plan-context">
            <van-cell-group inset>
                <van-field v-model="form.title" label="标题" placeholder="请输入标题" />
                <van-field readonly :value="form.planTime" label="计划日期" placeholder="请选择日期" @click="showDate = true" />
                <van-field readonly clickable label="归属课程" :value="form.couserId" placeholder="选择课程"
                    @click="showPicker = true" />

                <van-popup v-model="showPicker" round position="bottom">
                    <van-picker show-toolbar :columns="columns" @cancel="showPicker = false" @confirm="onConfirm" />
                </van-popup>
                <van-popup v-model="showDate" round position="bottom">
                    <van-datetime-picker v-model="currentDate" type="date" title="选择年月日" :min-date="minDate"
                        :max-date="maxDate" @change="changeFn()" @confirm="confirmFn()" @cancel="cancelFn()" />
                </van-popup>

                <van-field v-model="form.context" rows="4" type="textarea" maxlength="500" label="计划内容"
                    placeholder="计划内容" />
            </van-cell-group>

        </div>
        <div class="plan-but">
            <van-button round block type="info" @click="submit" native-type="submit" v-if="form.id===''">保存计划
            </van-button>

            <div class="but-s" v-else>

                <van-button round block type="info" @click="update(0)" native-type="submit">更新计划
                </van-button>

                <van-button round block type="info" @click="update(1)" native-type="submit">完成计划
                </van-button>


            </div>
        </div>
    </div>
</template>

<script>
import topBar from '../commpoents/topBar.vue'
import question from '../../apis/question'
import { Notify } from 'vant';
export default {
    components: {
        topBar, [Notify.Component.name]: Notify.Component,
    },
    created() {
        this.form = this.$route.params;
        let page = {
            size: 27,
            current: 1,
        }
        question.Catalog(page).then((res) => {
            res.data.data.records.map(item => {
                this.columns.push(item.context)
            })
        })

    },
    mounted() {
        this.$refs.tbr.setPaths('/edu/plan')
    },
    data() {
        return {
            form: {
                id: '',
                planTime: '',
                couserId: '',
                title: '',
                status: '0',
                context: ''
            },
            showPicker: false,
            columns: [],
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            showDate: false,
            changeDate: new Date(),
        }
    },
    methods: {
        onConfirm(value, index) {
            this.form.couserId = value
            this.showPicker = false
        },
        submit() {
            let needMsg = {
                planTime: '计划时间',
                couserId: '归宿课程',
                title: '计划标题',
                context: '计划内容'
            }
            let ErrorList = []
            for (let key in needMsg) {
                if (this.form[key].length > 0) {
                    continue;
                } else {
                    ErrorList.push(needMsg[key])
                }
            }
            if (ErrorList.length > 0) {
                ErrorList.map(item => {
                    let msg = item + '不能为空'
                    Notify(msg);
                    return;
                })

            }
            question.addPlan(this.form).then(res => {
                Notify({ type: 'success', message: '保存成功' });
                this.form = {
                    id: '',
                    planTime: '',
                    couserId: '',
                    title: '',
                    status: '0',
                    context: ''
                }
                this.$router.push({ path: '/edu/plan' })
            })

        },
        changeFn() {
            this.changeDate = this.currentDate // Tue Sep 08 2020 00:00:00 GMT+0800 (中国标准时间)
        },
        confirmFn() {
            this.form.planTime = this.timeFormat(this.currentDate);
            this.showDate = false;
        },
        cancelFn() {
            this.showDate = true;
        },
        timeFormat(time) { // 时间格式化 2019-09-08
            let year = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDate();
            return year + '-' + month + '-' + day
        },
        update(value) {
            this.form.status = value
            question.updatePlanStatus(this.form).then(res => {
                Notify({ type: 'success', message: '提交成功' });
                this.$router.push({ path: '/edu/plan' })
            })
        },
    },
}
</script>

<style lang="less" scoped>
.main-plan {
    width: 100%;
    height: 100%;
}

.plan-top {
    width: 100%;
    height: 10%;
}

.plan-context {
    width: 100%;
    height: 50%;
}

.plan-but {
    width: 80%;
    height: 10%;
    margin-left: 10%;
}

.but-s {
    width: 100%;
    height: 100%;
}

.van-button {
    margin-bottom: 10%;
}
</style>