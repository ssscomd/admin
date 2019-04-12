
<template>
    <div class='questionnaireDox'>
        <div class='questionnaireTitle'>
            <span>评价问卷管理</span>
        </div>
        <search></search>
        <Detail></Detail>
    </div>
</template>
<script>
import Search from './pages1/search';
import Detail from './pages1/detail';
    export default {
        name: "evaluateObject",
        data() {
            return {currentRoute: this.$route.path};
        },
        components: {
            Search,
            Detail
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
<style lang="less" scoped="scoped">
    .questionnaireDox{
        .questionnaireTitle{
            span{
                width: 1168px;
                height: 64px;
                display: block;
                margin-left: 15px;
                line-height: 70px;
                font-size: 20px;
                color: #343434;

            }
        }
    }
    h3 {
        margin-top: 10px;
        font-weight: normal;
    }
</style>