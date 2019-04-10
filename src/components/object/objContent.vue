<template>
    <div class="content-container">
        <div class="tit">
            <button type="button" class="ivu-btn ivu-btn-primary btn1"><span>+新建评价活动</span></button>
            <button type="button" class="ivu-btn ivu-btn-primary"><span>导出</span></button>
        </div>
        <ul class="type">
            <li>评价对象名称</li>
            <li>评价对象图片</li>
            <li>所属评价类型</li>
            <li>创建时间</li>
            <li>操作</li>
        </ul>
        <ul class="content">
            <li 
            v-for="(item,index) in showList" 
            :key="index">
                <div>{{item.car_name}}</div>
                <div>
                    <img :src="item.car_img" alt="">
                </div>
                <div>{{item.tname}}</div>
                <div>{{item.craete_time_o}}</div>
                <div>
                    <span>编辑</span>
                    <span>参考</span>
                    <span>删除</span>
                </div>
            </li>
        </ul>
        <div class="page">
            <Page :total="page.total" :page-size="page.pageSize" ref="page" @on-change="changePage"/>
        </div>
    </div>
</template>

<script>
import api from "./api";
export default {
    data() {
        return {
            list : [],
            showList : [],
            page : {
                pageSize : 5 ,
                total : 0,
            }
        }
    },
    created() {
        api.requestGet("/evaluates/objects_manage/")
        .then(data => {
            // console.log(data.data);
            const baseUrl = "http://www.yudonghe.top:80";
            const _data = data.data.data ;
            this.page.total = _data.length ;

            for (let i = 0; i < _data.length; i++) {
                this.list.push(_data[i].object) ;
                this.list[i].car_img = baseUrl + _data[i].object.car_img;
                this.list[i].craete_time_o = _data[i].craete_time_o ;
                this.list[i].tname = _data[i].type.tname ;
            }

            // 显示数量
            if(this.list.length < this.page.pageSize){
                this.showList = this.list ;
            }else{
                this.showList = this.list.slice(0,this.page.pageSize);
            }
        })
        console.log(this.list);
        
    },
    methods: {
        // 改变this.showList的数据
        changePage() {
            const currentPage = this.$refs.page.currentPage;
            // console.log(currentPage,this.$refs.page);
            const _start = (currentPage - 1) * this.page.pageSize ;
            const _end = currentPage * this.page.pageSize ; 
            this.showList = this.list.slice(_start,_end) ;
        }
    },
}
</script>

<style lang="less" scope>
    .content-container{
        width: 1080px;
        height: auto;
        background: #fff;
        margin-top: 30px;
        padding: 0 0 0 30px;
        .tit{
            box-sizing: border-box;
            padding: 10px 0 10px;
            button{
                background: #0e1c3b;
                border: none;
                border-radius: 5px;
            }
            .btn1{
                margin-right:864px; 
            }
        }
        .type{
            width: 1030px;
            height: 60px;
            background: #e5e5e5;
            box-sizing: border-box;
            li{
                width: 206px;
                display :block;
                text-align: center;
                float: left;
                line-height: 60px;
                
            }
        }
        .type:after{
            content: "";
            display: block;
            clear: both;
            height: 0;
            overflow: hidden;
        }
        .content{
            list-style: none;
            width: 1030px;
            li{
                width: 1030px;
                height: 80px;
                border-bottom: 1px solid #999;
                div{
                    width: 206px;
                    display :block;
                    text-align: center;
                    float: left;
                    line-height: 80px;
                    height: 80px;
                    img{
                        height: 70px;
                        width: auto;
                    }
                }
            }
            li:after{
                content: "";
                display: block;
                clear: both;
                height: 0;
                overflow: hidden;
            }
        }
        .page{
            padding: 20px 0 ;
            text-align: center;
        }
    }
</style>
