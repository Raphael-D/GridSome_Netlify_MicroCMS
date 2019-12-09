<template>
  <div>
    <Header></Header>
    <Layout>
      <vue-page-transition name="overlay-up">
        <router-view />
      </vue-page-transition>
    </Layout>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  }
}
</script>
<style lang="scss">
#app .overlay-left[data-v-4c22b934],
#app .overlay-right[data-v-4c22b934],
#app .overlay-top[data-v-4c22b934],
#app .overlay-bottom[data-v-4c22b934]   {
    background: #fff !important;
    z-index: 100;
}
:root {
  --overlay-bg: #fff!important;
}
// .overlay-up-leave-active {
//   background-color: #fff!important;
// }
// .overlay-up-leave-to {
//   background-color: #fff!important;
// }
// .overlay-up-enter-active {
//   background-color: #fff!important;
// }
// .overlay-up-enter-to {
//   background-color: #fff!important;
// }
</style>