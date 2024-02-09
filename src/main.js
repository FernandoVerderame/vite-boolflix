import "@fontsource/montserrat"
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as solidStar, faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(solidStar, regularStar, faMagnifyingGlass, faBell);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')
