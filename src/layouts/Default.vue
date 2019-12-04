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
        <button class="header__toggle-btn" @click="showMenu" :class="{'is_active': toggle_condition}"></button>
        <transition name="nav" appear>
        <nav class="nav header__nav" v-show="nav_condition">
          <g-link class="header__nav-link" to="/">Home</g-link>
          <g-link class="header__nav-link" to="/about/">About</g-link>
          <g-link class="header__nav-link" to="/works/">Works</g-link>
        </nav>
        </transition>
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
  },
  methods: {
    showMenu() {
      let self = this;
      this.$mobileDetect({
        breakpoint: 768,
        mobile: function() {
          self.toggle_condition = !self.toggle_condition;
          self.nav_condition = !self.nav_condition;
        },
        pc: function() {
          return false;
        }
      })
    },
    initMobileMenu() {
      if(this.nav_condition === true) {
        this.toggle_condition = false;
        this.nav_condition = false;
        return this.toggle_condition, this.nav_condition;
      }
    },
    initPcMenu() {
      if(this.nav_condition === false) {
        this.toggle_condition = true;
        this.nav_condition = true;
        return this.toggle_condition, this.nav_condition;
      }
    }
  },
  computed: {
    
  },
  mounted() {
    let self = this;
    self.$mobileDetect({
      breakpoint: 768,
      mobile: function() {
        self.initMobileMenu();
      },
      pc: function() {
        self.initPcMenu();
      }
    })
    window.addEventListener('resize', function() {
      self.$mobileDetect({
        mobile: function() {
          self.initMobileMenu();
        },
        pc: function() {
          self.initPcMenu();
        }
      })
    })
  }
}
</script>
<style lang="scss" scoped>
.header__toggle-btn {
  &::before,
  &::after {
    transition: .2s;
  }
}
.header__toggle-btn.is_active {
  box-shadow: -1px -1px 1px #ccc;
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
    top: 50%;
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
    top: 50%;
  }
}
.nav-enter,
.nav-leave-to {
  opacity: 0;
}
.nav-enter-active,
.nav-leave-active {
  transition: .2s;
}
.nav-enter-to,
.nav-leave {
  opacity: 1;
}



</style>
