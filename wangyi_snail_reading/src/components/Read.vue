<template>
<!-- 领读界面 -->
    <div class="wrapper">
        <mt-header title="领读" class="header" fixed>
            <router-link slot="right" to="/" style="text-decoration: none; width: 100px; height: 40px;">
                <span style="display:inline-block;text-align: center;">写书评</span>
                <img src="../assets/images/notes.jpg" width="40" height="40">
            </router-link>
        </mt-header>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li class="acticle" v-for="(item, index) in acticleList" :key="index">
                <div class="acticle-header">
                    <img :src="item.avatar" class="acticle-header__avatar">
                    <span class="acticle-header__username">{{item.username}}</span>
                </div>
                <div class="acticle-body">
                    <router-link class="acticle-body__content">{{item.content}}</router-link>
                    <router-link class="acticle-body__details" to="">
                        <img :src="item.bookImage" class="acticle-body__bookImage">
                        <div class="acticle-body__qustion">
                            来自问题：{{item.qustion}}
                        </div>
                        <div class="acticle-body__bookName">
                            {{item.bookName}}
                        </div>
                    </router-link>
                </div>
                <div class="acticle-footer">
                    <span class="acticle-footer__hitNum">{{item.hitnumber}}</span>
                    <span class="acticle-footer__dianZan">
                        <span>{{item.dianzan}}</span>
                        <img src="" alt="">
                    </span>
                </div>
            </li>
        </ul>
            
    </div>
    
</template>
<script>
export default {
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
        }
    }
    
}
</script>
<style scoped>
.header {
    background-color: #fff;
    color: #333333;
    border-bottom: 1px solid #ededed;
}
</style>
