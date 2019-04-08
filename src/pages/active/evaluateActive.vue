<template>
    <div id='root'>
  <div id='header'>
      <h3>评价活动管理 》评价活动管理</h3>
    </div>
    <div id='content'>
        <div id='conTop'>
           <h4>评价活动类型名称</h4>
           <input placeholder="请输入" id="input">
        </div>
        <div id="conBot">
          <div id='activeNex'>
            <button>搜索</button>
            <button>重置</button>
         </div>
        </div>
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
 #root{
   
  
     
      #header{
        background:#dfdfdf;
        height:50px;
        /* background:red; */
        border-bottom:1px solid black;
          h3{
              font-size:27px;
              margin-left:60px;
              line-height: 50px;
              color:gray;
              margin-top:-20px
          }
  }
      #content{
          #conTop{
              height:90px;
              border-bottom:1px solid black;
            h4{
                font-size:20px;
                color:black;
                margin-left:40px;
                margin-bottom:-20px;
                padding-top:10px
            }
              
              #input{
                 outline:none;
                 border:1px solid black;
                 width:192px;
                 height:30px;
                 margin-left:30px;
                 margin-top:20px
             }
            }
          #conBot{
              height:60px;

              #activeNex{
                   margin-left:0px;
                   height:50px;
                   font-size:15px;
                   
                   
                   
                   button {
                   border:none;
                   width:61px;
                   height:28px;
                   border:1px solid transparent;
                   outline:none;
                   margin-top:20px;
                   background:#0d1f42;
                   color:#fefefe;
                   margin-left:40px;
                   }
}
          }
      }
}
    
</style>