<template>
    <div class="typecontentWrapper">
        <div class="btn">
            <button>+ 新建评价类型</button>
        </div>
        <div class="typecontenttitle">            
                <span v-for="(item,index) of typecontentlist" :key="index">{{item}}</span>          
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            typecontentlist:[
                '评价类型名称',
                '评价类型图片',
                '状态',
                '创建时间',
                '操作']
        }
    }
}
</script>
<style lang="less" scoped>
    .typecontentWrapper{
        width:1168px;
        height:605px;
        margin-bottom:20px;
        margin-top:10px;
        background:#fff;
        padding-left:20px;
        .btn{  
            overflow:hidden;          
            button{
                width:131px;
                height:28px;
                background:rgba(16, 142, 233, 1);
                border:1px solid #fff;
                border-radius: 5px;
                float:left;
                margin-top:10px;
                color:#fff;
            }
        }
        .typecontenttitle{
            margin-top:10px;
            width:1120px;
            height:56px;
            line-height:56px;
            background:rgba(243, 243, 243, 1);
            font-size:14px;
            span{
                display:inline-block;
                width:224px;
            }
        }
    }
</style>
