<template>
  <Layout>

    <div class="hero">
      <h1 class="hero__heading">{{ title }}</h1>
    </div>
    <section class="l-section">
      <div class="l-wrapper">
        <div v-html="greeting"></div>
        <div><img :src="hero.src" /></div>
        <div v-html="about"></div>
      </div>
    </section>
    </Layout>
</template>
<page-query>
query {
  allAbout {
    edges {
      node {
        id
        date
        title
        hero {
          url
        }
        greeting
        about
      }
    }
  }
}

</page-query>
<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: 'about us'
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
    putData() {
      this.title = this.$page.allAbout.edges[0].node.title; 
      this.greeting = this.$page.allAbout.edges[0].node.greeting;
      this.hero.src = this.$page.allAbout.edges[0].node.hero.src;
      this.about = this.$page.allAbout.edges[0].node.about;
    }
  },
  mounted() {
    this.putData();
  }
  
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
