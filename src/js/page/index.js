import Vue from  'vue';
import 'js-polyfills';//����vuex2.x������ie9+
import Index from '../../fragment/index.vue';
import store from '../../vuex/store/index.js';
var app = new Vue({
  store,
  el: '#app',
  methods: {

  },
  created() {
    console.log('created');
  },
  render(h) {
    return (<Index></Index>);
  }
});

/**
 * @require '../../less/index.less'
 */
