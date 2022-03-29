<template>
  <div class="guide__card" v-for="(article, index) in data" :key="index">
    <router-link :to="articleUrl(article.id)">
      <img
        :src="require(`@/assets/img/articles/${article.articleCover}`)"
        alt="Article Cover"
        class="card__image"
      />
    </router-link>
    <div class="card__details">
      <div class="card__data">
        <svg>
          <use xlink:href="@/assets/icons/like.svg#like"></use>
        </svg>
        <div>
          <h4 class="card__title">{{ article.articleTitle }}</h4>
          <p class="card__date">
            {{ "Date: " + normolizeDate(article.createdAt) }}
          </p>
        </div>
      </div>
      <uni-tag>{{ article.articleTag }}</uni-tag>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    normolizeDate(date) {
      return date.substr(0, 10);
    },
    articleUrl(url) {
      return `/uni-guide/${url}`;
    },
  },
};
</script>

<style lang="scss" scoped>
// Article Card
.guide__card {
  background: linear-gradient(
    95.43deg,
    #efefef -4.14%,
    rgba(239, 239, 239, 0.1) 106.53%
  );
  border: 0.05rem solid #000000;
  box-shadow: inset -4px -4px 30px rgba(0, 0, 0, 0.25),
    inset 4px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  font-family: Montserrat;
  width: 80.5rem;
  transition: all 0.5s;
  overflow: hidden;

  @include respond(tab-port) {
    width: 65rem;
  }
  @include respond(tab-mini) {
    width: 42rem;
  }
  @include respond(phone) {
    width: 35rem;
  }
  @include respond(mini-phone) {
    width: 28rem;
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &:hover img {
    filter: brightness(80%);
    border-top: 0.05rem solid #000000;
    transform: scale(1.05);
  }
  &:hover {
    transform: translateY(-0.5rem);
  }
}

// Article Card
.card {
  &__image {
    cursor: pointer;
    border-radius: 1.5rem 1.5rem 0px 0px;
    width: 100%;
    height: 36rem;
    object-fit: cover;
    transition: all 0.5s;

    @include respond(tab-mini) {
      height: 22rem;
    }
    @include respond(phone) {
      height: 20rem;
    }
  }

  &__details {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 2rem;
    align-items: center;

    @include respond(phone) {
      flex-direction: column;
    }
  }
  &__data {
    display: flex;
    align-items: center;

    svg {
      margin-right: 1.3rem;
      width: 2.4rem;
      height: 2.4rem;
      fill: $grey;
      cursor: pointer;

      &.active {
        fill: $red;
      }

      &:hover {
        fill: $red;
      }
    }
  }
  &__title {
    font-weight: 600;
    font-size: 1.6rem;
    text-transform: capitalize;

    @include respond(big-phone) {
      font-size: 1.4rem;
    }
  }
  &__date {
    font-size: 1.4rem;
    text-transform: capitalize;

    @include respond(big-phone) {
      font-size: 1.2rem;
    }

    @include respond(phone) {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
