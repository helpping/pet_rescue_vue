<template>
  <div>
    <common-header></common-header>
    <div id="user-info">
      <img src="../assets/img/information/head.png" alt="">
      <p class="info-name">塔木汗</p>
      <p class="info-des">流浪动物保护网搭建者</p>
    </div>
    <div id="info-list">
      <ul>
        <li><router-link to="/my-adoption/">我的领养</router-link></li>
        <li><router-link to="/find-information/">找回信息</router-link></li>
        <li><a href="">我的萌图</a></li>
        <li><a href="">修改信息</a></li>
      </ul>
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
  #user-info{
    height: 2.6rem;
    width: 100%;
    background-image: url("../assets/img/information/info-bg.jpg");
    background-position: 50% 50%;
    background-repeat:no-repeat;
    background-size: cover;
    text-align: center;
  }
  #user-info img{
    height: 1.2rem;
    width: 1.2rem;
    margin-top: 0.4rem;
  }
  .info-name{
    margin-top: 0.2rem;
    font-size: 0.28rem;
  }
  .info-des{
    margin-top: 0.1rem;
    font-size:0.2rem;
  }
  #info-list{
    width: 100%;
  }
  #info-list ul{
    width: 5.2rem;
    margin: 0 auto;
    text-align: center;
    margin-top: 0.2rem;
  }
  #info-list a{
    display: inline-block;
    width: 4.99rem;
    height: 0.68rem;
    border: 0.01rem solid #666666;
    background: #7cc4b8;
    color: #ffffff;
    font-size: 0.3rem;
    line-height: 0.68rem;
    border-radius: 0.05rem;
    margin-top: 0.36rem;
  }
</style>
