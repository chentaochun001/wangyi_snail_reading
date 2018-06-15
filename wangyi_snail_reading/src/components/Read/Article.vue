<template>
    <div class="a">
        <mt-header title="书评正文" fixed class="header">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right" style="color: #ba977a; font-size: 13px;">只看1本书</mt-button>
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
}
</style>