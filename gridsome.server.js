// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
module.exports = function (api) {

  // Get microCMS data
  api.createPages(async ({ createPage }) => {
    let mydata = await axios.get('https://codehack.microcms.io/api/v1/blog', {
      headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
    }).then(res => {
      console.log(res.data.contents)
      return res.data.contents;
    }).catch(err => {
      console.log(err);
    })

    // Enable iterator to mydata
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

    // Take out permalink, then push to keys.
    for(const items of mydata) {
      createPage(({
        path: '/works/' + items.permalink,
        component: './src/pages/Works.vue'
      }))
    }
  })
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })
}
