<template>
  <form class="password__form">
    <label for="new-password">Change Password</label>
    <input
      type="password"
      id="new-password"
      placeholder="●●●●●●"
      class="input"
    />
    <label for="confirm-password">Confirm Changed Password</label>
    <input
      type="password"
      id="onfirm-password"
      placeholder="●●●●●●"
      class="input"
    />
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// Edit Password
.password {
  &__form {
    input:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
}

// All labels
label {
  font-weight: bold;
  font-size: 1.2rem;
  color: $grey;
}
</style>
