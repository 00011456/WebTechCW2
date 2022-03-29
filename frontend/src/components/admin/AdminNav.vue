<template>
  <div class="admin-nav">
    <div class="admin-nav__link">
      <router-link to="/upload">
        Upload <img src="../../assets/icons/upload.svg" alt="Upload " />
      </router-link>
    </div>
    <div class="admin-nav__link">
      <router-link to="/stats">
        Stats <img src="../../assets/icons/stats.svg" alt="Stats Icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.admin-nav {
  display: flex;
  justify-content: center;

  &__link {
    margin: 5rem 5rem 0 5rem;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-0.2rem);
    }

    &:active {
      transform: translateY(0);
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 2rem;
      color: $dark-blue-1;
      font-weight: bold;
    }
  }
}
</style>
