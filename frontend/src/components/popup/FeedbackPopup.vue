<template>
  <div class="back">
    <div class="popup">
      <p>{{ message }}</p>
      <div class="popup__action">
        <router-link to="/">
          <svg class="icon">
            <use xlink:href="@/assets/icons/auth.svg#refresh"></use>
          </svg>
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"],
};
</script>

<style lang="scss"></style>
