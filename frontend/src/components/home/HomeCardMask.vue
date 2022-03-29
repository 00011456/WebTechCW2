<template>
  <div class="home-card__mask">
    <div class="mask-container">
      <h2 class="home-card__title">{{ title }}</h2>
      <p class="home-card__desc" v-if="desc">
        {{ desc }}
      </p>
      <base-button link :to="link" mode="white">Open</base-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCardMask",
  props: {
    title: {
      type: String,
      required: false,
      default: null,
    },
    desc: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.home-card {
  &__mask {
    position: relative;
    color: $white;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 2rem;
    display: flex;
  }

  .mask-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;

    @include respond(big-phone) {
      padding: 0.5rem 1rem;
    }
  }

  .btn {
    width: 15rem;

    @include respond(big-phone) {
      width: 10rem;
      height: 3.5rem;
    }
    @include respond(phone) {
      height: 3rem;
    }
  }

  &__title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 800;

    @include respond(tab-mini) {
      font-size: 2.5rem;
    }
    @include respond(big-phone) {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
    @include respond(phone) {
      margin-bottom: 0rem;
      font-size: 2rem;
    }
    @include respond(mini-phone) {
      margin-bottom: 1rem;
      font-size: 2.5rem;
    }
  }

  &__desc {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 1.5rem;
    font-weight: 500;

    @include respond(tab-mini) {
      font-size: 1.2rem;
    }
    @include respond(big-phone) {
      margin-bottom: 1rem;
    }
    @include respond(phone) {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    @include respond(mini-phone) {
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
  }
}
</style>
