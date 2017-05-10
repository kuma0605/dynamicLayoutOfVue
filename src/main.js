import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

import App from './App.vue'

import axios from 'axios'

Vue.prototype.$http=axios;

import './http-interceptors';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

import routes from './router.config'

const router = new VueRouter({
  routes // short for routes: routes
});

import { breadcrumbMap } from './breadcrumbMap';
import $ from 'jquery';
import store from './store';

function getBreadcrumb(path, breadcrumb = []) {
  let pathObj = breadcrumbMap[path];

  breadcrumb.push(pathObj&&pathObj.text || '');
  if (pathObj&&pathObj.parent) {
    breadcrumb.unshift(...getBreadcrumb(pathObj.parent));
  }
  return breadcrumb;
}

router.afterEach(function(to, from , next) {
    let toPath = to.path;

    // path with query params
    let search = toPath.indexOf('?');
    if (search !== -1) {
      toPath = toPath.slice(0, search);
    }
    // path with slash
    let endWithSlash = toPath.endsWith('/');
    if (endWithSlash) {
      toPath = toPath.slice(0, toPath.length - 1);
    }

    let breadcrumb = getBreadcrumb(toPath);
    store.commit('setBreadcrumb', breadcrumb);

    store.commit('setCurrentRoute', {
      name:to.name,
      path:to.path
    })
    
});

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
});



