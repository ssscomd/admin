<template>
    <div class="container">
        <h3>
            这里是评价类型管理
        </h3>
        <evaluationType></evaluationType>
        <typecontent></typecontent>
    </div>
</template>
<script>
import EvaluationType from '@/components/evaluationType/evaluationType';
import Typecontent from '@/components/evaluationType/typecontent' ;
    export default {
        name: "evaluateObject",
        data() {
            console.log(this.$route.path)
            return {currentRoute: this.$route.path};           
        },
        components:{
            EvaluationType,
            Typecontent
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
    .container{
        box-sizing: border-box;
        width:100%;
        height:100%;
        background:rgba(235, 241, 246, 1);
        padding-left:20px;
        padding-right:20px;
        overflow-x: scroll;
        overflow-y: scroll;
        h3 {
            height:70px;
            line-height:70px;
            font-weight: normal;
        }
    }
    
</style>