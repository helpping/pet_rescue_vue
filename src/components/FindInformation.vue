<template>
  <div id="content">
    <div id="common-header">
      <div class="common-back">
        <img src="../assets/img/back.png" alt="">
      </div>
      <div class="common-logo">
        <span>找回信息</span>
      </div>
      <div class="common-person">
        <a href=""><img src="../assets/img/header.png" alt=""></a>
      </div>
    </div>
    <div class="wrapper">
      <div class="check-list">
        <div class="list-left">
          <img src="../assets/img/information/1g.jpg" alt="">
        </div>
        <div class="list-right">
          <p class="name-age"><span class="adop-name">中华田园猫</span><span class="adop-age">两岁半</span></p>
          <p class="adop-add">哈尔滨</p>
          <p class="adop-desc">需要一个温暖的家需要一个温暖的家需要一个温暖的家需要一个温暖的家需要一个温暖的家</p>
        </div>
      </div>
      <p class="handle">
        <a href="" class="update">修改</a>
        <a href="" class="del">删除</a>
      </p>
    </div>
    <div class="wrapper">
      <div class="check-list">
        <div class="list-left">
          <img src="../assets/img/information/1g.jpg" alt="">
        </div>
        <div class="list-right">
          <p class="name-age"><span class="adop-name">中华田园猫</span><span class="adop-age">两岁半</span></p>
          <p class="adop-add">哈尔滨</p>
          <p class="adop-desc">需要一个温暖的家需要一个温暖的家需要一个温暖的家需要一个温暖的家需要一个温暖的家</p>
        </div>
      </div>
      <p class="handle">
        <a href="" class="update">修改</a>
        <a href="" class="del">删除</a>
      </p>
    </div>


  </div>

</template>
<script>
  import '../assets/js/rem.js'
  import Axios from 'axios'
  import CommonHeader from './CommonHeader'
  export default {
    components : {
      CommonHeader
    },
    methods : {

    },
    loadNews : function(){


    },
    mounted : function(){

    }
  }
</script>
<style>
  @import "../assets/css/common.css";
  #content{
    width: 100%;
  }
  body{
    background: #f1f1f1;
  }
  #common-header{
    width: 100%;
    height: 0.6rem;
    background: #7cc4b8;
  }
  .common-back, .common-logo, .common-person{
    float: left;
    width: 33.33%;
    height: 100%;
  }
  .common-back img{
    width: 0.24rem;
    height: 0.38rem;
    margin-left: 0.2rem;
    margin-top: 0.11rem;
  }
  .common-logo{
    text-align: center;
  }
  .common-logo span{
    display: inline-block;
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size:0.3rem;
    color: #ffffff;
  }
  .common-person img{
    width: 0.38rem;
    height: 0.38rem;
    margin-top: 0.11rem;
    float: right;
    margin-right: 0.2rem;
  }
  .wrapper{
    width: 100%;
    border-top:solid 0.1rem #999999;
  }
  .check-list{
    width: 6rem;
    margin: 0.2rem auto 0;
    overflow: hidden;

  }
  .list-left{
    float: left;
  }
  .list-left img{
    width: 1.6rem;
    height: 1.6rem;
  }
  .list-right{
    float: right;
    height: 1.57rem;
    width: 4.3rem;
    border-bottom: 0.03rem solid #cecece;
  }
  .name-age{
    overflow: hidden;
  }
  .adop-name{
    font-size: 0.28rem;
    float: left;
  }
  .adop-age{
    float:right;
    font-size: 0.28rem;
  }
  .adop-add{
    margin-top: 0.21rem;
    clear: both;
    font-size: 0.22rem;
    color: #555555;
  }
  .adop-desc{
    margin-top: 0.21rem;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.24rem;
  }
  .handle{
    clear: both;
    margin: 0.45rem auto 0.6rem;
  }
  .handle a{
    border-radius: 0.05rem;
    font-size: 0.3rem;
    display: inline-block;
    width: 2rem;
    height: 0.54rem;
    line-height:0.54rem;
    text-align: center;
    background: #7cc4b8;
    color: #333;
    border: solid 0.01rem #6d7675;
  }
  .update{
    margin-left: 0.74rem;
  }
  .del{
    margin-left: 0.87rem;
  }
</style>
