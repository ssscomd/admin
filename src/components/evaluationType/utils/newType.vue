<template>
    <div class="newTypeWrapper">
        <h3>
            评价类型管理<span> > </span>评价类型新建
        </h3>
        <newtypepage></newtypepage>
    </div>
</template>
<script>
import Newtypepage from './pages/newtypepage'
export default {
    components:{
        Newtypepage
    }
}
</script>
<style lang="less" scoped>
    .newTypeWrapper{
        position: fixed;
        left : 230px;
        right : 0;
        top : 60px;
        bottom : 0;  
        width:100%;
        height:762px;
        box-sizing: border-box;
        background:#dfdfdf;    
        padding-left:20px;
        padding-right:20px;  
        overflow-y: scroll;  
         h3{   
            height:70px;
            line-height:70px;            
            font-size:20px;
            color:#343434;            
            font-weight:normal;
            span{
                font-size:20px;
                font-family: '宋体';
            }
         }
    }
</style>


