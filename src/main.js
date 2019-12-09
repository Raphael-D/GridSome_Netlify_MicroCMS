// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Default.vue apply to global component.
import DefaultLayout from '~/layouts/Default.vue'

// Header apply to global component.
import Header from '~/layouts/Header.vue'

// Footer apply to global component.
import Footer from '~/layouts/Footer.vue';

// Vue font awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Font awesome svg type
import { config, library } from '@fortawesome/fontawesome-svg-core'

// Font awesome solid type
import { fas } from '@fortawesome/free-solid-svg-icons'

// Font awesome brand type
import { fab } from '@fortawesome/free-brands-svg-icons'

// Font awesome regular type
import { far } from '@fortawesome/free-regular-svg-icons';

// Font awesome style sheet
import '@fortawesome/fontawesome-svg-core/styles.css'

// Handmade plugin Mobile window width check
import mobileDetect from './mobiledetect';

config.autoAddCss = false;

// Font awesome add to library
library.add(fas, fab, far);

// Page transition plugin
import VuePageTransition from 'vue-page-transition';

// Loading animation component
// import VueLoading from 'vue-loading-template';



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // head.link.push({
  //   rel: 'stylesheet',
  //   type: 'text/css',
  //   href: '/assets/css/reset.css'
  // })
  Vue.use(VuePageTransition);
  Vue.use(mobileDetect);
  Vue.component('Layout', DefaultLayout)
  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // Vue.use(VueLoading)
}
