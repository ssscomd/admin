<template>
    <div class="home">
        <div class="header-container">
            <Header></Header>
        </div>
        <div class="side-bar">
            <Tree-view></Tree-view>
        </div>
        <div class="continer">           
            <router-view></router-view>
        </div>
        
    </div>
</template>
<script>
import TreeView from "./TreeView";
import Header from "@/components/common/header";
export default {
    components: {
        TreeView,
        Header
    },
    name: "Home"
};
</script>
<style lang="less" scoped>

    
    .header-container{
        position : fixed ;
        top: 0;
        left: 0;
        right: 0;
        height : 100px;
        line-height: 100px;
        background: blue;
        
    };
    .header-container::after{
        content: "";
        display: block;
        height: 0;
        clear: both;

    }

    .side-bar {
        width: 300px;
        height: auto;
        overflow-y: auto;
        overflow-x: hidden;
        font-size: 14px;
        position: fixed;
        top: 100px;
        left: 0;
        bottom: 0;
    }
    .continer {
        position: fixed;
        left : 320px;
        right : 0;
        top : 100px;
        bottom : 0;
    }

</style>