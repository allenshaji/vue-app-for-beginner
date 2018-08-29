import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        isLog : !!localStorage.getItem('situation')
    },
    mutations: {
        loginUser (state) {
            state.isLoggedIn = true
            state.isLog = true
        },
        logoutUser (state) {
            state.isLoggedIn = false
            state.isLog = false
        },
    }
})