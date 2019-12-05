<template>
  <div class="layout">
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
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
.fade-enter-active {
  transition: opacity .5s;
  transform: translateY(10%)
}

.fade-enter {
  opacity: 0;
  transform: translateY(0);
}

</style>
