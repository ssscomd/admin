<template>
<div>
 <div id="activeHeader">
    <h6>评价活动类型名称</h6>
    <input placeholder="请输入" id="input">
    </div>
    <div id='activeNex'>
       <button>搜索</button>
       <button>重置</button>

    </div>
    <div id='content'>
        <div>
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
        </div>
        <div>
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
        </div>
        <div>
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
        </div>

    </div>
    <div id='Fenye'>
      
    </div>
</div>
   
</template>

<script>
export default {
    
}
</script>

<style lang='less' scoped>
#activeHeader{
h6{
    margin-left:-670px;
    /* display:inline-block; */
    font-size:17px
}
#input{
   
    border:1px solid black;
    width:192px;
    height:30px;
    margin-left:-670px
  
}
}

#activeNex{
    margin-left:-700px;
    height:80px;
    
    button {
    border:none;
    width:60px;
    height:35px;
    border:1px solid transparent;
    outline:none;
    margin:20px
    


}
}
#content{
    div{
       height:150px;
       background:gray;
       line-height:150px;
       border-bottom:1px solid black;
        img{
            display:inline-block;
            margin:30px 60px
        }
    }
}





</style>