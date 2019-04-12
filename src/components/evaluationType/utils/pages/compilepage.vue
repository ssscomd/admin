<template>
    <div class="compilecontentwrapper">
        <div class="compilecontentwrappertitle">
            <h4>评价类型信息</h4>
        </div>
        <div class="typeinfodetail">
            <div class="typename">
                <span><b>*</b>评价类型名称 ： </span>
                <div class="name">
                    <p>汽车</p>
                </div>
            </div>
            <div class="typeimg">
                <span><b>*</b>评价类型图片 ： </span>
               
                <img src="../../img/图层10.png" alt="">
                <button>删除</button>               
            </div>
            <div class="addparams">
                <span><b>*</b>添加参数 ： </span>
                <button>添加</button>
            </div>
            <div class="typeinfoparams">
                <div class="paramstitle">
                    <h4 class="left">参数信息</h4>
                    <h4 class="right">操作</h4>
                </div>
                <ul>
                    <li v-for="(item,index) of paramslist" :key='index'>
                        <p class="left">{{item.name}}</p>
                        <p class="right">
                            <span>{{item.com}}</span>
                            <span class="red">{{item.del}}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            paramslist:[
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                },
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                },
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                },
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                },
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                },
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                },
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                },
                {
                    name:'名称',
                    com:'编辑',
                    del:'删除'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .compilecontentwrapper{
        width:1168px;
        height:762px;
        border-radius: 5px;
        background:#fff;
        .compilecontentwrappertitle{
            width:1168px;
            height:42px;
            line-height:42px;
            overflow:hidden;
            font-size:14px;
            border-bottom:1px solid #e5e5e5;
            margin-bottom:20px;
            h4{
                float: left;
                margin-left:20px;
                font-weight: normal;
                color:#333;               
            }
        }
        .typeinfodetail{
            width:1168px;
            box-sizing: border-box;
            padding-left:20px;
            overflow: hidden;
             b{
                    color:#fb4444;
                }
            .typename{                
                height:28px;
                line-height:28px;
                font-size:12px;
                margin-bottom:20px;
                .name{
                    display:inline-block;
                    width:153px;
                    height:28px;
                    line-height:28px;
                    border:1px solid #c7c7c7;
                    border-radius: 5px;
                }
            }
            .typeimg{               
                height:82px;
                font-size:12px;
                margin-bottom:10px;
                position:relative;
                margin-bottom:30px;
                span{
                    line-height:82px;
                }
                img{
                    width:153px;
                    height:82px;
                    vertical-align: middle;
                }
                button{
                    width:64px;
                    height:20px;
                    background:#ff2d2d;
                    border:none;
                    border-radius: 10px;
                    color:#fff;
                    position:absolute;
                    bottom:0;
                    margin-left:20px;
                }
            }
            .addparams{
                margin-bottom:20px;
                button{
                    border:none;
                    width:64px;
                    height:20px;
                    background:#263f73;
                    border-radius: 10px;
                    color:#fff;
                }
            }
            .typeinfoparams{
                width:994px;               
                margin:0 auto;
                .left{
                        float:left;
                    }
                    .right{
                        float:right;
                    }
                .paramstitle{
                    width:994px;
                    height:56px; 
                    background:#e5e5e5;
                    font-size:14px;
                    line-height:56px;
                    h4{
                        display:inline-block;
                        width:200px;
                        text-align:center;
                    }
                    
                }
                ul{
                    li{
                        width:100%;
                        height:44px;
                        list-style:none;
                        p{
                            display:inline-block;
                            width:200px;
                            text-align:center;
                            span{

                            }
                        }
                    }
                }
            }
        }
    }
</style>
