<template>
    <div class="container">
        <header class="page-part">
            <div class="hd-state" @click="Login()">
                <div class="hd-state__stated">{{stated}}</div>
            </div>
            <div class="hd-avatar">
                <img src="../../assets/images/moren.jpg" width="60" height="60" style="border-radius: 50%;">
            </div>
            <div class="hd-username">
                {{username}}
            </div>
            <div class="hd-detail">
                <div class="hd-detail__time">
                    <span>{{time}}</span>
                    <br/>
                    <span class="des">读书时长</span>
                </div>
                <div class="hd-detail__mark"></div>
                <div class="hd-detail__points">
                    <span>{{number}}</span>
                    <br/>
                    <span class="des">蜗牛壳</span>
                </div>
            </div>
        </header>
        <body v-for="(item, index) in details" :key="index">
            <mt-cell :title="item.title" to="" is-link :value="item.describe" style="height: 50px;">
                <img :src="item.imgUrl" slot="icon" width="40" height="40" style="margin-right: 10px;">
            </mt-cell>
        </body>
    </div>
</template>
<script>
import message from '../../assets/images/message.jpg'
import fans from '../../assets/images/fans.jpg'
import bookcomment from '../../assets/images/bookcomment.jpg'
import notes from '../../assets/images/notes.jpg'
import time from '../../assets/images/time.jpg'
import invite from '../../assets/images/invite.jpg'
import sets from '../../assets/images/sets.jpg'
export default {
    data() {
        return {
            stated: '编辑',
            // isLogined: false,
            username: '',
            time: '480个小时',
            number: '11',
            userList: [
                {
                    username: 'Amy',
                    password: '111111',
                    time: '480个小时',
                    number: '11',
                    avator: ''
                },
                {
                    username: 'Amy',
                    password: '111111',
                    time: '480个小时',
                    number: '11',
                    avator: ''
                }
            ],
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
                    title: '我的批注',
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
                    imgUrl: invite,
                    title: '在线客服',
                    describe: '意见反馈'
                },
                {
                    imgUrl: sets,
                    title: '设置',
                    describe: ''
                }
            ]
        }
    },
    methods: {
        Login() {
            // 跳转到登录页面
            this.$router.push('/login');
        }
    },
    mounted() {
        if(this.$route.query.isLogin){
            this.username = this.$route.query.username;
        } else {
            this.username = 'Amy';
        }
        console.log(this.username);        
    }
}
</script>
<style scoped>
.container {
    padding-bottom: 15px;
}
.page-part {
    margin-bottom: 12px;
    background-color: #fff;
}
.iconfont {
    width: 24px;
    height: 24px;
}
.hd-state {
    width: 100%;
    height: 40px;
    line-height: 40px;  
    text-align: right;
}
.hd-state__stated {
    display: inline-block;
    text-decoration: none;
    padding-right: 10px;
    font-size: 18px;
    color: #b3b3b3;
}
.hd-avatar {
    height: 60px;
    display: flex;
    justify-content: center;
}
.hd-username {
    width: 100%;
    margin: 15px 0 0 0;
    text-align: center;
}
.hd-detail {
    display: flex;
    height: 68px;
    justify-content: center;
    text-align: center;
    align-items: center;
}
.hd-detail__time, .hd-detail__points {
    flex: 1;
}
.des {
    color: #c3c3c3; 
    font-size: 13px
}
.hd-detail__mark {
    height: 20px;
    border-left: 1px solid #eeeeee;
}
.body {
    background-color: #fff;
}
</style>
