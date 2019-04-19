<template>
      <div class="header">
          <div class="biao">
              <h1>评价题库管理>二级属性管理</h1>
          </div>
          <div class="sousuo">
             <div class="a1">
              <p>一级属性名称：</p>
          <input class="in1" type="text" placeholder="请输入一级属性名称"/>
          </div>
          <div class="a2">
             <p>所属评价类型：</p>
          <input class="in2" type="text" placeholder="请输入"/>
          </div>
          <div class="a3">
              <p>创建时间：</p>
             <select class="se" name="创建时间：">
              <option>请选择</option>
              <option>一天内</option>
              <option>一周内</option>
              <option>一月内</option>
              <option>一年内</option>
              <option>自定义：从...至...</option>
          </select>
          </div>       
          </div> 
          <div class="btnd">
             <button  class="btn1">搜索</button>
             <button  class="btn2">重置</button>
          </div>
          <div class="ti">
              <div class="top">
                      <button class="xin" @click='gonew()'>+新建</button>
              </div>    
              <div class="top1">
                    <span class="sp1">一级属性名称</span>
                    <span class="sp2">所属评价类型</span>
                    <span class="sp3">创建时间</span>
                    <span class="sp4">操作</span>
              </div>    
              <div class="top2">
                  <div class="div1">
                    <span class="sp1">进出方便性</span>
                    <span class="sp2">车</span>
                    <span class="sp3">2016/09/21</span>
                    <span class="sp4">编辑 删除</span>
                  </div>
                  <div class="div2">
                    <span class="sp1">乘坐舒适性</span>
                    <span class="sp2">车</span>
                    <span class="sp3">2018/09/21</span>
                    <span class="sp4">编辑 删除</span>
                  </div>
                  <div class="div3">
                    <span class="sp1">内部空间</span>
                    <span class="sp2">座椅</span>
                    <span class="sp3">2018/09/21</span>
                    <span class="sp4">编辑 删除</span>
                  </div>
                  <div class="div4">
                    <span class="sp1">视野可视性</span>
                    <span class="sp2">车</span>
                    <span class="sp3">2018/09/21</span>
                    <span class="sp4">编辑 删除</span>
                  </div>
                  <div class="div5">
                    <span class="sp1">操作方便性</span>
                    <span class="sp2">车</span>
                    <span class="sp3">2016/09/21</span>
                    <span class="sp4">编辑 删除</span>
                  </div>
                  <div class="div6">
                    <span class="sp1">储存空间</span>
                    <span class="sp2">车</span>
                    <span class="sp3">2016/09/21</span>
                    <span class="sp4">编辑 删除</span>
                  </div>
                 
              </div>      
          </div>
      </div>    
</template>
<script>
export default {
    methods:{
    gonew(){
    console.log('跳转')
    this.$router.push('/newpage')
}
}
}
</script>
<style lang="less" scoped>
  .header{
      width: 1622px;
      height: 1050px;
      background: #dfdfdf;
      .biao{
          width: 100%;
          height: 60px
      }
      .sousuo{
          width: 1582px;
          height: 90px;
          background: #fff
      }
      .a1,.a2,.a3{
          float: left;
         
      }
      .in1,.in2,.se{
           border-radius: 5px
      }
      .btnd{
          width: 100%;
          height: 45px;
          background: #fff;
          border-top:
            2px solid #c7c7c7 ;
        .btn1{
            width: 60px;
            height: 20px;
            color: #fefefe;
            background: #263f73;
            border: none;
            border-radius: 5px
        }
        .btn2{
            width: 60px;
            height: 20px;
            color: #fefefe;
            background: #263f73;
            border: none;
            border-radius: 5px
        }
        
      }
  }
  .ti{
      width: 1583px;
      height: 862px;
      background: #c7c7c7;
      margin-top: 40px;
      .top{
          width: 100%;
          height: 60px;
          background: #fff;
          .xin{
              width: 130px;
              height: 40px;
              border:none;
              border-radius: 5px;
              background: #263f73;
              color: #fff;
              font-size: 22px
          }
      }
      .top1{
          width:1544px;
          height: 80px;
          background: #e5e5e5;
          line-height: 80px;
          .sp1,.sp2,.sp3,.sp4{
              font-size: 22px;
              color: #454545;
          }
          .sp1{
              margin-left: 28px
          }
          .sp2{
              margin-left: 156px
          }
          .sp3{
              margin-left: 197px
          }
          .sp4{
              margin-left: 225px
          }
      }
      .top2 div{
         width:1544px;
          height: 80px;
          background: #fff;
          line-height: 80px;
           .sp1,.sp2,.sp3,.sp4{
              font-size: 22px;
              color: #454545;
          }
          .sp1{
              margin-left: 28px
          }
          .sp2{
              margin-left: 226px
          }
          .sp3{
              margin-left: 252px
          }
          .sp4{
              margin-left: 185px
          }
      }
  }
</style>
