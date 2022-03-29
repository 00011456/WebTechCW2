<template>
  <router-link
    to="/uni-guide"
    class="article__card"
    v-for="(article, index) in recArticleData"
    :key="index"
  >
    <img :src="require(`@/assets/img/${article.src}`)" alt="Article Cover" />
    <div class="article__bottom">
      <div class="article__info">
        <p class="article__name">{{ article.title }}</p>
        <p class="article__time">{{ article.time }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  computed: {
    recArticleData() {
      return this.$store.getters["recArticles/recArticlesData"];
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  &__card {
    max-width: 37rem;
    background: linear-gradient(
      95.43deg,
      #efefef -4.14%,
      rgba(239, 239, 239, 0.1) 106.53%
    );
    border: 0.21px solid $black;
    box-shadow: inset -4px -4px 30px rgba(0, 0, 0, 0.25),
      inset 4px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem;
    cursor: pointer;
    transition: all 0.5s;
    text-decoration: none;

    &:hover {
      transform: rotate(1deg) translateY(-0.2rem);
      filter: brightness(80%);
    }

    img {
      width: 100%;
      height: 15rem;
      object-fit: cover;
      border-radius: 1.5rem 1.5rem 0px 0px;
    }

    @include respond(phone) {
      &:not(:last-child) {
        margin-bottom: 3rem;
      }
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Montserrat;
    line-height: 180.4%;
    text-transform: capitalize;
    padding: 0 1rem;
  }
  &__info {
    display: flex;
    flex-direction: column;
  }

  &__name {
    font-weight: 600;
    font-size: 1.6rem;
  }

  &__time {
    font-size: 1.4rem;
  }
}
</style>
