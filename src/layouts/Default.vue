<template>
  <div class="layout">
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

export default {
  name: 'default',
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
