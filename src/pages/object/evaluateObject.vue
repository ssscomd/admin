<template>
    <h3>
        <ObjHeader></ObjHeader>
        <!-- <Content></Content> -->
        
    </h3>
</template>
<script>
    import ObjHeader from "@/components/object/objHeader";
    export default {
        name: "evaluateObject",
        data() {
            return {
                    currentRoute: this.$route.path
                };
        },
        components: {
            ObjHeader,
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