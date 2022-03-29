<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: $light-blue-2;
  box-shadow: inset 0px 0px 4px $dark-blue-1;
  border-radius: 2rem;
  padding: 5rem;
  margin: 0 auto;
  width: 110rem;

  @include respond(tab-land) {
    width: 90rem;
  }
  @include respond(tab-port) {
    width: 65rem;
    padding: 2.5rem;
  }
  @include respond(big-phone) {
    width: 50rem;
  }
  @include respond(phone) {
    width: 35rem;
  }
  @include respond(mini-phone) {
    width: 32rem;
  }
}
</style>
