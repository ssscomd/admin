<template>
    <div id='root'>
  <div id='header'>
      <ActivHea></ActivHea>
    </div>
   </div>
</template>
<script>
import ActivHea from "@/components/active/header.vue";
    export default {
        name: "evaluateActive",
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
        },
        components:{
            
        }
    };
</script>
<style scoped="scoped">
    h3 {
        margin-top: 10px;
        font-weight: normal;
    }
</style>