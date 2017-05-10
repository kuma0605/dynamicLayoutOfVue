import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    httpRequestCount: 0,
    permission:[],
    user:{},
    breadcrumb: [],
    currentRoute:{}
  },
  mutations: {
    decrementHttpCount(state) {
	    state.httpRequestCount -= 1;
	},
	incrementHttpCount(state) {
	    state.httpRequestCount += 1;
	},
	resetHttpCount(state) {
	    state.httpRequestCount = 0;
	},
	setPermission(state, payload) {
		state.permission = payload.permission;
	},
	setUser(state, payload) {
		state.user = payload.user;
	},
	setBreadcrumb(state, breadcrumb) {
	    state.breadcrumb = breadcrumb;
	},
	setCurrentRoute(state, payload){
		state.currentRoute = payload;
	}
  }
})