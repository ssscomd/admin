<template>
    <div class='listBox'>
        <dd class='list' v-for="(item,index) in list" :key="index">
            <input class='check' type='checkbox'>
            <span v-for="(item,index) in item" :key="index">
                {{item}}
            </span>
            <Handle></Handle>
        </dd>
    </div>
</template>

<script>
import Handle from './handle';
export default {
    data(){
        return {
            list: [
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
                ['人机工程主观评价表1','车','2016-09-21'],
            ],
        }
    },
    components:{
        Handle,
    }
}
</script>

<style lang="less" scoped='scoped'>
    .listBox{
        .list{
            width: 1120px;
            height: 44px;
            padding: 10px 14px;
            font-size: 14px;
            .check{
                margin-right: 100px;
            }
            span{
                margin-right: 142px;
            }
        }
    }
</style>