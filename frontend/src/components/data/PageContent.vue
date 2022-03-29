<template>
  <div class="content" v-for="(content, index) in data" :key="index">
    <div class="content__section">
      <h3 class="nav__title" :id="content.id">{{ content.title }}</h3>
      <img
        src="../../assets/icons/arrow.svg"
        alt="Arrow Icon"
        class="content__arrow"
        @click="content.isActive = !content.isActive"
        :class="{ 'content__arrow--active': content.isActive }"
      />
    </div>
    <transition name="content-text">
      <p class="content__text" v-if="content.isActive">
        {{ content.text }}
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss" scoped>
.content {
  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &__section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  &__text {
    font-size: 1.2rem;
  }
  .content-text-enter-active {
    animation: moveDown 0.5s;
  }
  .content-text-leave-active {
    animation: moveDown 0.5s reverse;
  }

  &__arrow {
    display: block;
    transition: all 0.3s ease-in;
    cursor: pointer;

    &--active {
      transform: rotate(180deg);
    }

    &:hover {
      transform: translateY(0.3rem);
    }
  }
}
</style>
