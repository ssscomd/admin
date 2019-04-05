<template>
    <div class="content-container">
        <div class="tit">
            <button type="button" class="ivu-btn ivu-btn-primary btn1"><span>+新建评价活动</span></button>
            <button type="button" class="ivu-btn ivu-btn-primary"><span>导出</span></button>
        </div>
        <ul class="type">
            <li>评价对象名称</li>
            <li>评价对象图片</li>
            <li>所属评价类型</li>
            <li>创建时间</li>
            <li>操作</li>
        </ul>
        <ul class="content">
            <li>
                <div>福田汽车</div>
                <div>
                    <img src="./images/图层5.png" alt="">
                </div>
                <div>汽车</div>
                <div>2018-01-01</div>
                <div>
                    <span>编辑</span>
                    <span>参考</span>
                    <span>删除</span>
                </div>
            </li>
           <li>
                <div>福田汽车</div>
                <div>
                    <img src="./images/图层5.png" alt="">
                </div>
                <div>汽车</div>
                <div>2018-01-01</div>
                <div>
                    <span>编辑</span>
                    <span>参考</span>
                    <span>删除</span>
                </div>
            </li>
            <li>
                <div>福田汽车</div>
                <div>
                    <img src="./images/图层5.png" alt="">
                </div>
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
        width: 1080px;
        height: 300px;
        background: #fff;
        margin-top: 30px;
        padding: 0 0 0 30px;
        .tit{
            box-sizing: border-box;
            padding: 10px 0 10px;
            button{
                background: #0e1c3b;
                border: none;
                border-radius: 5px;
            }
            .btn1{
                margin-right:864px; 
            }
        }
        .type{
            width: 1030px;
            height: 60px;
            background: #e5e5e5;
            box-sizing: border-box;
            li{
                width: 216px;
                display :block;
                text-align: center;
                float: left;
                line-height: 60px;
                
            }
        }
        .type:after{
            content: "";
            display: block;
            clear: both;
            height: 0;
            overflow: hidden;
        }
        .content{
            list-style: none;
            width: 1030px;
            li{
                width: 1030px;
                height: 80px;
                border-bottom: 1px solid #999;
                div{
                    width: 216px;
                    display :block;
                    text-align: center;
                    float: left;
                    line-height: 80px;
                    height: 80px;
                    img{
                        height: 70px;
                        width: auto;
                    }
                }
            }
            li:after{
                content: "";
                display: block;
                clear: both;
                height: 0;
                overflow: hidden;
            }
        }
    }
</style>
