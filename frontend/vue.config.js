module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
              @import "@/assets/styles/style.scss";
              @import "@/assets/styles/variables.scss";
              @import "@/assets/styles/utilities.scss";
              @import "@/assets/styles/animations.scss";
              @import "@/assets/styles/mixins.scss";
          `,
      },
    },
  },
};
