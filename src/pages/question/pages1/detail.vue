<template>
        <div class='detail'>
            <router-link active-class='newBtn'  to='/detail/questionnaire/setUp'>+ 评价问卷新建</router-link>
            <!-- <router-view></router-view> -->
            <div>
                <dl>
                    <dt>
                        <span><b> - </b></span>
                        <span v-for="(item,index) in arr" :key="index">
                            {{item.title}}
                        </span>
                    </dt>
                    <List></List>
                </dl>
            </div>
        </div>
</template>

<script>
import Handle from './handle';
import List from './list';
export default {
    components: {
        List
    },
    beforeCreate(){
        
    },
    beforeMount(){

    },
    data(){
        return{
            arr : [
                { title: '评价问卷名称'},
                { title: '所属评价类型'},
                { title: '创建时间'},
                { title: '操作'}
            ]
        }
    }
}
</script>

<style lang="less" scoped>
    .detail{
        width: 1168px;
        height: 575px;
        background: #fff;
        margin-left: 20px;
        margin-top: 15px;
        padding: 15px 0px 15px 20px;
        .newBtn{
            display: block;
            width: 131px;
            height: 28px;
            font-size: 14px;
            color: #fff;
            background: #263f73;
            border: none;
            border-radius: 6px;
        }
        div{
            dl{
                dt{
                    width: 1120px;
                    height: 50px;
                    padding: 8px 0px;
                    margin-top: 10px;
                    overflow: hidden;
                    background: #e5e5e5;
                    border-top: 1px solid #ccc;
                    border-bottom: 1px solid #ccc;
                    span{
                        height: 30px;
                        font-size: 15px;
                        float: left;
                        list-style: none;
                        margin-top: 8px;
                        padding: 0px 110px 0px 12px;
                        b{
                            width: 16px;
                            height: 16px;
                            font-size: 15px;
                            color: #fff;
                            background: #263f73;
                            text-align: center;
                            line-height: 15px;
                            float: left;
                            border-radius: 4px;
                            margin-top: 2px;
                        }
                    }
                    span:last-of-type{
                        padding: 0px;
                        width:210px;
                        height: 30px;
                        text-align: center;
                    }
                }
                dd{
                    border-bottom: 1px solid #ccc;
                }
            }
        }
    }
</style>