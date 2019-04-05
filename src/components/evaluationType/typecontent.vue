<template>
    <div class="typecontentWrapper">           
            <div class="btn">
                <button @click='goNewType()'>+ 新建评价类型</button>
            </div>
            <div class="typecontenttitle">            
                    <span v-for="(item,index) of typecontenttitle" :key="index">{{item}}</span>          
            </div>
            <ul>
                <li v-for="(item,index) in typecontentlist" :key="index">
                    <div>{{item.name}}</div>
                    <div>
                        <img src="./img/图层10.png" alt=""/>
                    </div>
                    <div>{{item.state}}</div>
                    <div>{{item.time}}</div>
                    <div>
                        <span>{{item.check}}</span>
                        <span @click='goCompile()'>{{item.compile}}</span>
                        <span>{{item.disabled}}</span>
                        <span>{{item.delete}}</span>
                    </div>
                </li>
            </ul>
            <div class="pages">
                <Page :total="100"></Page>
            </div>            
            
            
        </div>            
</template>
<script>
import compile from './utils/compile';
export default {
    data(){
        return{
            typecontenttitle:[
                '评价类型名称',
                '评价类型图片',
                '状态',
                '创建时间',
                '操作'],
            typecontentlist:[
                {
                    name:'汽车',
                    img:'./img/图层10.png',
                    state:'启用',
                    time:'2016-09-21',
                    check:'查看',
                    compile:'编辑',
                    disabled:'禁用',
                    delete:'删除'
                },
                 {
                    name:'汽车',
                    img:'./img/图层10.png',
                    state:'启用',
                    time:'2016-09-21',
                    check:'查看',
                    compile:'编辑',
                    disabled:'禁用',
                    delete:'删除'
                },
                 {
                    name:'汽车',
                    img:'./img/图层10.png',
                    state:'启用',
                    time:'2016-09-21',
                    check:'查看',
                    compile:'编辑',
                    disabled:'禁用',
                    delete:'删除'
                },
                 {
                    name:'汽车',
                    img:'./img/图层10.png',
                    state:'启用',
                    time:'2016-09-21',
                    check:'查看',
                    compile:'编辑',
                    disabled:'禁用',
                    delete:'删除'
                }
            ]   
        }
    },
    methods:{
        goNewType(){
            console.log('111')
            this.$router.push('/detail/evaluationType/newType')
        },
        goCompile(){
            this.$router.push('/detail/evaluationType/compile')
        }
    }
}
</script>
<style lang="less" scoped>
        .typecontentWrapper{
            width:1120px;
            height:620px;       
            margin-top:10px;
            background:#fff;
            padding-left:20px;
            .btn{  
                overflow:hidden;          
                button{
                    width:131px;
                    height:28px;
                    background:#263f73;
                    border:1px solid #fff;
                    border-radius: 5px;
                    float:left;
                    margin-top:10px;
                    color:#fefefe;
                }
            }
            .typecontenttitle{
                margin-top:10px;
                width:1120px;
                height:56px;
                line-height:56px;
                background:#e5e5e5;
                font-size:14px;
                span{
                    display:inline-block;
                    width:224px;
                }
            }
            ul{
                margin-top:14px;
                margin-bottom:12px;
                width:1120px;
                height:448px;
                li{
                    list-style:none;
                    width:1120px;
                    height:112px;                   
                    border-bottom:1px solid #ccc;
                    overflow: hidden;
                    div{                     
                        display:inline-block; 
                        float:left;              
                        width:224px;
                        height:112px;
                        line-height: 112px;
                        vertical-align: middle;
                        img{                       
                            width:153px;
                            height:82px;
                        }
                    }
                }
            }
            
            
        }
    
</style>
