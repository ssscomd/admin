<template>
    <Evaluator></Evaluator>
</template>
<script>
// 引入组件
import Evaluator from '@/components/evaluator/evaluator'
    export default {
        name: "evaluateObject",
        data() {
            return {currentRoute: this.$route.path};
        },
        // 挂载组件
        components: {
            Evaluator
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
<style lang='less' scoped="scoped">
   
    
</style>