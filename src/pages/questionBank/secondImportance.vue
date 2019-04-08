<template>
    <div>
        <Header></Header>
        <Content></Content>
    </div>
</template>
<script>
import Header from "@/components/second/header";
import Content from "@/components/second/content";
    export default {
        components:{
            Header,
            Content
        },
        name: "evaluateObject",
        data() {
            return {currentRoute: this.$route.path};
        },
        watch: {
            //监听路由，只要路由有变化(路径，参数等变化)都有执行下面的函数
            $route: {
                handler: function (val, oldVal) {
                    this.currentRoute = val.name;
                },
                deep: true
            }
        }
    };
</script>
<style scoped="scoped">
    h3 {
        margin-top: 10px;
        font-weight: normal;
    }
</style>