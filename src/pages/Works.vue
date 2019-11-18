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

    <ul class="blog-list">
      {{ blog.permalink }}
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
      blog: {
          permalink: null
      }
    }
  },
  methods: {
    fetchArticles() {
          axios
            .get('https://codehack.microcms.io/api/v1/blog', {
                headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
            })
            .then(res => {
                // console.log(res.data);
                // this.blog = res.data.contents
                for(const content of res.data.contents) {
                    this.blog = content;
                }

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
.blog-list {
    padding: 2em 1em;
    list-style: none;
}
.blog-list__item:first-of-type {
    border-top: 1px solid #ccc;
    padding: 1em 0;
}
</style>
