<template>
  <Layout>
    <div class="hero">
      <ClientOnly>
        <carousel class="hero__carousel" :per-page="1" :mouse-drag="false" :autoplay="true">
          <slide class="hero__image" v-for="(item, key) in carousel" :key="key">
            <img :src="item.carousel.url" />
          </slide>
        </carousel>
        </ClientOnly>
        <h1 class="hero__heading">{{ title }}</h1>
    </div>
    <nav class="l-wrapper info-links">
          <a class="info-links__item" href="https://gridsome.org/docs/" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'readme']"/>Gridsome Docs</a>
          <a class="info-links__item" href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener"><font-awesome-icon :icon="['fab', 'github']"/>Gridsome GitHub</a>
          <a class="info-links__item" href="https://github.com/Raphael-D/GridSome_Netlify_MicroCMS" target="_blank"><font-awesome-icon :icon="['fab', 'github']"/>開発中のリポジトリはこちら</a>
          <g-link class="info-links__item" to="/Vuefontawesomecheatsheet/">Vue Fontawesome</g-link>
    </nav>
    <section class="l-section">
      <div class="l-wrapper">
        <!-- Learn how to use images here: https://gridsome.org/docs/images -->
        <section class="l-section">
        <h2 class="section-title">Why choose this JAMStack?</h2>
        <h3 class="sabu-taitoru">"Konsooru.rogu()"<br />そんなあなたへ</h3>
        <ul class="feature">
          <li class="feature__list" v-for="(item, key) in feature" :key="key">
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
// import {Carousel,Slide} from 'vue-carousel';

export default {
  data() {
    return {
      title: null,
      date: null,
      introduce: {
        intro_title: null,
        intro_content: null,
        intro_image: {
          url: null
        }
      },
      hero: {
        url: null
      },
      carousel: [{
        id: null,
        carousel: {
          url: null
        }
      }],
      feature: [{
        feature_title: null,
        feature_image: {
          url: null
        },
        feature_content: null
      }]
    }
  },
  components: {
    Carousel: () =>
      import('vue-carousel')
      .then(m => m.Carousel)
      .catch(),
    Slide: () =>
      import('vue-carousel')
      .then(m => m.Slide)
      .catch()
  },
  metaInfo: {
    title: 'microCMSをGridSomeで構築してNetlifyで公開するための検証サイト'
  },
  methods: {
    // convertDate(value) {
    //   let date = value.split('-'),
    //     getYear = date[0].toString(),
    //     getMonth = date[1].toString(),
    //     getDay = date[2].toString(),
    //     convertDay = getDay.substring(0, getDay.indexOf("T")),
    //     stringDate = getYear + '/' + getMonth + '/' + convertDay;
    //   return stringDate
    // },
    putData() {
      this.title = this.$page.allHome.edges[0].node.title;
      this.date = this.$page.allHome.edges[0].node.date
      this.hero.url = this.$page.allHome.edges[0].node.hero.url
      this.carousel = this.$page.allHome.edges[0].node.carousel
      this.feature = this.$page.allHome.edges[0].node.feature
      this.introduce = this.$page.allHome.edges[0].node.introduce
    }
  },
  mounted() {
    this.putData();
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
