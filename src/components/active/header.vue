
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
        <div id='inputL'>
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
            <img src="./img/u299.png" alt="">
        </div>

    </div>
    <div id='Fenye'>
      <Page :total="100" />
    </div>
</div>
   
</template>

<script>
 import Vue from 'vue'
 import { Page } from 'iview';
 Vue.component('Page',Page);
export default {
    
}
</script>

<style lang='less' scoped>
#activeHeader{
h6{
    margin-left:-700px;
    /* display:inline-block; */
    font-size:17px
}
#input{
    outline:none;
    border:1px solid black;
    width:192px;
    height:30px;
    margin-left:-700px
  
}
}

#activeNex{
    margin-left:-700px;
    height:50px;
    font-size:15px;
    
    
    
    button {
    border:none;
    width:77px;
    height:28px;
    border:1px solid transparent;
    outline:none;
    margin:10px;
    background:#0d1f42;
    color:#fefefe;
   
    


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
    #inputL{
        border-bottom:none
    }
}
#Fenye{
    position:absolute;
    bottom:10px;
    right:100px
}





</style>