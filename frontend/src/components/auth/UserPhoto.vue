<template>
  <h2 class="auth__subtitle">Set image for your profile</h2>
  <form class="auth__form">
    <img src="@/assets/img/default.jpg" alt="Profile Image" />
    <div class="auth__photo">
      <svg>
        <use xlink:href="@/assets/icons/auth.svg#refresh"></use>
      </svg>
      <svg>
        <use xlink:href="@/assets/icons/auth.svg#upload"></use>
      </svg>
      <svg>
        <use xlink:href="@/assets/icons/auth.svg#delete"></use>
      </svg>
    </div>

    <base-button>
      Finish
      <svg class="auth__right">
        <use xlink:href="@/assets/icons/auth.svg#right"></use>
      </svg>
    </base-button>
  </form>
</template>

<script>
export default {};
</script>

<style></style>
