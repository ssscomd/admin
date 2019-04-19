<template>
    <div>
        <div class="ke">
           <div class="top">
            <h1>一级属性管理>一级属性新建</h1>           
        </div>
        <div class="top1">
            <h1>一级属性信息</h1>
        </div>
        <div class="top2">
             <h1>所属评价类型：</h1>
             <input type="text" value="选择评价类型"/>>
        </div>
        <div class="top3">
               <div class="top3a">                    <span>活动类型</span>
                   <span>评价类型图片</span>
                   <span>操作</span>
               </div>
               <div class="top3b">
                   <span>汽车</span>
                   <img/>
                   <span>查看删除</span>
               </div>
        </div>
        </div>      
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
       .ke{
           width: 1622px;
           height: 1350px;
           background: #dfdfdf;
           .top{
               width: 1582px;
               height: 80px;
               background:red;
               line-height: 80px;
               color: #343434;    
           }
           .top1{
               width: 1582px;
               height:125px;
               background: #fff;
               border-radius: 2px;
               color:#3876cb;
               line-height: 125px;
           }
           .top2{
               width: 1582px;
               height:148px;
               background:red;
               line-height: 148px
           }
           .top3{
              width: 1582px;
              height: 150px;
              background:yellow;
              .top3a{
                  width: 100%;
                  height: 60px;
              }
           }
       }
</style>
