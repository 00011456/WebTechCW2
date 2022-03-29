<template>
  <button v-if="!link" class="btn" :class="mode" type="submit">
    <slot></slot>
  </button>
  <router-link v-else :to="to" class="btn" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: rgba(255, 255, 255, 0.16);
  border: 2px solid $dark-blue-1;
  border-radius: 100rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  text-align: center;
  height: 4.4rem;
  font-size: 1.6rem;
  font-family: Montserrat;
  font-weight: bold;
  color: $dark-blue-1;
  text-transform: uppercase;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.2rem) scale(1.05);
    background-color: $dark-blue-1;
    color: $white;
  }
}
.white {
  background: $white;
}
</style>
