<template>
  <div class="home-card" @mouseenter="showMask" @mouseleave="hideMask">
    <div class="home-card__img">
      <img :src="require(`@/assets/icons/${card.src}`)" />
      <span class="home-card__title" v-if="!maskIsVisible || !mask">{{
        card.title
      }}</span>
    </div>
    <HomeCardMask
      v-if="maskIsVisible && mask"
      class="home-card__mask"
      :title="card.title"
      :link="card.link"
      :desc="card.desc"
    />
  </div>
</template>

<script>
import HomeCardMask from "@/components/home/HomeCardMask.vue";

export default {
  components: { HomeCardMask },
  props: {
    card: {
      type: Array,
      required: false,
      default: null,
    },
    mask: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      maskIsVisible: false,
    };
  },
  methods: {
    showMask() {
      this.maskIsVisible = true;
    },
    hideMask() {
      this.maskIsVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-card {
  position: relative;
  margin: 0.7rem 5rem 5rem 5rem;
  overflow: hidden;
  transition: all 0.5s;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 2rem;
  animation: scaleUp 0.5s;

  @include respond(tab-port) {
    margin: 0.7rem 3rem 5rem 3rem;
  }

  @include respond(big-phone) {
    margin: 0.7rem 3rem 3rem 3rem;
  }
  @include respond(phone) {
    margin: 0.7rem 2rem 3rem 2rem;
  }

  &:hover {
    transform: translateY(-0.7rem);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  }

  &__img {
    border-radius: 2rem;
    position: relative;
    background: linear-gradient(180deg, #dbe2ef 0%, #3f72af 126%);
    padding: 5rem 2rem;
    height: 40rem;
    width: 100%;

    @include respond(tab-port) {
      padding: 3rem 2rem;
      height: 35rem;
    }

    @include respond(tab-mini) {
      height: 30rem;
    }

    @include respond(big-phone) {
      height: 25rem;
    }

    @include respond(phone) {
      height: 20rem;
    }

    @include respond(mini-phone) {
      height: 30rem;
    }

    cursor: pointer;

    img {
      width: 30rem;
      height: 30rem;

      @include respond(tab-port) {
        width: 25rem;
        height: 25rem;
      }
      @include respond(tab-mini) {
        width: 20rem;
        height: 20rem;
      }
      @include respond(big-phone) {
        width: 15rem;
        height: 15rem;
      }
      @include respond(phone) {
        height: 12rem;
        width: 12rem;
      }
      @include respond(mini-phone) {
        height: 20rem;
        width: 20rem;
      }
    }
  }

  &__title {
    font-size: 2.4rem;
    font-weight: 800;
    color: $white-1;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    @include respond(tab-mini) {
      font-size: 2.2rem;
    }
  }
  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 2rem;
  }
}
</style>
