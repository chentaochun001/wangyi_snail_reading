<template>
    <div>
        <mt-header :title="title" fixed class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="body">
            <div class="body-content center">{{stack.state}}</div>
            <div class="body-publisher">
                <img :src="stack.typeCover">
                <span>{{stack.publisher}}</span>
            </div>
        </div>
        <div class="footer">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">精选</mt-tab-item>
                <mt-tab-item id="2">7日在读榜</mt-tab-item>
                <mt-tab-item id="3">新上架</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                     <div class="footer-book" v-for="(item, index) in stack.bookList" :key="index" @click="bookDetail(item)">
                        <img :src="item.bookCover"/> 
                        <div class="footer-name">{{item.bookName}}</div>
                    </div>     
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="footer-book" v-for="(item, index) in stack.bookList" :key="index" @click="bookDetail(item)">
                        <img :src="item.bookCover"/> 
                        <div class="footer-name">{{item.bookName}}</div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <div class="footer-book" v-for="(item, index) in stack.bookList" :key="index" @click="bookDetail(item)">
                        <img :src="item.bookCover"/> 
                        <div class="footer-name">{{item.bookName}}</div>
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
    

</template>
<script>
export default {
    data() {
        return {
            stack: '',
            title: '',
            selected: '1'
        }
    },
    created() {
        this.stack = this.$route.query.stack;
        this.title = this.$route.query.stack.bookTypes;
    },
    methods: {
        bookDetail(item) {
            this.item = item;
            console.log("你点击了");
        }
    }
}
</script>
<style scoped>
.header {
    width: 100%;
    height: 40px;
    background-color: #fff;
    color: #333333;
    border-bottom: 1px solid #ededed;
    font-weight: bold;
    text-decoration: none; 
}
.body { 
    width: 90%;
    padding-top: 40px;  
    height: 150px;  
    margin: 0 auto;        
}
.body-content {
    height: 120px;
}
.body-publisher {
   float: right;
   height: 30px;
   line-height: 30px;
   display: flex;
   align-items: center;
}
.body-publisher img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
}
/* .mt-tab-item {
    height: 16px;
    line-height: 16px;
    font-size: 16px;
} */
.footer {
    width: 90%;
    margin: 0 auto;
}
.footer-book {
    float: left;
    width: 90px;
    height: 140px;
    margin: 20px 10px;
}
.footer-book img {
    width: 90px;
    height: 100px;
}
.footer-name {
    display: block;
    position: relative;
    height: 30px;    
    margin: 0 auto;
    /* top: 50%;
    transform: translate(-50%); */
    font-size: 14px;
}
</style>
