import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    isLogged: false,
    cart: [],
    isAdmin: false,
  },
  mutations: {
    loadState(state, payload) {
      state.products = payload;
    },
    authenticate(state) {
      state.isLogged = !state.isLogged;
    },
    addItemCart(state, payload) {
      state.cart.push(payload);
    },
    removeItemCart(state, payload) {
      state.cart.splice(payload, 1);
    },
    setAdmin(state) {
      state.isAdmin = !state.isAdmin;
    },
  },
  actions: {
    getProducts({ commit }, payload) {
      commit("loadState", payload);
    },
    authAction({ commit }) {
      commit("authenticate");
    },
    addCart({ commit }, payload) {
      commit("addItemCart", payload);
    },
    adminAuth({ commit }) {
      commit("setAdmin");
    },
    removeCartItem({ commit }, payload) {
      commit("removeItemCart", payload);
    },
  },
  modules: {},
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    total: (state) => state.cart.reduce((acc, el) => (acc += el.price), 0),
  },
});
