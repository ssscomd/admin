<template>
    <div class='handle'>
        <span v-for="(item,index) in handleArr" :key="index">
            {{item.title}}
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            handleArr: [
                { title: '查看' },
                { title: '编辑' },
                { title: '赋值' },
                { title: '删除' } 
            ]
        }
    }
}
</script>

<style lang="" scoped>
    .handle{
        display: inline-block;
    }
    span:last-of-type{
        color: red;
    }
</style>