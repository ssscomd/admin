<template>
    <div>
        <h3 id="h_h3">评价人员管理</h3>
        <div id="a">
            <div class="name">
                <div>姓名</div>
                <input type="text">
            </div>
            <div class="time">
                <p>创建时间：</p>
                <select name="" id="">
                    <option value="">请选择</option>
                    <option value="一天内">一天内</option>
                    <option value="一周内">一周内</option>
                    <option value="一月内">一月内</option>
                    <option value="一年内">一年内</option>
                    <option value="自定义：从...至...">自定义：从...至...</option>
                </select>
            </div>
            <div id="hr1"></div>
            <div id="btn">
                <Button type="primary">搜索</Button>
                <Button type="primary" class="a_btn_2">重置</Button>
            </div>
            
        </div>
        <div id="b">
            <div class="b_btn"> 
                <Button type="primary" @click = 'goDetail()'>新建评价人员</Button>
                <Button type="primary" class="b_btn_2">导出</Button>
            </div>
            <Table border :columns="columns7" :data="data"></Table>
        </div>
        <div id="page">
            <Page :total="100" show-total />
        </div>
        <router-view/>
    </div>
</template>
<script>
// 引入Vue
import Vue from 'vue'
// 引入按钮
import { Button, Table, Page} from 'iview';
// 注册按钮
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Page', Page);
// 抛出
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '评价人员姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '性别',
                        key: 'sex'
                    },
                    {
                         title: '身高',
                        key: 'height'
                    },
                     {
                        title: '体重',
                        key: 'weight'
                    },
                    {
                        title: '驾龄',
                        key: 'age'
                    },
                    {
                         title: '状态',
                        key: 'state'
                    },
                     {
                        title: '创建时间',
                        key: 'date'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 250,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.goDetail2()
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.goDetail2()
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '状态'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        name: '张天',
                        sex:'男',
                        height:'180',
                        weight:'80kg',
                        age: 18,
                        state:`${this.state2}`,
                        date:'2016-01-05',
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: '张天',
                        sex:'男',
                        height:'180',
                        weight:'80kg',
                        age: 18,
                        state:'true',
                        date:'2016-01-05',
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: '张天',
                        sex:'男',
                        height:'180',
                        weight:'80kg',
                        age: 18,
                        state:'true',
                        date:'2016-01-05',
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: '张天',
                        sex:'男',
                        height:'180',
                        weight:'80kg',
                        age: 18,
                        state:'true',
                        date:'2016-01-05',
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: '张天',
                        sex:'男',
                        height:'180',
                        weight:'80kg',
                        age: 18,
                        state:'true',
                        date:'2016-01-05',
                        address: 'New York No. 1 Lake Park'
                    },
                    

                ],
                state2:true
                
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            goDetail(){
            // 访问路径
            this.$router.push('/detail/evaluator/evaluator1')
            //编程式导航
            },
             goDetail2(){
            // 访问路径
            this.$router.push('/detail/evaluator/evaluator2')
            //编程式导航
            }

        }
    }
   
</script>
<style lang='less' scoped="scoped">
    #h_h3{
        margin-left: 20px;
    }

    #a{
        width: 94%;
        height: 160px;
        background: #fff;
        margin:10px 0 20px 20px; 
        #hr1{
               width: 98%;
               height: 80px;
               margin: 0 auto;
               border-bottom: 1px solid rgba(192, 191, 191,0.4);
           }
        #btn{
            display: inline-block;
            padding-top: 20px;
            button{
                margin-left: 70px;
            }
            .a_btn_2{
                 margin-left: 150px;
            }
        }
        .name{
           padding: 10px;
           padding-left: 20px;
           float: left;
           div{
               font-size: 14px;
               margin-bottom: 10px;
           }

           input{
               border-radius: 5px;
            //去蓝边
               outline:none;
           }
        }

        .time{
           padding: 10px;
           padding-left: 50px;
           float: left;
           p{
               font-size: 14px;
               margin-bottom: 10px;
           }

           select{
                width: 158px;
                height: 22px;
                border-radius: 5px;
                outline:none;
           }
           
        }
    }
    #page{
            margin-left: 400px;
            margin-top: 15px;
            }
    #b{
        width: 94%;
        
        background: #fff;
        margin:10px 0 20px 20px;
        
        .b_btn{
            width: 90%;
            display: inline-block;
            margin: 20px;
            .b_btn_2{
                float: right;
            }
        }
    }
</style>