<template>
    <div class="a">
        <mt-header :title="title" fixed class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button slot="right">只看1本书</mt-button> -->
        </mt-header>
        <v-touch class="content" :class="{'night-mode':nightMode}">
			<div>第一章: </div>
			<article ></article>
		</v-touch>
    </div>
</template>
<script>
export default {
    data() {
        return {
            title: '',
            nightMode: false, // 夜间/日间模式却换
        }
    },
    created() {
        let book = this.$route.query.book;
        console.log(book);
        this.title = book.name;
        console.log(this.title);
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
}
.content {
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
}
</style>