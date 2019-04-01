<template>
    <div class="home">
        <div class="header">
            <div class="header-left">人机工程主观评价系统</div>
            <div class="header-right">退出</div>
        </div>
        <div class="container-wrapper">
            <div class="side-bar">
                <Tree-view></Tree-view>
            </div>
            <div class="continer">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import TreeView from "./TreeView";
export default {
    components: {
        TreeView
    },
    name: "Home"
};
</script>
<style scoped>
.home{
    width: 100%;
    height: 100%;
}
.header{
    height: 20px;
    width: 100%;
    background: blue;
    
}
.header::after{
    content: "";
    display: block;
    overflow: hidden; 
    clear: both;
    height: 0;
}
.header-left{
    float: left;
    width: 300px;
    height: 100%;
    text-align: center;
    background: skyblue;
}
.header-right{
    float: right;
    width: 200px;
    text-align: center;
    color: white;
}

.container-wrapper{
    width: 100%;
}
.side-bar {
    width: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 14px;
    position: absolute;
    left: 0;
}
.continer {
    padding-left: 320px;
}

</style>