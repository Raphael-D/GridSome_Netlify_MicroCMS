// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

// Enable iterator to mydata
const equipIterator = function(target) {
  target[Symbol.iterator] = function() {
    let i = 0;
    return {
      next() {
        return target.length <= i ? { done: true } : { value: target[i++] };
      }
    }
  }
  return target;
}
module.exports = function (api) {

  // Get microCMS data
  api.createPages(async ({ createPage }) => {
    let mydata = await axios.get('https://codehack.microcms.io/api/v1/blog', {
      headers: {'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'}
    }).then(res => {
      return equipIterator(res.data.contents);
    }).catch(err => {
      console.log(err);
    })


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
