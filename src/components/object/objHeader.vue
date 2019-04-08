<template>
    <div class="header-container">
        <h4>评价对象管理</h4>
        <div class="header-content">
            <div class="content-top">
                <div class="name">
                    <p>评价对象名称：</p>
                    <input type="text" placeholder="请输入评价对象名称">
                </div>
                <div class="type">
                    <p>所属评价类型：</p>
                    <input type="text" placeholder="请输入评价类型名称">
                </div>
                <div class="time">
                    <p>创建时间：</p>
                    <select name="" id="">
                        <option value="一天内">...请选择...</option>
                        <option value="一天内">一天内</option>
                        <option value="一周内">一周内</option>
                        <option value="一月内">一月内</option>
                        <option value="一年内">一年内</option>
                        <option value="自定义：从...至...">自定义：从...至...</option>
                    </select>
                </div>

            </div>
            <div class="button">
                <button type="button" class="ivu-btn ivu-btn-primary"><span>搜索</span></button>
                <button type="button" class="ivu-btn ivu-btn-primary"><span>重置</span></button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scope="scope">
    .header-container{
        h4{
            font-size: 18px;
        };
        .header-content{
            width: 1080px;
            height: 120px;
            background: #fff;
            padding: 10px 0 10px 30px;
            box-sizing: border-box;
            margin-top: 20px;
            .content-top{
                position: relative;
                margin-bottom: 14px;
            }
            .button{
                box-sizing: border-box;
                padding-left: 150px;
                
                button{
                    margin-right: 50px;
                    background: #0e1c3b;
                    border: none;
                    border-radius: 5px;
                }
            }
        };
        .content-top::after{
            content: '';
            display: block;
            clear: both;
            height: 0;
            overflow: hidden;
        }
        .name,.type,.time{
            float: left;
            margin-right: 20px;
            p{
                font-size: 16px;
                line-height: 30px;
                height: 36px;
            }
        };
        .time:after{
            content: "";
            display: block;
            height: 1px;
            width: 1030px;
            background: #333;
            position: absolute;
            bottom: -8px;
            left: 0;
        };
        
    }
</style>