// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Header from '~/layouts/Header.vue'
import Footer from '~/layouts/Footer.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
import mobileDetect from './mobiledetect';
config.autoAddCss = false;
library.add(fas, fab, far)
import VuePageTransition from 'vue-page-transition';



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
}
