<template>
    <div class="newTypePageWrapper">
        <h4>评价类型信息</h4>
        <div class="evaluatetypecontent">
            <div class="evaluatename">
                <span><b>*</b>评价类型名称：</span>
                <input type="text">
            </div>
            <div class="evaluateimg">
                <span><b>*</b>评价类型图片：</span>
                <button>+</button>
            </div>
            <div class="addevaluateparams">
                <span><b>*</b>添加参数：</span>
                <button @click="add()">添加</button>
            </div>
            <div class="evaluateinfo">
                <div class="infotitle">
                    <h5 class="left">参数信息</h5>
                    <h5 class="right">操作</h5>
                </div>
                <ul>
                    <li>
                        <p class="left">名称</p>
                        <p class="right">
                            <span class="blue">编辑</span>
                            <span class="red"  >删除</span>
                        </p>
                    </li>
                    <li v-for="(item,index) of arr" :key="index">
                        <p class="left">{{item}}</p>
                        <p class="right">
                            <span class="blue">编辑</span>
                            <span class="red" @click="delet($event)">删除</span>
                        </p>
                    </li>
                </ul>
                <div class="btn">
                    <button>返回</button>
                    <button class="blue" @click="save()">保存</button>
                </div>
                <div class="add" v-if="this.show">
                    <div class="addparamsname">
                        <h2>添加参数</h2>
                        <span @click="add()"> x </span>
                    </div>   
                    <div class="paramscontent">
                        <span><b>*</b>参数名称：</span>
                        <input type="text" ref="input">
                    </div> 
                    <div class="addbtn">
                        <button class="color" @click="addparams()">保存</button>
                        <button @click="add()">关闭</button>
                    </div>               
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
 import qs from 'qs';
 import axios from 'axios';
export default {
   
    data(){
        return{
            show:false,
            arr:JSON.parse(sessionStorage.getItem('arr'))||[]
        }
    },
    methods:{
        add(){
            this.show=!this.show
        },
        addparams(){
            console.log(this.$refs.input.value)
            let value =this.$refs.input.value
            if(value){
                this.arr.push(value) 
                // sessionStorage.setItem('arr',JSON.stringify(this.arr))         
                this.$refs.input.value=""
            }           
        },
        delet(e){
            this.arr.splice(e.target,1)
            // sessionStorage.setItem('arr',JSON.stringify(this.arr))
        },
        save(){
            sessionStorage.setItem('arr',JSON.stringify(this.arr))  
            let data = JSON.parse(sessionStorage.getItem('arr'))
            console.log(data)
            let postData = this.$qs.stringify(data)
            console.log(postData)
            this.$axios({
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Origin': '*'
                },
                method:'post',
                url:'/yudonghe/evaluates/add_type/',
                data:postData
            })
            .then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>
<style lang="less" scoped="scoped">
    .newTypePageWrapper{
        width:100%;
        height:762px;
        border-radius: 5px;
        background:#fff;
        h4{
            width:100%;
            height:42px;
            line-height:42px;
            font-size:14px;
            border-bottom:1px solid #e5e5e5;
            margin-bottom:20px;
            margin-left:20px;
            font-weight: normal;
            color:#263f73;
        }
        .evaluatetypecontent{
            box-sizing: border-box;
            padding-left:20px;
            font-size:12px;
            color:#7a7a7a;
            b{
                color:#fb2f2f;
            }
            .evaluatename{
                margin-top:20xp;
                input{
                    width:153px;
                    height:28px;
                    border:1px solid #ccc;
                    border-radius: 5px;
                }
            }
            .evaluateimg{
                margin-top:20px;  
                button{
                    text-align:center;
                    line-height:59px;
                    width:59px;
                    height:59px;
                    border:2px dashed #c7c7c7;
                    background:#f2f2f2;
                    font:50px '宋体';
                    color:#c7c7c7;
                }              
            }
           .addevaluateparams{
               margin-top:20px;
               button{
                   width:80px;
                   height:32px;
                   background:#263f73;
                   border:none;
                   border-radius: 5px;
                   color:#fff;
                   font-size:14px;
               }
           }
            
           .evaluateinfo{
                width:994px;               
                margin:0 auto;
                position:relative;
               .left{
                    float:left;
                }
                .right{
                    float:right;
                }
                .infotitle{
                    width:994px;
                    height:56px;
                    background:#e5e5e5;                    
                    h5{
                        color:#454545;
                        line-height:56px;
                        display:inline-block;
                        width:200px;
                        text-align:center;
                    }
                }
                ul{
                    width:100%;
                    height:360px;
                    li{
                        list-style:none;
                        height:44px;
                        line-height:44px;
                        border-bottom:1px solid #ccc;
                        p{
                            display:inline-block;
                            width:200px;
                            text-align:center;
                            color:#575757;
                            .blue{
                                color:#3876cb;
                            }
                            .red{
                                color:#ff2d2d;
                                cursor: pointer;
                            }
                        }
                    }
                }
                .btn{
                   width:400px;
                   margin:0 auto;
                    button{ 
                        margin:0 auto;                     
                        width:80px;
                        height:30px;
                        font-size:14px;
                        color:#b1b1b1;
                        border:1px solid #e5e5e5;
                        border-radius:5px;
                        background:#fff;
                        margin-top:40px;
                        margin-right:80px;
                    }
                    .blue{
                        background:#263f73;
                        color:#fff;
                    }
                }
                .add{
                    box-sizing: border-box;
                    width:563px;
                    height:290px;
                    border:1px solid #162d5f;
                    position:absolute;
                    left:200px;
                    top:20px;  
                    border-radius: 5px;
                    background:#ebf1f6;  
                    padding-left:20px;
                    padding-right:20px;              
                    .addparamsname{
                        width:100%;
                        height:53px;
                        line-height:53px;
                        h2{
                            display:inline-block;
                            float:left;
                            font-size: 20px;
                        }
                        span{
                            float:right;
                            font-size:25px;
                        }
                    }
                    .paramscontent{
                        width:499px;
                        height:170px;
                        background:#fff;
                        border-radius: 5px;
                        padding-top:20px;
                        box-sizing: border-box;
                        input{
                            width:359px;
                            height:41px;
                            border:1px solid #ccc;
                            border-radius: 5px;
                        }
                    }
                    .addbtn{
                        width:100%;
                        text-align:center;
                        margin-top:10px;
                        button{
                            width:65px;
                            height:29px;
                            border:1px solid #ccc;
                            border-radius: 5px;
                            color:#000;
                            background:#fff;                           
                        }
                        .color{
                                background:#263f73;
                                color:#fff;
                            }
                    }                   
                }
           }
        }
    }
</style>
