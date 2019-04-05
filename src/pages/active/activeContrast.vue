<template>
   <div id='root'>
       
    <div id='header'>
      <h3>评价活动管理 》评价活动对比</h3>
    </div>
    <div id='content'>
        <div id='conTop'>
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
        name: "activeContrast",
        data() {
            return {currentRoute: this.$route.path};
        },
        components:{
           ActivHea
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
<style lang='less' scoped>
#root{
    height:100%;
  
     
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
      #content{
          #conTop{
              height:90px;
              background:red;
              #input{
                 outline:none;
                 border:1px solid black;
                 width:192px;
                 height:30px;
                 margin-left:0px
             }
            }
          #conBot{
              height:60px;
              background:green;
              #activeNex{
                   margin-left:0px;
                   height:50px;
                   font-size:15px;
                   
                   
                   
                   button {
                   border:none;
                   width:77px;
                   height:28px;
                   border:1px solid transparent;
                   outline:none;
                   margin:10px;
                   background:#0d1f42;
                   color:#fefefe;
                   }
}
          }
      }
}
    
</style>