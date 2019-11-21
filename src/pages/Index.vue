<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!!!!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste
      tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <h1 style="background-color: #00f; color: #fff; padding: .5em; text-align: center;">hogehogehoge</h1>
    <ul>
      <li v-for="posts in news" :key="posts.id">
        <h1>{{posts}}</h1>
        <span class="news-date">{{ convertDate(posts.news_date) }} </span>
        <span class="news-text">{{ posts.news_title }}</span>
      </li>
    </ul>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      news: null
    }
  },
  methods: {
    fetchArticles() {
          axios
            .get('https://codehack.microcms.io/api/v1/news', {
                headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
            })
            .then(res => {
                // console.log(res.data);
                this.news = res.data.contents

            })
            .catch(err => {
                console.log(err);
            })
      },
      convertDate(value) {
        let date = value.split('-'),
            getYear = date[0].toString(),
            getMonth = date[1].toString(),
            getDay = date[2].toString(),
            convertDay = getDay.substring(0, getDay.indexOf("T")),
            stringDate =  getYear + '/' + getMonth + '/' + convertDay;
            return stringDate
      }

  },
  mounted() {
    this.fetchArticles()
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
