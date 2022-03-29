<template>
  <div class="tag" :class="mode">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  border: 0.2rem solid $dark-blue-1;
  border-radius: 110rem;
  width: 12rem;
  height: 4.4rem;
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 600;
  color: $dark-blue-1;
  transition: all 0.3s;
  cursor: cell;

  @include respond(big-phone) {
    width: 8rem;
    font-size: 1.4rem;
    height: 3rem;
  }

  &:hover {
    background: rgba(154, 179, 218, 0.3);
  }
}

.active {
  background: rgba(154, 179, 218, 0.3);
}
</style>
