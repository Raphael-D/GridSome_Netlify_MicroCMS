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
  data() {
    return {
      isLoading: true
    }
  },
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
  },
  methods: {
    checkLoadCondition() {
      // console.log(this.$options.components);
      console.log(this.$options.components['vue-page-transition'].options.beforeCreate);
      // this.$options.components['vue-page-transition']
      // this.$options.components['vue-page-transition'].options.beforeCreate
    }
  },
  mounted() {
    this.checkLoadCondition();
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
.vue-loading {
  // display: none;
  opacity: 0;
  transition: .5s;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
}
.overlay-up-leave-acitive,
.overlay-up-leave-to,
.overlay-up-enter-active,
.overlay-up-enter-to {
  & .vue-loading {
    display: block;
  }
}
.overlay-up-leave-active .vue-loading {
  opacity: 0;
  // transition: .5s;
}
.overlay-up-leave-to .vue-loading {
  opacity: 1;
  //transition: .5s;
}
.overlay-up-enter-active .vue-loading {
  opacity: 1;
  // transition: .5s;
}
// .overlay-up-enter-to .vue-loading {
//   opacity: 0;
// }

</style>