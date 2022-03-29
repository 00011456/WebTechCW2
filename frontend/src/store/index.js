import { createStore } from "vuex";
import recArticleModule from "./modules/recArticle";
import AuthModule from "./modules/auth/index";

const store = createStore({
  modules: {
    recArticles: recArticleModule,
    auth: AuthModule,
  },

  // state() {
  //   return {
  //     isLoggedIn: false,
  //   };
  // },
  // mutations: {
  //   login(state) {
  //     state.isLoggedIn = true;
  //   },
  //   logout(state) {
  //     state.isLoggedIn = false;
  //   },
  // },
  // actions: {
  //   login(context) {
  //     context.commit("login");
  //   },
  //   logout(context) {
  //     context.commit("logout");
  //   },
  // },
  // getters: {
  //   isAuthenticated(state) {
  //     return state.isLoggedIn;
  //   },
  // },
});

export default store;
