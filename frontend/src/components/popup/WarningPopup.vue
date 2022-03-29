<template>
  <div class="back">
    <div class="popup">
      <p>You have unsave changes, do you want to safe them?</p>
      <div class="popup__action">
        <button type="reset">
          Cancel
          <svg class="icon">
            <use xlink:href="@/assets/icons/auth.svg#cancel"></use>
          </svg>
        </button>
        <button type="button">
          <svg class="icon">
            <use xlink:href="@/assets/icons/auth.svg#refresh"></use>
          </svg>
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
