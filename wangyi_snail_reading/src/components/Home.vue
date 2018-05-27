<template>
<!-- 主页面 -->
    <div class="page-tabbar">
        <mt-tab-container v-model="selected" swipeable>
            <!-- 领读界面 -->
            <mt-tab-container-item id="read">
                <Read></Read>
            </mt-tab-container-item>
            <!-- 分类界面 -->
            <mt-tab-container-item id="catagory">
                <Catagory></Catagory>
            </mt-tab-container-item>
            <!-- 书桌界面 -->
            <mt-tab-container-item id="desk">
                <Desk></Desk>
            </mt-tab-container-item>
            <!-- 我的界面 -->
            <mt-tab-container-item id="mine">
                <Mine></Mine>
            </mt-tab-container-item>
        </mt-tab-container>

        <!-- TabBar 的内容-->
        <mt-tabbar v-model="selected" fixed class="tab-bar">
            <mt-tab-item class="tab-item" id="read">
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
            <mt-tab-item class="tab-item" id="mine">
                <i class="iconfont icon-htmal5icon02-copy-copy"></i>
                <div class="tab-item__title">我的</div>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
import Read from './Read.vue'
import Catagory from './Catagory.vue'
import Desk from './Desk.vue'
import Mine from './Mine.vue'
export default {
    data() {
        return {
            selected: 'mine',
        }
    },
    components: {
        Read,
        Catagory,
        Desk,
        Mine
    }
}
</script>
<style scoped>
.tab-bar {
   border-top: 1px solid #ededed;
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
