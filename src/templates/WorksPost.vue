<template>
    <Layout>
        <div class="hero">
          <h2 class="hero__heading">
            投稿個別ページ
          </h2>
        </div>
        <article class="l-article">
        <div class="l-wrapper single-post">
            <h1 class="single-post__title">{{ $page.works.title }}</h1>
            <time class="single-post__date"><font-awesome-icon :icon="['fas', 'clock']" />{{ $page.works.date }}</time>
            <div class="single-post__content" v-html="$page.works.content"></div>
        </div>
        </article>
        <nav class="single-post-nav">
          <div class="l-wrapper">
              <!-- Pager -->
              <ul class="single-post-pager">
                  <li class="single-post-pager__lists" v-for="(item, i) in allPagelinks" :key="i">
                    <g-link :to="item.path" class="single-post-pager__link">
                      <span class="single-post-pager__icon single-post-pager__icon--prev" v-if="pagercondition.prev & i == 0 | !pagercondition.next & i == 0">
                        <font-awesome-icon class="link-icon" :icon="['fas', 'chevron-left']" />
                      </span>
                      {{item.title}}
                      <span class="single-post-pager__icon single-post-pager__icon--next" v-if="pagercondition.next & i == 1 | !pagercondition.prev & i == 0">
                        <font-awesome-icon class="link-icon" :icon="['fas' ,'chevron-right']" />
                      </span>
                    </g-link>
                  </li>
              </ul>
          </div>
        </nav>
    </Layout>
</template>

<page-query>
    query($id: ID!) {
      works(id: $id) {
        id
        title
        slug
        date(format: "YYYY年MM月DD日 HH:mm:ss")
        content
        path
      }
      allWorks {
        edges {
          node {
            id
            title
            slug
            date(format: "YYYY年MM月DD日 HH:mm:ss")
            path
          }
        }
      }
    }
</page-query>
<script>
export default {
  data() {
    return {
      currentpage: null, 
      allpages: null,
      otherpagelink: [],
      pagercondition: {
        prev: false,
        next: false
      },
      rawcontent: null
    }
  },
  metaInfo() {
    return {
      title: this.$page.works.title,
      meta: [
        { name: 'keywords', content: 'JAMStack, SSR, MicroCMS, GridSome, Netlify, Github, Vue, Static Site Generator, JAPAN'},
        { name: 'description', content: this.content}
      ],
      link: [
        { rel: 'stylesheet', href: '/css/style.css' }
      ]
    }
  },
  methods: {
    putData() {
      this.rawcontent = this.$page.works.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'');
    }
  },
  computed: {
    getNowPage() {
      // console.log(this.$page.works.path);
      return this.$page.works.path;
    },
    allPagelinks() {
      this.otherpagelink = [];
      let self = this;
      let current = self.currentpage;
      let allpage = self.allpages;
      let indexNum = [];


      for (let items in allpage) {
        indexNum.push(allpage[items].node.path)
        // console.log("indexNum.indexOf(this.getNowPage):",indexNum.indexOf(this.getNowPage), indexNum[items]);

        // First Key Condition
        if(indexNum.indexOf(this.getNowPage) === 0) {
          this.otherpagelink.push(allpage[1].node)
          this.pagercondition.prev = false;
          this.pagercondition.next = true;
          // console.log("First link condition",this.otherpagelink)
          return this.otherpagelink;
        }


        // Last key Condition
        if(indexNum.indexOf(this.getNowPage) === allpage.length -1) {
          this.otherpagelink.push(allpage[items -1].node)
          this.pagercondition.prev = true;
          this.pagercondition.next = false;
          // console.log("Last link condition",this.otherpagelink)
          return this.otherpagelink;
        }


        // Middle key Condition
        if(indexNum.indexOf(this.getNowPage) !== 0 && indexNum.indexOf(this.getNowPage) !== allpage.length -1 && indexNum.indexOf(this.getNowPage) !== -1) {
            this.otherpagelink.push(allpage[indexNum.indexOf(this.getNowPage) -1].node);
            this.otherpagelink.push(allpage[indexNum.indexOf(this.getNowPage) +1].node);
            this.pagercondition.prev = true;
            this.pagercondition.next = true;
            // console.log("Middle link condition : ",this.otherpagelink)
            return this.otherpagelink;
        }
      }
    }
  },
  mounted() {
    this.currentpage = '/works/' + this.$route.params.path + '/';
    this.allpages = this.$page.allWorks.edges;
    this.putData();
    // this.allPagelinks();
  }

}
</script>
<style lang="scss" scoped>
p {
  word-wrap: break-word;
  white-space: pre-wrap;
}
</style>