<template>
  <Layout>
    <div class="hero">
      <h1 class="hero__heading">投稿一覧ページ</h1>
    </div>
    <section class="l-section">
    <div class="l-wrapper">
      <article class="posts works-posts">
          <section v-for="(item, key) in blog" :key="key" class="post-list">
            <h2 class="post-list__title">{{ item.node.title }}</h2>
            <time class="post-list__date"><font-awesome-icon :icon="['fas', 'clock']" />{{ item.node.date }}</time>
            <div class="post-list__content">{{ rawcontent[key] }}</div>
            <div class="post-list__link"><g-link :to="item.node.path">READ MORE<font-awesome-icon class="post-list__icon" :icon="['fas', 'angle-right']" /></g-link></div>
          </section>
      </article>

    </div>
    </section>
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
  data() {
    return {
      blog: null,
      rawcontent: []
    }
  },
  metaInfo: {
    title: 'GridSome & MicroCMS 投稿一覧ページのサンプル',
    meta: [
        { name: 'keywords', content: 'JAMStack, SSR, MicroCMS, GridSome, Netlify, Github, Vue, Static Site Generator, JAPAN'},
        { name: 'description', content: 'このページは、MicroCMSとGridSomeのJAMStack開発環境で作成された投稿一覧ページです。静的サイトジェネレーターを利用しているのでページ表示が高速です。参考ソースはGithubよりご覧ください。'}
    ],
    link: [
      { rel: 'stylesheet', href: '/css/style.css' }
    ]
  },
  methods: {
      putData() {
        this.blog = this.$page.allWorks.edges;
        for(let item in this.blog) {
          this.rawcontent.push(this.blog[item].node.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,''));
        }
      }
  },
  mounted() {
    this.putData();
    
  },
  computed: {
  }
  
}
</script>

<style lang="scss">

</style>
