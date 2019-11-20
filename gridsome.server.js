// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
module.exports = function (api) {
  function fetchArticles() {
      axios
        .get('https://codehack.microcms.io/api/v1/blog', {
            headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
        })
        .then(res => {
            // this.blog = res.data.contents;
            // return this.blog
            return res.data.contents;
        })
        .catch(err => {
            console.log(err);
        })
  }
  
  

  api.createPages(async ({ createPage }) => {
    let mydata = await axios.get('https://codehack.microcms.io/api/v1/blog', {
      headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
    }).then(res => {
      console.log('successsssssssssssssssssssssssssssss')
      console.log(res.data.contents)
      return res.data.contents;
    }).catch(err => {
      console.log('hoooooooooooooooooooooooooogeeeeeeeeeeeeeeeee')
      console.log(err);
    })
    mydata[Symbol.iterator] = function () {
      let index = 0;
      return {
        next() {
          if (mydata.length <= index) {
            return {done: true};
          } else {
            return {value: mydata[index++]};
          }
        }
      };
    };
    // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-------->>>>>>>>>>>>>>>>>>>FETCH ARTICLES -> ', mydata)
    for(const items of mydata) {
      // console.log('MY DATA ITEMS ===?/?', items)
      createPage(({
        path: '/works/' + items.permalink,
        component: './src/pages/Works.vue'
      }))
    }
  })
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })
  // let blogs = fetchArticles();
  // for(let items in blogs) {
  //   api.createPages(({ createPage }) => {
  //     createPage({
  //       path: '/works/' + blogs[items].permalink,
  //       component: './src/pages/Works.vue'
  //     })
  //   })
  // }
  const hoge01 = 'hoge01';
  // api.createPages(({ createPage }) => {
  //   createPage({
  //     path: '/works/' + hoge01,
  //     component: './src/pages/Works.vue'
  //   })
  //   let blogs = fetchArticles()
  //   for(let items in blogs) {
  //     createPage({
  //       path: '/works/' + blogs[items].permalink,
  //       component: './src/pages/Works.vue'
  //     })
  //   }
  // })
  // api.createManagedPages(({ createPage }) => {
  //   createPage({
  //     path: '/my-page',
  //     component: './src/templates/MyPage.vue'
  //   })
  // })

}
