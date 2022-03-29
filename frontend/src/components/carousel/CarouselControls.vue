<template>
  <button class="carousel-control left" @click="$emit('prev')">Prev</button>
  <button class="carousel-control right" @click="$emit('next')">Next</button>
</template>

<script>
export default {
  // Custom events
  emits: ["prev", "next"],
};
</script>
<style lang="scss" scoped>
.carousel-control {
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  top: calc(50% - 25px);
  color: #f3f3f3;
  cursor: pointer;

  @include respond(tab-land) {
    display: none;
  }
}
.left {
  left: 5rem;
}
.right {
  right: 5rem;
}
</style>
