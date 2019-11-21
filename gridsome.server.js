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

module.exports = function (api) {
  // Dynamic Routing
  api.createPages(async ({createPage}) => {

  })

  // Import to GraphQL from MicroCMS.
  api.loadSource(async actions => {
    let data = await axios.get('https://codehack.microcms.io/api/v1/blog', {
        headers: {
          'X-API-KEY': '6ccedd0a-a90d-45f3-801f-1a10abf108f4'
        }
      })
      .then(res => {
        return equipIterator(res.data.contents);
      })
      .catch(err => {
        console.log(err);
      })
    // data = equipIterator(data);
    const collection = actions.addCollection('Works');
    for (const item of data) {
      console.log(item);
      collection.addNode({
        id: item.id,
        title: item.page_title,
        slug: item.permalink,
        date: item.updatedAt,
        content: item.content
      })
    }
  })
}
