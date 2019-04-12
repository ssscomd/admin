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
        .compileWrapper_title{
            width:100%;
            height:70px;
            line-height:70px;            
            h3{              
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
