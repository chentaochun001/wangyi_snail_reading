<template>
 <!-- 书桌界面 -->
<div class="container">
    <!-- 头部 时间显示 -->
    <div class="page-hd center">
        <div class="page-hd__min">60</div>
        <div class="page-hd__dd">分钟</div>
        <div class="page-hd__xiala">
            <img class="xiala" src="../assets/images/xiala.png" />
        </div>
        <div class="page-hd__desk">
            <img class="desk" src="../assets/images/desk.jpg" />
        </div>
    </div>
    <!-- 书桌轮播 -->
    <div class="page-bd">
        <mt-swipe class="swipe" :auto="4000">
            <mt-swipe-item v-for="(item, index) in bookList" :key="index" @click="readBook()" >
                <div class="swipe-books center">
                    <img :src="item.image"/>
                </div>
            </mt-swipe-item>
        </mt-swipe>
        <mt-swipe class="detail" :auto="4000" :show-indicators="false">
            <mt-swipe-item v-for="(item, index) in bookList" :key="index">
                <div class="detail-readings shenglue">{{item.name}}</div>
                <div class="detail-items center">
                    <div>{{item.readerNum}}人在读</div>
                    <img src="../assets/images/go.png" />
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div> 
</div>
</template>
<script>
import book1 from './../assets/images/book1.jpg'
import book2 from './../assets/images/book2.jpg'
import book3 from './../assets/images/book3.jpg'
export default {
    data() {
        return {
            bookList: [
                {
                    id: 1,
                    image: book1,
                    name: '理智与情感',
                    readerNum: '240',
                    content: ''
                },
                {
                    id: 2,
                    image: book2,
                    name: '傲慢与偏见',
                    readerNum: '1970',
                    content: ''
                },
                {
                    id: 3,
                    image: book3,
                    name: '小妇人',
                    readerNum: '4625',
                    content: ''
                }
            ]
        }
    },
    methods: {
        readBook() {
            this.$route.push()

        }
    }
}
</script>
<style scoped>
.container {
    background-color: #fff;
}
.page-hd {
    position: relative;
    width: 100%;
    height: 60px;
}
.page-hd__min {
    font-size: 20px;
    color: #444;
    line-height: 20px;
    font-family: bold;
}
.page-hd__dd {
    font-size: 16px;
    color:#B3B3B3;
    margin-left: 5px;
}
.page-hd__xiala img{
    width: 20px;
    height: 30px;
    margin-left: 10px;
}
.page-hd__desk {
    position: absolute;
    width: 60px;
    height: 60px;
     margin-left: 40%;
}

.page-bd {
    width: 100%;
}
.swipe {
    width: 100%;
    height: 420px;
}
.swipe-books img {
    width: 200px;
    height: 300px;
    margin-top: 80px; 
    border-radius: 8px;  
}
/* .mint-swipe-indicator.is-active {
    background: red;
} */
.detail {
    width: 100%;
    height: 200px;
}
.detail-readings {
    margin-top: 20px;
    font-size: 20px;
    color: #444;
    font-weight: bold;
    text-align: center;
    /* overflow: hidden;
    text-overflow:ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical; */
    -webkit-line-clamp:1; 
}
.detail-items {
    width: 100%;
    height: 40px;
    text-align: center;
    margin-top: 10px;
}
.detail-items>div {
    height: 25px;
    font-size: 15px;
    color: #B3B3B3;
}
.detail-items img {
    width: 26px;
    height: 26px;
    margin-left: 5px;
}
</style>
