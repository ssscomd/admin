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
            <p></p>
            <div>
                <button></button>
                <button></button>
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
    .typeHeader{
        box-sizing: border-box;
        padding-left:20px;
        .typeHeaderTop{ 
            p{
                line-height:30px;
            }           
            .typeHeaderTop_l{
                float:left;
                margin-right: 100px;
            }
            .typeHeaderTop_r{
                float:left;
            }
        }
    }
}
</style>

