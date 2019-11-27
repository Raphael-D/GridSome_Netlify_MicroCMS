<template>
    <Layout>
        <div class="l-wrapper">
            <p>single post page</p>
            <h1>{{ $page.works.title }}</h1>
            <dl>
                <time>
                    {{ $page.works.date }}
                </time>
            </dl>
            <div v-html="$page.works.content"></div>
            <p>現在のページURL：{{ $page.works.path }}</p>
            <p>現在のページタイトル：{{ $page.works.title }}</p>
            <hr />

            <!-- Pager -->
            <ul class="single-post-pager">
                <li class="single-post-pager__lists" v-for="(item, i) in allPagelinks" :key="i">
                  
                    <g-link :to="item.path" class="single-post-pager__link">
                      <span class="single-post-pager__icon single-post-pager__icon--prev" v-if="pagercondition.prev & i == 0 | !pagercondition.next & i == 0">
                        <font-awesome-icon :icon="['fas', 'chevron-left']" />
                      </span>
                      {{item.title}}
                      <span class="single-post-pager__icon single-post-pager__icon--next" v-if="pagercondition.next & i == 1 | !pagercondition.prev & i == 0">
                        <font-awesome-icon :icon="['fas' ,'chevron-right']" />
                      </span>
                    </g-link>
                  
                </li>
            </ul>
            <hr />
            
            <hr />
            



            <!-- <table v-pre>
                <tr v-for="item in $page.allWorks.edges" :key="item.node.permalink" class="works-post__list">
                    <td>{{ item.node.id }}</td>
                    <td>{{ item.node.title }}</td>
                    <td>{{ item.node.slug }}</td>
                    <td>{{ item.node.date }}</td>
                    <td v-html="item.node.content"></td>
                    <td><g-link :to="item.node.path">{{ item.node.path }}</g-link></td>
                </tr>
            </table> -->
        </div>
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
      debug: 'No data',
      pagercondition: {
        prev: false,
        next: false
      }
    }
  },
  metaInfo() {
    return {
      title: this.$page.works.title
    }
  },
  methods: {
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
      // // return this.otherpagelink;
      // if(indexNum.length !== 0) {
      //     console.log("allLinkArrays",indexNum);
      //     console.log("this.otherpagelink", this.otherpagelink)
      //     // console.log(indexNum.length -1, 'indexNum.length')
      //     // counts = 1;
      // }
      // // return this.otherpagelink;
      
    }
  },
  mounted() {
    this.currentpage = '/works/' + this.$route.params.path + '/';
    this.allpages = this.$page.allWorks.edges;
    // this.allPagelinks();
  }

}
</script>