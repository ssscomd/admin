<template>
    <div class="object">
        <h4>评价对象管理</h4>
        <container>
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
                    <option value="一天内">一天内</option>
                    <option value="一周内">一周内</option>
                    <option value="一月内">一月内</option>
                    <option value="一年内">一年内</option>
                    <option value="自定义：从...至...">自定义：从...至...</option>
                </select>
            </div>
            <hr>
        </container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scope="scope">
    .object{

    }
</style>