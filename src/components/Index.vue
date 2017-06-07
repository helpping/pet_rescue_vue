<template>
    <div id="hello">
        <div id="header">
            <div class="header-content">
                <div class="address">
                    <span>哈尔滨</span>
                    <img src="../assets/img/bottom.png" alt="">
                </div>
                <div class="logo">
                    <img src="../assets/img/logo.png" alt="">
                </div>
                <div class="header-img">
                    <a href="#">
                        <img src="../assets/img/header.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        <div id="banner">
            <div class="banner-section">
                <router-link to="/news/">
                    <img src="../assets/img/banner-1.png" alt="">
                    <span class="banner-word">新闻</span>
                </router-link>
                <a href="#">
                    <img src="../assets/img/banner-2.png" alt="">
                    <span class="banner-word">领养</span>
                </a>
                <a href="#">
                    <img src="../assets/img/banner-3.png" alt="">
                    <span class="banner-word">志愿</span>
                </a>
                <a href="#">
                    <img src="../assets/img/banner-4.png" alt="">
                    <span class="banner-word">萌图</span>
                </a>
                <a href="#">
                    <img src="../assets/img/banner-5.png" alt="">
                    <span class="banner-word">知识</span>
                </a>
                <a href="#">
                    <img src="../assets/img/banner-6.png" alt="">
                    <span class="banner-word">找回</span>
                </a>
                <a href="#">
                    <img src="../assets/img/banner-7.png" alt="">
                    <span class="banner-word">捐赠</span>
                </a>
                <a href="#">
                    <img src="../assets/img/banner-8.png" alt="">
                    <span class="banner-word">拍卖</span>
                </a>
            </div>
            <div class="banner-square"></div>
        </div>
        <div id="content">
            <ul id="tab-control">
                <li :class="{active : currentIndex==0}" @click="changeTab(0)">新闻</li>
                <li :class="{active : currentIndex==1}" @click="changeTab(1)">遗失</li>
                <li :class="{active : currentIndex==2}" @click="changeTab(2)">志愿</li>
            </ul>
            <div id="tab-content">
                <div class="tab-content-container">
                    <div class="news" v-show="currentIndex==0">
                        <!--新闻列表start-->
                        <news-list :news-list="newsList"></news-list>
                        <!--新闻列表end-->
                    </div>
                    <div class="lost" v-show="currentIndex==1">
                        <!--遗失列表start-->
                        <seek-list :seek-list="seekList"></seek-list>
                        <!--遗失列表end-->
                    </div>
                    <div class="volunteer" v-show="currentIndex==2">
                        <!--志愿列表start-->
                        <volunteer-list :vol-list="volList"></volunteer-list>
                        <!--志愿列表end-->
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div class="city">
                <span>城市</span>
                <span>哈尔滨</span>
            </div>
            <div class="login-register">
                <span>登录</span>
                <span>注册</span>
            </div>
        </div>
    </div>

</template>

<script>
    import '../assets/js/rem.js'
    import Axios from 'axios'
    import NewsList from './NewsList'
    import SeekList from './SeekList'
    import VolunteerList from './VolunteerList'
    export default {
        components : {
            NewsList,
            SeekList,
            VolunteerList
        },
        data(){
            return {
                currentIndex : 0,
                newsList : [],
                seekList : [],
                volList : []
            }
        },
        methods : {
            changeTab : function(index){
                this.currentIndex = index;
            },
            loadNews : function(){
                Axios.get('http://127.0.0.1/pet_rescue_ci/welcome/get_info', {

                }).then((res) => {
                    //console.log(res.data);
                    this.newsList = res.data.news;
                    this.seekList = res.data.seek;
                    this.volList = res.data.vol;
                });
            }
        },
        mounted : function(){
            this.loadNews();
        }
    }
</script>


<style>
    @import "../assets/css/common.css";
    @import "../assets/css/index.css";
</style>

