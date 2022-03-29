export default {
  namespaced: true,
  state() {
    return {
      recArticles: [
        {
          src: "articles/article-1.jpg",
          title: "Open Doors Day for Parents at WIUT!",
          time: "11th oct 2021, 15:10",
        },
        {
          src: "articles/article-2.jpg",
          title: "Open Doors Day for Parents at WIUT!",
          time: "11th oct 2021, 15:10",
        },
        {
          src: "articles/article-3.jpg",
          title: "Open Doors Day for Parents at WIUT!",
          time: "11th oct 2021, 15:10",
        },
      ],
    };
  },
  getters: {
    recArticlesData(state) {
      return state.recArticles;
    },
  },
};
