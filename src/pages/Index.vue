<template>
  <Layout>
    <section class="l-section">
      <div class="l-wrapper">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <g-image alt="Example image" src="~/favicon.png" width="135" />

        <h1>日本のフロントエンドのためのJAMStack開発中サイト by GridSome, Netlify, MicroCMS, Github</h1>
        <h1 class="ruby-text">Developing JAMStack by GridSome, Netlify, MicroCMS, Github for FrontEnd in Japan</h1>
        <a target="_blank" href="https://github.com/Raphael-D/GridSome_Netlify_MicroCMS">
          ソースはこちら<span class="ruby-text">Source here</span>
        </a><small>※最も進行しているのは「feature」ブランチです。<span class="ruby-text">The most advanced is the “feature” branch.</span></small>

        <p class="home-links">
          <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
          <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
        </p>
        <h1 style="background-color: #00f; color: #fff; padding: .5em; text-align: center;">{{ $page.allHome.edges[0].node.title }}</h1>
        <ul>
          <li v-for="item in $page.allHome.edges[0].node.feature" :key="item.id">
            <h2>{{ item.feature_title }}</h2>
            <img :src="item.feature_image.url">
            <p>{{ item.feature_content }}</p>
          </li>
        </ul>
        
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  allHome {
  	edges {
      node {
        id
        title
        date
        introduce {
          intro_title
          intro_content
          intro_image {
            url
          }
        }
        hero {
          url
        }
        carousel {
          id
          carousel {
            url
          }
        }
        feature {
          feature_title
          feature_image {
            url
          }
          feature_content
        }
      }
    }
  }
}

</page-query>
<script>
export default {
  metaInfo: {
    title: 'microCMSをGridSomeで構築してNetlifyで公開するための検証サイト'
  },
  methods: {
      convertDate(value) {
        let date = value.split('-'),
            getYear = date[0].toString(),
            getMonth = date[1].toString(),
            getDay = date[2].toString(),
            convertDay = getDay.substring(0, getDay.indexOf("T")),
            stringDate =  getYear + '/' + getMonth + '/' + convertDay;
            return stringDate
      }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
