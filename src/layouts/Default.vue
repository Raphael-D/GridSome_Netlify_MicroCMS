<template>
  <div class="layout">
    <header class="l-header header">
      <div class="header__wrapper">
        <g-link to="/" class="header__home-link">
          <g-image class="logo header__logo" alt="Example image" src="~/assets/images/site-logo.png" />
          <span class="header__site-title">
            {{ $static.metadata.siteName }}
          </span>
        </g-link>
        <button class="header__toggle-btn"></button>
        <nav class="nav header__nav">
          <g-link class="header__nav-link" to="/">Home</g-link>
          <g-link class="header__nav-link" to="/about/">About</g-link>
          <g-link class="header__nav-link" to="/works/">Works</g-link>
        </nav>
      </div>
    </header>
    <slot/>
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
  metaInfo: {
    link: [
      { rel: 'stylesheet', href: '/css/ress.css' },
      { rel: 'stylesheet', href: '/css/common.css' }
    ]
  }
}
</script>
<style>


</style>
