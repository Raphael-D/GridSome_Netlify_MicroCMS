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
