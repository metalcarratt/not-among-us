import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTree, faGhost, faBomb, faPepperHot, faCat, faKiwiBird,
    faDrumstickBite, faPlane, faDove, faCookieBite, faCoffee,
    faBook, faGripHorizontal, faUserSecret, faUserTie, faUserNinja,
    faArrowAltCircleRight, faKey, faHammer, faTools, faSprayCan,
    faSkull, faUserMd, faDoorClosed, faDoorOpen, faMask } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTree, faGhost, faBomb, faPepperHot, faCat, faKiwiBird,
    faDrumstickBite, faPlane, faDove, faCookieBite, faCoffee,
    faBook, faGripHorizontal, faUserSecret, faUserTie, faUserNinja,
    faArrowAltCircleRight, faKey, faHammer, faTools, faSprayCan,
    faSkull, faUserMd, faDoorClosed, faDoorOpen, faMask);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
