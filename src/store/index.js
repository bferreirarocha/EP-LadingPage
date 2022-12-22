import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentPage: 1,
        cover: 'rdn',
        lan: 'en'
    },
    mutations: {
        updateCurrentPage(state, value) {
            state.currentPage = value;
        },
        updateCover(state, value) {
            state.cover = value;
        },
        updateLan(state, value) {
            state.lan = value;
        }
    },
    actions: {},
    modules: {}
});
