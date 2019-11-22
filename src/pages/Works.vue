<template>
  <Layout>
    <div class="l-wrapper">
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
    <br />
    <br />
    <table class="blog-list">
      <tr>
        <th>id</th>
        <th>createdAt</th>
        <th>updatedAt</th>
        <th>permalink</th>
        <th>page_title</th>
        <th>hero_image</th>
        <th>content</th>
      </tr>
      <tr v-for="item in blog" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.createdAt }}</td>
        <td>{{ item.updatedAt }}</td>
        <td>{{ item.permalink }}</td>
        <td>{{ item.page_title }}</td>
        <td>{{ item.hero_image }}</td>
        <td>{{ item.content }}</td>
      </tr>
    </table>
    <br />
    <br />
    <article v-if="singlePostView">
      <h2>個別ページ</h2>
      ID：{{ singlePost.id }}<br />
      投稿日：{{ singlePost.createdAt }}<br />
      更新日：{{ singlePost.updatedAt }}<br />
      パーマリンク：{{ singlePost.permalink }}<br />
      タイトル：{{ singlePost.page_title }}<br />
      画像：{{ singlePost.hero_image }}<br />
      コンテンツ：<div v-html="singlePost.content"></div><br />
    </article>
    <ul>
      <li v-for="item in blog" :key="item.id">
      <button @click="movePost(item.permalink)">
        {{ item.page_title }}:{{ item.permalink }}
      </button>
      </li>
    </ul>
    <nav class="local-link">
        <a @click="movePost(item.permalink)" v-for="item in blog" :key="item.id" class="local-link__item" :href="'/works/' + item.permalink">{{ item.page_title }}</a>
      </nav>

      <div class="works-post">
        <h1 class="works-post__title">Post list from GraphQL</h1>
        <table class="works-post__table">
          <tr class="works-post__list works-post__list--title">
            <th>id</th>
            <th>title</th>
            <th>slug</th>
            <th>date</th>
            <th>content</th>
            <th>link</th>
          </tr>
          <tr v-for="item in $page.allWorks.edges" :key="item.node.permalink" class="works-post__list">
            <td>{{ item.node.id }}</td>
            <td>{{ item.node.title }}</td>
            <td>{{ item.node.slug }}</td>
            <td>{{ item.node.date }}</td>
            <td v-html="item.node.content"></td>
            <td><g-link :to="item.node.path">{{ item.node.title }}</g-link></td>
          </tr>
        </table>
      </div>

    </div>

  </Layout>
</template>

<page-query>
query {
  allWorks {
    edges {
      node {
        id
        title
        slug
        date (format: "YYYY年MM月DD日 HH:mm:ss")
        content
        path
      }
    }
  }
}
</page-query>

<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data() {
    return {
      blog: null,
      singlePost: [],
      getPost: null
    }
  },
  methods: {
    fetchArticles() {
          axios
            .get('https://codehack.microcms.io/api/v1/blog', {
                headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
            })
            .then(res => {
                this.blog = res.data.contents;
                console.log(this.blog[0].permalink, 'fjdajfka')
                return this.blog
            })
            .catch(err => {
                console.log(err);
            })
      },
      movePost(param) {
        let self = this;
        self.getPost = param;
        return self.getPost;
      }
  },
  mounted() {
    this.fetchArticles();
    // let { id } = this.$route.params
    console.log(this.$route, 'ROUTE')
    
    // const response = await fetch(`/works/${id}`)
    // console.log({id})
  },
  computed: {
    singlePostView() {
      let self = this;
      let blogs = this.blog
      if(this.getPost === null) { 
        return false
      } else {
        for(let items in blogs) {
          if(blogs[items].permalink === this.getPost) {
            this.singlePost = blogs[items];
          }
        }
      }
      return this.singlePost;
    }
  }
  
}
</script>

<style lang="scss">
.home-links a {
  margin-right: 1rem;
}
.blog-list {
  table-layout: fixed;
  width: 100%;
  & tr {
    border-bottom: 1px solid #000;
    &:first-of-type {
      border-top: 1px solid #000;
      background-color: #000;
      color: #fff;
      th {
        border-right-color: #fff;
        &:last-of-type {
          border-right-color: #000;
        }
      }
    }
  }
  & td, & th {
    border-right: 1px solid #000;
    padding: .5em;
    overflow: auto;
    &:first-of-type {
      border-left: 1px solid #000;
    }
  }
  
}
.local-link__item {
  display: inline-block;
  border: 1px solid #000;
  padding: .2em;
}
// Works post

.works-post {
  padding-top: 100px;
  &__title {
    color: orange;
    font-size: 3em;
    text-align: center;
    background-color: green;
    margin-bottom: 1em;
  }
  &__table {
    margin-bottom: 100px;
    
  }
  &__list {
    border-bottom: 1px solid gray;
    &--title {
      background-color: darkolivegreen;
      color: darksalmon;

    }
    & td, & th {
      padding: .5em;
      border-left: 1px solid gray;
      &:last-of-type {
        border-right: 1px solid gray;
      }
    }
    & th:not(:first-of-type){
      border-left-color: #fff;
    }
    & th:not(:last-of-type) {
      border-right-color: #fff;
    }
  }
}
</style>
