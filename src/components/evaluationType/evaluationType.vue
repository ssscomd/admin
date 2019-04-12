<template>
    <div class="typeHeaderWraper">
        <div class="typeHeader">
            <div class="typeHeaderTop">
                <div class="typeHeaderTop_l">
                    <p>评价类型名称:</p>
                    <input type="text" placeholder="请输入评价类型名称">
                </div>
                <div class="typeHeaderTop_r">
                    <p>创建时间：</p>
                    <select name="" id="">
                        <option v-for="(item ,index) in list" :key="index">{{item}}</option>
                    </select>
                </div>
            </div>
            <p class="line"></p>
            <div class="btn">
                <button >搜索</button>
                <button >重置</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            list:['请选择','一天内','一周内','一月内','一年内','自定义：从...至...']
        }
    }
}
</script>
<style lang="less">
.typeHeaderWraper{
    width:1168px;
    height:121px;
    background:#fff;
    border-radius: 5px;
    .typeHeader{
        box-sizing: border-box;
        padding-left:20px;
        overflow: hidden;        
        .typeHeaderTop{ 
            height:70px;
            margin-bottom:10px;
            p{
                line-height:30px;
            }           
            .typeHeaderTop_l{
                float:left;
                margin-right: 100px;
                input{
                    width:148px;
                    height:28px;
                }
            }
            .typeHeaderTop_r{
                float:left;
                select{
                    width:204px;
                    height:27px;
                }
            }
        }
        .line{
            width:1121px;
            height:1px;
            background:#ccc;
        }
        .btn{
            
            button{
                background-color:#263f73;
                margin-top:6px;
                margin-right:20px;
                width:61px;
                height:28px;
                border-radius: 5px;
                border:1px solid #ccc;
                color:#fefefe;
            }
        }
        
    }
}
</style>

