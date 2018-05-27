<template>
    <div class="container">
        <header>
            <div class="hd-state">
                {{stated}}
            </div>
            <div class="hd-avatar">
                <img src="../assets/images/moren.jpg" width="50" height="50">
            </div>
            <div class="hd-username">
                {{username}}
            </div>
            <div class="hd-detail">
                <div class="hd-detail__time">
                    <span>{{time}}</span>
                    <span>读书时长</span>
                </div>
                <div class="hd-detail__points">
                    <span>{{number}}</span>
                    <span>蜗牛壳</span>
                </div>
            </div>
        </header>
            <mt-cell-swipe title="hello" icon="more" value="带icon"></mt-cell-swipe>
            <mt-cell-swipe title="hello" icon="more" value="带icon"></mt-cell-swipe>
            <mt-cell-swipe title="hello" icon="more" value="带icon"></mt-cell-swipe>
            <mt-cell-swipe title="hello" icon="more" value="带icon"></mt-cell-swipe>        
        <!-- <body v-for="(item, index) in details" :key="index">
            <mt-cell-swipe :title="item.title" to="" is-link value="带icon" style="height: 50px;">
                    <img :src="item.imgUrl" slot="icon" width="40" height="40" style="margin-right: 15px;">
            </mt-cell-swipe>
        </body> -->
            <div class="bd-items" v-for="(item, index) in details" :key="index">
                <div class="bd-items__img">
                    <img :src="item.imgUrl">
                </div>
                <div class="bd-items__title">
                    {{item.title}}
                </div>
                <div class="bd-items__des">
                    {{item.describe}}
                </div>
                <div class="bd-items__icon">
                    >
                </div>
            </div>
        
    </div>
    
</template>
<script>
import message from './../assets/images/message.jpg'
import fans from './../assets/images/fans.jpg'
import bookcomment from './../assets/images/bookcomment.jpg'
import notes from './../assets/images/notes.jpg'
import time from './../assets/images/time.jpg'
import invite from './../assets/images/invite.jpg'
import sets from './../assets/images/sets.jpg'
export default {
    data() {
        return {
            stated: '登录',
            isLogined: false,
            username: '梨',
            time: '1小时',
            number: '2',
            details: [
                {
                    imgUrl: message,
                    title: '消息',
                    describe: ''
                },
                {
                    imgUrl: fans,
                    title: '我的共读',
                    describe: ''
                },
                {
                    imgUrl: bookcomment,
                    title: '我的书评',
                    describe: '收藏、创作都在这里'
                },
                {
                    imgUrl: notes,
                    title: '我的批',
                    describe: ''
                },
                {
                    imgUrl: time,
                    title: '购买时长',
                    describe: ''
                }, 
                {
                    imgUrl: invite,
                    title: '邀请好友 · 兑换时长',
                    describe: '各得1天'
                },
                {
                    imgUrl: sets,
                    title: '设置',
                    describe: ''
                }
            ]
        }
    }
}
</script>
<style scoped>
.bd-items {
    border: none;
}
.iconfont {
    width: 24px;
    height: 24px;
    border: none;
}
</style>
