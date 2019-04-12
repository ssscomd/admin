<template>
    <div class='search'>
        <form action='' method='get'>
            <ul>
                <li>
                    <span>评价问卷名称:</span>
                    <input type="text" name="" id="" value="请输入评价问卷名称">
                </li>
                <li>
                    <span>所属评价类型:</span>
                    <input type="text" name="" id="" value="请输入评价类型名称">
                </li>
                <li>
                    <span>创建时间:</span>
                    <select name="" id="sele">
                        <option value="请选择">请选择</option>
                        <option value="1">一天内</option>
                        <option value="2">一周内</option>
                        <option value="3">一月内</option>
                        <option value="4">一年内</option>
                    </select>
                </li>
                <p></p>
            </ul>
        
            <div>
                <button class='btn'>搜索</button>
                <button class='btn'>重置</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" scoped='scoped'>
    .search{
        width: 1168px;
        height: 130px;
        margin-left: 20px;
        border-radius: 5px;
        background: #fff;
        ul{
            list-style: none;
            width: 1168px;
            height: 80px;
            padding-left: 20px;
            clear: both;
            position: relative;
            li{
                float: left;
                width: 250px;
                height: 70px;
                margin-right: 50px;
                span{
                    display: block;
                    font-size: 16px;
                    margin: 8px 0px 2px 0px;
                    color: #333;
                }
                input{
                    width: 180px;
                    height: 30px;
                    border: 1px solid #c7c7c7;
                    border-radius: 6px;
                    font-size: 16px;
                    padding-left: 10px;
                    color: #999;
                }
                select{
                    width: 180px;
                    height: 30px;
                    border: 1px solid #c7c7c7;
                    border-radius: 6px;
                    font-size: 16px;
                    padding-left: 10px;
                    color: #999;
                }
            }
            p{
                display: block;
                width: 1120px;
                border-bottom: 1px solid #e5e5e5;
                position: absolute;
                bottom: 0px;
            }
        }
        
        div{
            width: 100%;
            height: 100%;
            margin-left: 20px;
            margin-top: 10px;
            // overflow: hidden;
            // clear: both;
            .btn{
                width: 80px;
                height: 30px;
                background: #263f73;
                border: none;
                font-size: 14px;
                color: #fefefe;
                border-radius: 6px;
                margin-right: 50px;
                float: left;
                background: -webkit-linear-gradient(90deg,#223f93,#263f73,#263f73,#223f93);
            }
        }
    }
</style>