<template>
  <base-spinner v-if="loaded"></base-spinner>
  <div class="article" v-else>
    <img
      v-if="articleData.articleCover"
      :src="require(`@/assets/img/articles/${articleData.articleCover}`)"
      alt="Article Cover"
      class="article__cover"
    />

    <div class="container">
      <div class="article__data">
        <div class="article__author">
          <svg>
            <use xlink:href="@/assets/icons/like.svg#like"></use>
          </svg>
          <p>Post Author: {{ articleData.author?.name }}</p>
        </div>
        <p class="article__date">
          {{ "Created at: " + normolizeDate(articleData.createdAt) }}
        </p>
      </div>
      <div class="article__title">{{ articleData.acticleTitle }}</div>
      <p class="article__text">{{ articleData.articleContent }}</p>
      <base-button>More about WIUT</base-button>
      <div class="article__rec mb-10">
        <!-- Article Recommendation -->
        <RecArticles />
      </div>
    </div>
  </div>
</template>

<script>
import RecArticles from "@/components/article/RecArticles.vue";

export default {
  components: { RecArticles },
  data() {
    return {
      loaded: false,
      articleData: {},
      articleId: this.$route.params.articleId,
    };
  },
  async mounted() {
    this.loaded = true;
    try {
      const res = await this.$axios.get(`api/v1/articles/${this.articleId}`);
      this.articleData = res.data.data;
      this.loaded = false;
    } catch (error) {
      this.loaded = false;
      this.$router.replace(`/404`);
      console.error(error);
    }
  },
  methods: {
    normolizeDate(date) {
      if (date) {
        return date.substr(0, 10);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  color: $dark-blue-1;
  font-size: 1.6rem;
  font-family: Montserrat;

  &__cover {
    width: 100%;
    height: 57rem;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    background-image: linear-gradient(
        to right,
        rgba($dark-blue-1, 0.6),
        rgba($light-blue-1, 0.6)
      ),
      url("../../assets/img/article-1.png");

    @include respond(big-phone) {
      height: 30rem;
    }
  }
  .container {
    display: flex;
    flex-direction: column;

    @include respond(tab-land) {
      margin: 0 5rem;
    }
    @include respond(phone) {
      margin: 0 2.5rem;
    }
  }

  &__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;

    @include respond(phone) {
      margin-top: 3rem;
    }
    @include respond(mini-phone) {
      font-size: 1.4rem;
    }
  }
  &__author {
    display: flex;
    align-items: center;
    svg {
      width: 3rem;
      height: 3rem;
      margin-right: 2.5rem;
      cursor: pointer;

      &:hover {
        fill: $red;
      }
    }
  }

  &__text {
    line-height: 2;

    @include respond(mini-phone) {
      font-size: 1.4rem;
    }
  }

  &__title {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
    margin: 5rem 0;
    line-height: 3.8rem;
    font-family: Raleway;

    @include respond(phone) {
      margin: 3rem;
      font-size: 2.5rem;
    }
  }
  .btn {
    width: 37rem;
    margin: 5rem auto;

    @include respond(phone) {
      width: 25rem;
      margin: 3rem auto;
    }
  }
  &__rec {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @include respond(phone) {
      flex-direction: column;
    }
  }
}
</style>
