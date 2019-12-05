<template>
  <Layout>

    
    <p>hoge</p>
    <div>{{ title }}</div>
    <div v-html="greeting"></div>
    <div><img :src="hero.src" /></div>
    <div v-html="about"></div>
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
      title: null,
      greeting: null,
      hero: {
        src: null
      },
      about: null
    }
  },
  methods: {
    fetchArticles() {
          axios
            .get('https://codehack.microcms.io/api/v1/company', {
                headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
            })
            .then(res => {
                // console.log(res.data);
                this.title = res.data.title,
                this.greeting = res.data.greeting,
                this.hero.src = res.data.hero.url,
                this.about = res.data.about

            })
            .catch(err => {
                console.log(err);
            })
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
