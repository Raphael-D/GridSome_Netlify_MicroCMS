<template>
  <div class="layout">
    <ClientOnly>
      <vue-loading type="spin" color="#333" :size="{ width: '50px', height: '50px' }"></vue-loading>
    </ClientOnly>
    <main>
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
// import VueLoading from 'vue-loading-template';
export default {
  name: 'default',
  components: {
    VueLoading: () =>
      import('vue-loading-template')
      .then(m => m.VueLoading)
      .catch()
  },
  data() {
    return {
      toggle_condition: false,
      nav_condition: false
    }
  },
  metaInfo: {
    link: [
      { rel: 'stylesheet', href: '/css/ress.css' },
      { rel: 'stylesheet', href: '/css/common.css' }
    ]
  }
}
</script>
<style lang="scss" scoped>


</style>
