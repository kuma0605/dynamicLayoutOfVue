import axios from 'axios';

import store from './store';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.commit('incrementHttpCount')
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
   	store.commit('decrementHttpCount')
   	
    return response;
  }, function (error) {
    store.commit('decrementHttpCount')
    // Do something with response error
    return Promise.reject(error);
  });
