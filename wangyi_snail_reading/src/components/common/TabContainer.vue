<template>
    <mt-tab-container v-model="selected" >
            <mt-tab-container-item id="home">
                <mt-cell  title="home">
                    领读
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="catagory">
                <mt-cell  title="catagory">
                    分类               
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="desk">
                <mt-cell  title="desk">  
                    书桌               
                </mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="reader">
                <mt-cell  title="reader">
                    我的              
                </mt-cell>
            </mt-tab-container-item>
    </mt-tab-container>
</template>
<script>
export default {
    data() {
        return {
            selected: ''
        }
    }
}
</script>
<style>

</style>
