<template>
    <div id="a">
        <div class="header">
             <span>评价人员管理</span>
             &nbsp
             >
             &nbsp
              <span>新建人员管理</span>
        </div>
        <div id="b">
           <div class="b_header">评价活动信息</div>
           <div class="b_hr"></div>
           <div class="name">
               <span><span class="red">*</span> 姓名:</span>
              <Input v-model="value14" placeholder="" clearable style="width: 150px" />
           </div>
            <div class="name">
               <span><span class="red">*</span>性别:</span>
              <RadioGroup >
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
            </RadioGroup>
           </div>
           <div class="name">
               <span><span class="red">*</span>身高:</span>
              <Input v-model="value14" placeholder="" clearable style="width: 150px" />
           </div>
           <div class="name">
               <span><span class="red">*</span>体重:</span>
              <Input v-model="value14" placeholder="" clearable style="width: 150px" />
           </div>
           <div class="name">
               <span><span class="red">*</span>驾龄:</span>
              <Input v-model="value14" placeholder="" clearable style="width: 150px" />
           </div>
        </div>
        <div class="c">
           <Button :size="buttonSize" type="default" class="btn1" @click='goDetail()'>返回</Button>
           <Button :size="buttonSize" type="primary" class="btn2" >保存</Button>
        </div>
        <router-view/>
    </div>
</template>
<script>
// 引入Vue
import Vue from 'vue'
// 引入按钮
import { Button ,Input ,RadioGroup,Radio} from 'iview';
// 注册按钮
Vue.component('Button', Button);
Vue.component('Input', Input);
Vue.component('Radio', Radio);
Vue.component('RadioGroup', RadioGroup);
// 抛出
    export default {
       data () {
            return {
                buttonSize: 'large',
                value14:'',
                
            }
        },
        methods: {
             goDetail(){
            // 返回
             this.$router.go(-1);
            //编程式导航
            }

        },
    }
   
</script>
<style lang='less' scoped="scoped">
    #a{
        width: 1400px;
        height: 663px;
        position: fixed;
        left : 211px;
        right : 0;
        top : 50px;
        bottom : 0;
        background: #ebf1f6;
        
    }
    .header{
        margin: 20px;
        font-size: 14px;
        font-weight: 700;
    }
    #b{
        width: 90%;
        height: 520px;
        margin:10px 0 20px 20px;
        padding: 15px; 
        background: #fff;
        border-radius: 10px;
        .b_header{
            font-size: 15px;
            color: rgb(77, 170, 212);
        }
        .b_hr{
            margin-top: 10px;
            width: 100%;
            height: 0;
            border-bottom: 1px solid rgba(128, 126, 126, 0.2);
        }
        .name{
            margin: 40px 0;
            
            span{
                font-size: 14px;
                margin-right: 20px;
            }
            .red{
                color: red;
                margin-right: 2px;
            }
        }
    }
    .c{
        display: inline-block;
        margin-left: 450px;
        .btn1{
            margin-right: 150px;
            margin-top: -10px;
        }
        .btn2{
            margin-top: -10px;
        }
        
    }
    
</style>