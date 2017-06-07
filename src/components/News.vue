<template>
    <div>
        <!--公用header-->
        <common-header></common-header>
        <!--公用header-->
        <div id="carousel">
            <div id="carousel-imgs">
                <img src="../assets/img/carousel/1.jpg" alt="" style="z-index: 3">
                <img src="../assets/img/carousel/2.jpg" alt="" style="z-index: 2">
                <img src="../assets/img/carousel/3.jpg" alt="" style="z-index: 1">
            </div>
            <ul id="carousel-tab">
                <li class="active"></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div id="news-container">
            <!--新闻列表start-->
            <news-description :news-list="newsList"></news-description>
            <!--新闻列表end-->
            <load-end v-show="show"></load-end>
        </div>
        <!--公用footer-->
        <common-footer></common-footer>
        <!--公用footer-->
    </div>
</template>

<script>
//    import '../assets/js/jquery.mobile.custom.min.js'
    import '../assets/js/carousel.js'
    import Axios from 'axios'
    import CommonHeader from './CommonHeader'
    import NewsDescription from './NewsDescription'
    import CommonFooter from './CommonFooter'
    import LoadEnd from './LoadEnd'
    export default{
        components : {
            CommonHeader,
            NewsDescription,
            CommonFooter,
            LoadEnd
        },
        data(){
            return {
                newsList : [],
                pageSize : 4,
                page : 1,
                isLoaded : true,
                isEnd : false,
                show : false
            }
        },
        methods : {
            loadNews : function(page){
                Axios.get('http://127.0.0.1/pet_rescue_ci/news/get_all_news', {
                    params : {
                        page : page,
                        pageSize : this.pageSize
                    }
                }).then((res) => {
                    //console.log(res.data);
                    this.newsList = this.newsList.concat(res.data.news);
                    this.isLoaded = true;
                    this.isEnd = res.data.isEnd;
                });
            },

        },
        mounted : function(){
            var _this = this;
            this.loadNews(this.page);
            $(window).on('scroll', function(){
              if(_this.isEnd){
                  _this.show = true;
                  return;
              }
              if(_this.isLoaded){
                  _this.isLoaded = false;
                  _this.page++;
                  _this.loadNews(_this.page);
              }
            });
        }
    }

</script>

<style>
    @import '../assets/css/common.css';
    @import '../assets/css/news.css';
</style>
