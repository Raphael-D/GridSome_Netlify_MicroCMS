<template>
  <Layout>
    <div class="hero">
        <carousel class="hero__carousel" :per-page="1" :mouse-drag="false" :autoplay="true">
          <slide class="hero__image" v-for="item in $page.allHome.edges[0].node.carousel" :key="item.id">
            <img :src="item.carousel.url" />
          </slide>
        </carousel>
        <h1 class="hero__heading">{{ $page.allHome.edges[0].node.title }}</h1>
    </div>
    <nav class="l-wrapper gridsome-links">
          <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'readme']"/>Gridsome Docs</a>
          <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'github']"/>Gridsome GitHub</a>
          <a href="https://github.com/Raphael-D/GridSome_Netlify_MicroCMS" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/>開発中のレポジトリはこちら</a>
    </nav>
    <section class="l-section">
      <div class="l-wrapper">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <section class="l-section">
        <h2 class="section-title">Why choose this JAMStack?</h2>
        <ul class="feature">
          <li class="feature__list" v-for="item in $page.allHome.edges[0].node.feature" :key="item.id">
            
            <div class="feature__image">
              <img :src="item.feature_image.url" :alt="item.feature_title">
            </div>
            <div class="feature__content">
              <h3 class="feature__title">{{ item.feature_title }}</h3>
              <p class="feature__detail">{{ item.feature_content }}</p>
            </div>
          </li>
        </ul>
        </section>
        
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
import {Carousel,Slide} from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  },
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
.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  z-index: 1;
}
</style>
