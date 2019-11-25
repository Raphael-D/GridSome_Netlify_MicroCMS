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
            <hr />
            <ul>
                <li v-for="(item, i) in otherpagelink" :key="i">
                    {{ i }}
                    <g-link :to="item.path" @click="allPagelinks">{{ item.title }}</g-link>
                </li>
            </ul>
            <hr />
            <table>
                <tr v-for="item in $page.allWorks.edges" :key="item.node.permalink" class="works-post__list">
                    <td>{{ item.node.id }}</td>
                    <td>{{ item.node.title }}</td>
                    <td>{{ item.node.slug }}</td>
                    <td>{{ item.node.date }}</td>
                    <td v-html="item.node.content"></td>
                    <td><g-link :to="item.node.path">{{ item.node.path }}</g-link></td>
                </tr>
            </table>
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
      otherpagelink: []
    }
  },
  metaInfo() {
    return {
      title: this.$page.works.title
    }
  },
  methods: {
    allPagelinks() {
      let self = this;
      let current = self.getNowPage();
      let allpage = self.allpages;
    for (let items in allpage) {
        if (allpage[items].node.path !== current) {
        this.otherpagelink.push(allpage[items].node)
        }
    }
    return this.otherpagelink;
    },
    getNowPage() {
      console.log('/works/' + this.$route.params.path + '/')
      return '/works/' + this.$route.params.path + '/';
    }
  },
  mounted() {
    this.currentpage = '/works/' + this.$route.params.path + '/';
    this.allpages = this.$page.allWorks.edges;
    this.allPagelinks();
  }

}
</script>