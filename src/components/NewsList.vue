<template>
    <div>
        <div class="news-detail" v-for="news in newsList">
            <div class="news-image">
                <img :src="'http://127.0.0.1/pet_rescue_ci/'+news.news_img" alt="">
            </div>
            <div class="news-content">
                <a href="#"><h6>{{news.news_title}}</h6></a>
                <p>{{news.news_content}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props : ['newsList']
    }
</script>
<style>

</style>
