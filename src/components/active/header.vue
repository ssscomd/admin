
 <template>
<div>
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