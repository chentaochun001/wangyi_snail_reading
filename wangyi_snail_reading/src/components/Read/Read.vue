<template>
<!-- 领读界面 -->
    <div>
        <mt-header title="领读" class="header" fixed>
            <div slot="right" class="header-comment" @click="Comment()">
                <div class="header-comment__del">写书评</div>
                <img src="../../assets/images/notes.jpg" width="40" height="39" style="float: right;">
            </div>
        </mt-header>
        <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" class="body">         -->
        <div class="body">
            <div class="acticle" v-for="(item, index) in acticleList" :key="index">
                <div class="acticle-header">
                    <img :src="item.avatar" class="acticle-header__avatar">
                    <span class="acticle-header__username">{{item.username}}</span>
                </div>
                <div class="acticle-body">
                    <!-- <router-link class="article-body__content" :to="{path: '/article', query: {article: item}}">{{item.content}}</router-link> -->
                    <div class="acticle-body__content" @click="goActicle(item)">{{item.content}}</div>
                    <div class="acticle-body__details" @click="goActicle(item)">
                        <img :src="item.bookImage" class="acticle-body__bookImage">
                        <div class="acticle-body__qustion">来自问题：{{item.question}}</div>
                        <div class="acticle-body__bookName">{{item.bookName}}</div>
                    </div>
                </div>
                <div class="acticle-footer">
                    <span class="acticle-footer__hitNum">{{item.hitnumber}}点击</span>
                    <span class="acticle-footer__dianZan">
                        <span>{{item.dianzan}}</span>
                        <i class="iconfont icon-dianzan" style="font-size: 20px;"></i>
                    </span>
                </div>
            </div>
        </div>
            
    </div>
    
</template>
<script>
import avatar1 from '../../assets/images/1.jpg'
import eqbook from '../../assets/images/eqbook.jpg'
export default {
    data() {
        return {
            acticleList: [
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高?二u覅哦亲围殴i让父亲味道和坎坷艰辛的',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子?哈佛的看了肥肉棋谱而且欧赔日王培荣亲王',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？二u覅哦亲围殴i让父亲味道和坎坷艰辛的',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
                {
                    avatar: avatar1,
                    username: '蜗牛回答',
                    picture: '',
                    content: '戈尔曼表示情商对于个人成功与职场顺利以及家庭幸福都至关重要，并且情商教育越早越好，融入到我们所谓的义务教育中去。那在你身边，人的哪些行为让你觉得他的情商很高？',
                    bookImage: eqbook,
                    question: '你见过哪些情商很高的例子？',
                    bookName: '《情商系列 （全六册）》',
                    hitnumber: 676,
                    dianzan: 5
                },
            ]
        }
    },
    methods: {
        loadMore() {
            this.loading = true;
            setTimeout(() => {
                let len = this.acticleList[this.length - 1];
                for(let i = 1; i <= 10; i++) {
                    this.acticleList.push(len + i);
                }
                this.loading = false;
            }, 2000);
        },
        goActicle(item) {
            // item 表示每一条书评的数据
            this.item = item;
            console.log(this.item);
            this.$router.push({
                name: 'article', 
                query:{article_list: this.item}
            });
        }
    }
    
}
</script>
<style scoped>
.header {
    background-color: #fff;
    color: #333333;
    border-bottom: 1px solid #ededed;
    font-weight: bold;
    text-decoration: none; 
    font-size: 18px;
}
.header-comment {
    width: 90px; 
    color: #ba977a;  
    font-size: 16px;  
}
.header-comment__del {
    float: left;    
    height: 40px;
    line-height: 40px;
    text-align: center; 
}
.body { 
    margin-top: 40px;       
}
.acticle {
    width: 100%;
    padding-top: 15px;    
    background-color: #fff;
    margin-bottom: 10px;
}
.acticle-header, .acticle-body, .acticle-footer {
    width: 90%;
    margin: 0 auto; 
}
.acticle-header__avatar {
    float: left;
    width: 50px;
    height: 50px;  
    margin-right: 15px;
    border-radius: 50%;    
}
.acticle-header__username {
    display: inline-block;
    height: 50px;        
    line-height: 50px;    
}
.acticle-body__content, .acticle-body__details {
    display: inline-block;
    text-decoration: none; 
    color: black;
    font-size: 16px;    
}
.acticle-body__content {
    margin: 10px 0;
    width: 100%;
    height: 100px;
    line-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;  
}
.acticle-body__details {
    width: 100%;
    height: 96px;    
    background-color: #f7f7f7;
    border-radius: 5px;
}
.acticle-body__bookImage {
    float: left;
    width: 52px;
    height: 72px;
    margin: 12px;
}
.acticle-body__qustion {
    float: left;
    width: 200px;
    height: 40px;
    margin-top: 14px;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.acticle-body__bookName {
    float: left;
    width: 200px;
    height: 42px;
    line-height: 42px;
    font-size: 14px;
    color: #bababa;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.acticle-footer {
    display: flex;
    align-items: center;
    height: 45px;
    color: #b9b9b9;
}
.acticle-footer__hitNum {
    flex: 1;
}
.acticle-footer__dianZan {
    flex: 1;
    text-align: right;
}
</style>
