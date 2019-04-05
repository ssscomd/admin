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
                <div>
                    <img src="" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .compilecontentwrapper{
        width:1168px;
        height:762px;
        border-radius: 5px;
        background:#fff;
        .compilecontentwrappertitle{
            width:100%;
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
            width:100%;
            box-sizing: border-box;
            padding-left:20px;
            overflow: hidden;
            .typename{
                
                height:28px;
                line-height:28px;
                font-size:12px;
                margin-bottom:10px;
                b{
                    color:#fb4444;
                }
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
               
                height:28px;
                line-height:28px;
                font-size:12px;
                margin-bottom:10px;
            }
        }
    }
</style>
