// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

// Equip Iterator
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

// Get microCMS Post
const getMicroCMSPosts = (URL, API_KEY) => {
  return axios.get(URL, { headers: { 'X-API-KEY': API_KEY } })
  .then(res => { return equipIterator(res.data.contents) })
  .catch(err => { console.log(err) })
}
const worksPosts = getMicroCMSPosts('https://codehack.microcms.io/api/v1/blog', '6ccedd0a-a90d-45f3-801f-1a10abf108f4');

module.exports = function (api) {
  // Dynamic Routing
  // api.createPages(async ({createPage}) => {
  //   let post = await worksPosts;
  //   for(const pathto of post) {
  //     console.log('GET Permalink : ', pathto.permalink)
  //     createPage(({
  //       path: '/works/' + pathto.permalink,
  //       component: './src/pages/Works.vue'
  //     }))
  //   }
  // })

  // Import to GraphQL from MicroCMS.
  api.loadSource(async actions  => {
    let post = await worksPosts;
    let i = 0;
    const collection = actions.addCollection('Works');
    for (const item of post) {
      collection.addNode({
        id: item.id,
        title: item.page_title,
        slug: item.permalink,
        date: item.updatedAt,
        content: item.content,
        path: item.permalink
      })
      console.log('From server.js : ', item.permalink);
    }
  })

  // Add a new field with arguments
  
}
