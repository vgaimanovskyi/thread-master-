import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import scrollTo from './scrollTo'
import VueCarousel from 'vue-carousel';

import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(Vuelidate)
Vue.use(VueCarousel);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC8Cd8xpvEKXh8vjvMtpTB0fdcP7wzBRGc",
  authDomain: "threadmaster-affcd.firebaseapp.com",
  databaseURL: "https://threadmaster-affcd.firebaseio.com",
  projectId: "threadmaster-affcd",
  storageBucket: "threadmaster-affcd.appspot.com",
  messagingSenderId: "351973733556",
  appId: "1:351973733556:web:8b22c8303ca8d9a03a93e1",
  measurementId: "G-BCF66P2GP6"
});
export const db = firebase.firestore();

new Vue({
  router,
  store,
  scrollTo,
  render: h => h(App)
}).$mount('#app')