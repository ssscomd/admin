<template>
    <div class='new'>
        <p class='setUpHeader'>评价问卷管理>评价问卷新建</p>
        <div class='contentBox'>
            <p>评价问卷组建</p>
            <div class='toType'>
                <span class='xing'>*</span>所属评价类型：<span class='kuang'>选择评价类型</span>
            </div>
            <div class='typeShow'>
                <div class='typeShowTitle'>
                    <span>活动类型</span>
                    <span>评价类型图片</span>
                    <span>操作</span>
                </div>
                <div class='typeShowText'>
                    <span>汽车</span>
                    <img src="../img/评价问卷新建-图片.png" alt="">
                    <div>
                        <span>查看</span>
                        <span>删除</span>
                    </div>
                </div>
            </div>
            <div class='addType'>
                <p>+ 添加一级属性</p>
                <ul>
                    <li>
                        <img src="../img/评价问卷管理-减号.png" alt="">
                        <div>进出方便性</div>
                        <span>+ 添加二级属性</span>
                        <p>删除</p>
                    </li>
                    <li>
                        <img src="../img/评价问卷管理-减号.png" alt="">
                        <div>前排进出</div>
                        <span>+ 添加二级属性</span>
                        <p>删除</p>
                    </li>
                    <li>
                        <img src="../img/评价问卷管理-减号.png" alt="">
                        <div>门</div>
                        <span>+ 添加二级属性</span>
                        <p>删除</p>
                    </li>
                    <li>
                        <img src="../img/评价问卷管理-减号.png" alt="">
                        <div>门槛</div>
                        <span>+ 添加二级属性</span>
                        <p>删除</p>
                    </li>
                    <li>
                        <img src="../img/评价问卷管理-加号.png" alt="">
                        <div>方向盘</div>
                        <span>+ 添加二级属性</span>
                        <p>删除</p>
                    </li>
                    <li>
                        <img src="../img/评价问卷管理-加号.png" alt="">
                        <div>A柱</div>
                        <span>+ 添加二级属性</span>
                        <p>删除</p>
                    </li>
                    <li>
                        <img src="../img/评价问卷管理-加号.png" alt="">
                        <div>门洞</div>
                        <span>+ 添加二级属性</span>
                        <p>删除</p>
                    </li>
                </ul>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="less" scoped>
    .new{
        margin: 20px 0px 0px 20px;
        .setUpHeader{
            font-size: 19px;
            margin-bottom: 8px;
        }
        .contentBox{
            width: 1168px;
            height: 975px;
            background: #fff;
            border-top: 2px solid #808080;
            padding: 0px 0px 0px 20px;
            p{
                display: block;
                width: 1153px;
                height: 38px;
                color: #108EE9;
                font-size: 14px;
                line-height: 40px;
                border-bottom: 1px solid #D7D7D7;
            }
            .toType{
                font-size: 13px;
                .xing{
                    color: red;
                }
                .kuang{
                    display: inline-block;
                    width: 94px;
                    height: 22px;
                    border: 1px solid #D7D7D7;
                    font-weight: bold;
                    color: #9898B1;
                    text-align: center;
                    line-height: 22px;
                }
            }
            .typeShow{
                margin-left: 50px;
                margin-top: 30px;
                .typeShowTitle{
                    width: 1048px;
                    height: 36px;
                    border: 1px solid #EBF1F6;
                    span{
                        display: inline-block;
                        font-weight: bold;
                        margin: 0px 160px 0px 120px;
                        line-height: 36px;
                        color: #666666;
                    }
                }
                .typeShowText{
                    width: 1048px;
                    height: 59px;
                    border-right: 1px solid #EBF1F6;
                    border-bottom: 1px solid #EBF1F6;
                    border-left: 1px solid #EBF1F6;
                    span{
                        display: inline-block;
                        color: #666666;
                        margin-left: 130px;
                        margin-right: 120px;
                    }
                    img{
                        display: inline-block;
                        width: 88px;
                        height: 43px;
                        margin-left: 165px;
                        margin-right: 120px;
                    }
                    div{
                        display: inline-block;
                        margin-left: 130px;
                        span{
                            margin-left: 0px;
                            margin-right: 20px;
                        }
                    }
                }
            }
            .addType{
                p{
                    display: block;
                    width: 110px;
                    height: 25px;
                    background: #F2F2F2;
                    margin-top: 25px;
                    border-radius: 4px;
                    line-height: 30px;
                    text-align: center;
                }
                ul{
                    width: 1120px;
                    height: 454px;
                    border: 1px solid #797979;
                    margin-top: 20px;
                    padding: 5px 10px 5px 10px;
                    li{
                        list-style: none;
                        width: 1108px;
                        height: 53px;
                        padding: 15px 0px;
                        border-bottom: 1px solid #EBEBEB;
                        div{
                            float: left;
                        }
                        img{
                            float: left;
                        }
                        span{
                            float: left;
                        }
                        p{
                            display: block;
                            float: left;
                            margin: 0px;
                        }
                    }
                }
            }
        }
    }
</style>