<template>
    <div class="videos-c">
        <div class="vio-ti">
            <p> 视频学习</p>
        </div>
        <div class="vio-co">
            <div class="vio-vl" v-for="itme in list" :key="itme">
                <video class="vio-os" :poster="itme.cacheFristImgUrl" :src="itme.url" :ref="itme.refName"
                    :id="itme.refName" x5-video-player-type="h5" :x5-video-player-fullscreen=false x5-video-orientation="landscape" @click=plays(itme)>
                </video>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    url: 'http://img.fangxz.top/hjc/edu/04%20IoC%E7%BC%96%E7%A8%8B%E6%80%9D%E6%83%B3%E5%B7%A9%E5%9B%BA.mp4',
                    title: '04 IoC编程思想巩固.mp4',
                    cacheFristImgUrl: '',
                    refName: 'vs1',
                    flag: false
                },
                {
                    url: 'http://img.fangxz.top/hjc/edu/02%20Spring%E6%A1%86%E6%9E%B6%E8%AF%BE%E7%A8%8B%E5%86%85%E5%AE%B9%E4%BB%8B%E7%BB%8D.mp4',
                    title: '',
                    cacheFristImgUrl: '',
                    refName: 'vs2',
                    flag: false
                },
                {
                    url: 'http://img.fangxz.top/hjc/edu/03%20Spring%E6%A1%86%E6%9E%B6%E6%95%B4%E4%BD%93%E5%9B%9E%E9%A1%BE.mp4',
                    title: '',
                    cacheFristImgUrl: '',
                    refName: 'vs3',
                    flag: false
                },
                {
                    url: 'http://img.fangxz.top/hjc/edu/05%20IoC%E4%B8%8EDI%E5%8C%BA%E5%88%AB%E8%AF%B4%E6%98%8E.mp4',
                    title: '',
                    cacheFristImgUrl: '',
                    refName: 'vs4',
                    flag: false
                },
                {
                    url: 'http://img.fangxz.top/hjc/edu/06%20AOP%E7%BC%96%E7%A8%8B%E6%80%9D%E6%83%B3%E5%B7%A9%E5%9B%BA.mp4',
                    title: '',
                    cacheFristImgUrl: '',
                    refName: 'vs5',
                    flag: false
                },
                {
                    url: 'http://img.fangxz.top/hjc/edu/07%20%E6%89%8B%E5%86%99IoC%E5%92%8CAOP%E4%B9%8B%E9%97%AE%E9%A2%98%E5%88%86%E6%9E%90.mp4',
                    title: '',
                    cacheFristImgUrl: '',
                    refName: 'vs6',
                    flag: false
                },
                {
                    url: '',
                    title: '',
                    cacheFristImgUrl: '',
                    refName: 'vs7',
                    flag: false
                },
                {
                    url: '',
                    title: '',
                    cacheFristImgUrl: '',
                    refName: 'vs8',
                    flag: false
                },
            ],
            loads: false
        }
    },
    created() {
        this.captureImage()
    },
    methods: {
        captureImage() {
            for (let i = 0; i < this.list.length; i++) {
                let video = this.$refs[`${this.list[i].refName}`]; //dragvd_pre指video 标签 也可以使用 document.getElementById('video')
                // let video = document.getElementById(this.list[i].refName)
                let canvas = document.getElementById('myCanvas')
                let ctx = canvas.getContext("2d");
                ctx.drawImage(video, 0, 0, 40, 40);
                let oGrayImg = canvas.toDataURL('image/jpeg');
                this.list[i].cacheFristImgUrl = oGrayImg;
                this.list[i].flag = true
                this.$forceUpdate()
            }

        },
        plays(even) {
            let video = document.getElementById(even.refName);
            if (even.flag) {
                //even.flag 正在播放 需要关闭
                document.exitFullscreen();
                video.pause();
                even.flag = false
            } else {
                video.requestFullscreen()
                video.play()
            }

        }
    }
}
</script>

<style lang="less">
.videos-c {
    height: 100%;
    width: 100%;

}

.vio-ti {
    width: 100%;
    height: 5%;
    position: absolute;
    top: 1%;
    text-align: center;
    font-weight: 600;

    p {
        margin: 0;
    }
}

.vio-co {
    width: 90%;
    height: 90%;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
}

.vio-vl {
    width: 47.5%;
    height: 22.5%;
    margin-top: 5%;

}

.vio-os {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>