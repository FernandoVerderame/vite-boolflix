import "@fontsource/montserrat"
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faStar, faMagnifyingGlass);

const app = createApp(App)

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')
