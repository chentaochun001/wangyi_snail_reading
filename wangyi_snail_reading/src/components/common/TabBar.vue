<template>
    <mt-tabbar v-model="selected" fixed class="tab-bar">
        <mt-tab-item class="tab-item" id="home">
            <!-- <img slot="icon" src="../../assets/icons/read.png" class="tab-item__img"> -->
            <i class="iconfont icon-yuedu1"></i>
            <div class="tab-item__title">领读</div>
        </mt-tab-item>
        <mt-tab-item class="tab-item" id="catagory" >
            <i class="iconfont icon-fenlei2-copy-copy-copy"></i>
            <div class="tab-item__title">分类</div>
        </mt-tab-item>
        <mt-tab-item class="tab-item" id="desk" >
            <i class="iconfont icon-shu-copy"></i>
            <div class="tab-item__title">书桌</div>
        </mt-tab-item>
        <mt-tab-item class="tab-item" id="reader">
            <i class="iconfont icon-htmal5icon02-copy-copy"></i>
            <div class="tab-item__title">我的</div>
        </mt-tab-item>
    </mt-tabbar>
    
</template>
<script>
export default {
    data() {
        return {
            selected: 'reader',
            active: 'home'
        }
    },
    methods: {
        click() {
            console.log(this.selected)
        }
    }
}
</script>
<style scoped>
.tab-bar {
   border-top: 2px solid #ededed;
}
.tab-item {
    color: #b3b3b3;
}
.iconfont {
    width: 26px;
    height: 26px;
    font-size: 24px;
    padding-top: 5px;
}
.tab-item.is-selected {
    background-color: #fff;
    color: #444444;
}
.tab-item__title {
    padding-top: 5px;
}
</style>
