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
@import url("./common/style/index.less");
.header-container{
    position : fixed ;
    top: 0;
    left: 0;
    right: 0;
    height : 80px;
    line-height: 80px;
    background: #162d5f;
    color : #fff;
    font-family: "PingFang-SC-Medium";
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
    overflow-y: hidden;
    overflow-x: hidden;
    font-size: 14px;
    position: fixed;
    top: 80px;
    left: 0;
    bottom: 0;
    background: #0e1c3b;
    text-align: center;
    color: #fff;
}
.continer {
    position: fixed;
    left : 300px;
    right : 0;
    top : 100px;
    bottom : 0;
    color: #fff;
}

</style>