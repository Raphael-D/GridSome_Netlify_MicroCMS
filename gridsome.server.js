// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')
const YOUR_API_KEY = '6ccedd0a-a90d-45f3-801f-1a10abf108f4';
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
  .then(res => { 
    // return typeof res.data === 'object' ? res.data : typeof res.data.contents === 'object' ? equipIterator(res.data.contents) : false;
    
    if(res.data.contents) {
      return equipIterator(res.data.contents);
    } else {
      return res.data
    }
    
  })
  .catch(err => { console.log(err) })
}
const homePosts = getMicroCMSPosts('https://codehack.microcms.io/api/v1/home', YOUR_API_KEY);
const worksPosts = getMicroCMSPosts('https://codehack.microcms.io/api/v1/blog', YOUR_API_KEY);
const aboutPosts = getMicroCMSPosts('https://codehack.microcms.io/api/v1/company', YOUR_API_KEY);

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


  // Import the HomePost to GraphQL from MicroCMS.
  api.loadSource(async actions => {
    let post = await homePosts;
    const  collection = actions.addCollection('Home');
      collection.addNode({
        id: post.id,
        title: post.page_title,
        date: post.updatedAt,
        content: post.content,
        introduce: post.introduce,
        hero: post.hero,
        carousel: post.carousel,
        feature: post.feature
      })
  })

  // Import the WorksPost to GraphQL from MicroCMS.
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
    }
  })

  // Import the CompanyPost to GraphQL from MicroCMS.
  api.loadSource(async actions => {
    let post = await aboutPosts;
    const  collection = actions.addCollection('About');

      collection.addNode({
        id: post.id,
        title: post.title,
        date: post.updatedAt,
        greeting: post.greeting,
        hero: post.hero,
        about: post.about
        
      })
  })

  
  // Add a new field with arguments
  
}
