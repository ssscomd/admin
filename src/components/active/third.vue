<template>
   <div id='root'>
    <h3>
        评价对象管理
    </h3>
    <div id='biaodan'>
        <div className='left'>
            <p>评价活动编号:</p>
            <input type="text" placeholder='  请输入'></div>
            <div className='center'>
                <p>评价活动名称:</p>
                <input type="text" placeholder='  请输入'></div>
                <div className='right'>
                    <p>创建时间:</p>
                    <select name="time" id="time">
                        <option value="moren" selected="selected">--------请选择--------</option>
                        <option value="bj" >一天内</option>
                        <!-- selected="selected"默认值选择 -->
                        <option value="sh">一周内</option>
                        <option value="sz">一月内</option>
                        <option value="sz">一年内</option>

                    </select>
                </div>
            </div>
            <div id='btn'>
              <button class='btn1'>搜索</button>
              <button>重置</button>

            </div>
            <div id='statr'>

            </div>
            <Tab></Tab>
        </div>
            </template>
<script>
  import Tab from './thirdTab.vue';
    export default {
        components:{
           Tab
        }
    };
</script>
<style lang='less' scoped="scoped">
   #root {
    position: fixed;
    left: 230px;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    background: #fefefe;

    h3 {
        font-size: 20px;
        margin-left: 20px;
        margin-top: 15px;
    }
    #biaodan {
        width: 1000px;
        height: 90px;
        background: red;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px solid black;
        p {
            font-size: 16px;
            margin-bottom: 10px;
        }
        input {
            outline: none;
            width: 150px;
            height: 28px;

        }
        select {
            width: 160px;
            height: 28px;
            outline: none;
        }
    }
    #btn{
         width: 1000px;
        height: 60px;
        background: yellowgreen;
        margin: 0 auto;
        button{
            border:none;
                   width:61px;
                   height:28px;
                   border:1px solid transparent;
                   outline:none;
                   margin:20px 0  20px 50px;
                   background:white;
                   color:gray;
                  
        }
        .btn1{
            margin-left:77px;
        }
    }
    #statr{
        width:1000px;
        height:50px;
        background:blue;
        margin:0 auto
    }
}
</style>