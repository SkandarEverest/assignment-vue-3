// import "bootstrap/dist/css/bootstrap.min.css"
import './scsss/styles.scss';
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'wowjs/css/libs/animate.css';
import './assets/main.css'

import WOW from "wow.js"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUtensils, faBars, faUserTie, faCartPlus, faHeadset } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

library.add(faUtensils,faBars, faUserTie, faCartPlus, faHeadset)

const app = createApp(App)

app.mixin({
    mounted() {
      // Initialize WOW.js when the component is mounted
      new WOW().init();
    },
  });

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
