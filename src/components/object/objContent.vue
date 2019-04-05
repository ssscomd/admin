<template>
    <div class="content-container">
        <div class="tit">
            <button type="button" class="ivu-btn ivu-btn-primary btn1"><span>+新建评价活动</span></button>
            <button type="button" class="ivu-btn ivu-btn-primary"><span>导出</span></button>
        </div>
        <ul class="type">
            <span>评价对象名称</span>
            <span>评价对象图片</span>
            <span>所属评价类型</span>
            <span>创建时间</span>
            <span>操作</span>
        </ul>
        <ul>
            <li>
                <div>福田汽车</div>
                <div>图片</div>
                <div>汽车</div>
                <div>2018-01-01</div>
                <div>
                    <span>编辑</span>
                    <span>参考</span>
                    <span>删除</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scope>
    .content-container{
        width: 980px;
        height: 300px;
        background: #fff;
        margin-top: 30px;
        .tit{
            box-sizing: border-box;
            padding: 10px 20px;
            button{
                background: #0e1c3b;
                border: none;
                border-radius: 5px;
            }
            .btn1{
                margin-right:773px; 
            }
        }
        .type{
            width: 930px;
            height: 80px;
            background: #e5e5e5;
            li{
                flex: 1;
                text-align: center;
                float: left;
            }
        }
    }
</style>
