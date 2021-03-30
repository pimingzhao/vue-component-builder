import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ViewUI from 'view-design'

// import style
import 'view-design/dist/styles/iview.css'

import './styles/index.css'
import './components'

Vue.use(ViewUI)

Vue.config.productionTip = false

router.beforeEach((to, form, next) => {
  ViewUI.LoadingBar.start()
  next()
})

router.afterEach(route => {
  ViewUI.LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
