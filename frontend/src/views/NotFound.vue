<template>
  <div class="not-found mtb-5">
    <div class="container">
      <div class="not-found__text">
        <h2>Whooops!</h2>
        <p>Sorry, the page you are looking for doesn`t exist</p>
        <base-button link to="/">Go Back</base-button>
      </div>
      <div class="not-found__image">
        <img src="../assets/icons/404.svg" alt="404 Page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.not-found {
  color: $dark-blue-1;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    @include respond(tab-land) {
      flex-direction: column;
      justify-content: center;
    }
  }

  &__text {
    @include respond(tab-land) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h2 {
      font-weight: bold;
      font-size: 6.4rem;
      line-height: 7.5rem;

      @include respond(tab-mini) {
        font-size: 5rem;
      }
    }

    p {
      font-size: 2.4rem;
      line-height: 2.8rem;
      margin-top: 0.5rem;

      @include respond(tab-mini) {
        font-size: 2rem;
      }
    }

    .btn {
      width: 20rem;
      margin: 10rem 1rem 1rem;

      @include respond(tab-mini) {
        margin: 5rem 1rem 1rem;
      }
    }
  }

  &__image {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      @include respond(tab-mini) {
        width: 60rem;
      }
      @include respond(phone) {
        width: 40rem;
      }
    }
  }
}
</style>
