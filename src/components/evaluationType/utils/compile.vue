<template>
    <div class="compileWrapper">
        <div class="compileWrapper_title">
            <h3>评价类型管理<span> > </span>评价类型编辑</h3>
        </div>
        <compilepage></compilepage>
    </div>
</template>
<script>
import Compilepage from './pages/compilepage';
export default {
    components:{
        Compilepage
    }
}
</script>
<style lang="less" scoped="scoped">
    .compileWrapper{        
        position: fixed;
        box-sizing: border-box;
        left : 320px;
        right : 0;
        top : 100px;
        bottom : 0;
        background:#dfdfdf;    
        padding-left:20px;
        padding-right:20px;
        .compileWrapper_title{
            width:100%;
            height:70px;
            line-height:70px;            
            overflow:hidden;
            h3{
                float:left;               
                font-size:20px;
                color:#343434;            
                font-weight:normal;
                span{
                    font-size:20px;
                    font-family: '宋体';
                }
            }
        }      
    }
</style>
