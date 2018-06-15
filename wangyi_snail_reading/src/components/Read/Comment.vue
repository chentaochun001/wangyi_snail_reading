<template>
    <div class="a">
        <mt-header title="书评正文" fixed class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button slot="right">只看1本书</mt-button>
        </mt-header>
    </div>
</template>
<script>
export default {
    
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
</style>