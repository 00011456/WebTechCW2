<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background: $white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0.3rem 0.8rem;
  border-radius: 2rem;
  padding: 2.5rem;
  max-width: 45rem;
  margin-bottom: 0.8rem;
}
</style>
