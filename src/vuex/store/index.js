import Vue from 'vue'
import Vuex from 'vuex'
import service from './service.js'
Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        service
    }
})
