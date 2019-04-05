<template>
    <div id='root'>
  <div id='header'>
      <h3>评价活动管理 》 评价活动</h3>
    </div>
     <ActivHea></ActivHea>
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
            ActivHea
        }
    };
</script>
<style lang="less" scoped>
 #header{
       
        height:40px;
        /* background:red; */
        border-bottom:1px solid black;
        h3{
              font-size:27px;
              margin-left:60px;
              line-height: 40px;
              color:gray
        }


    }
    
</style>