<template>
    <div class="obj">
        <ObjHeader></ObjHeader>
        <ObjContent></ObjContent>
    </div>
</template>
<script>
    import ObjHeader from "@/components/object/objHeader";
    import ObjContent from "@/components/object/objContent";
    export default {
        name: "evaluateObject",
        data() {
            return {
                    currentRoute: this.$route.path
                };
        },
        components: {
            ObjHeader,
            ObjContent
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
    .obj{
        padding: 30px 0 0 30px;

    }
</style>