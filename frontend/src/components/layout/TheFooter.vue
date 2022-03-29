<template>
  <footer class="footer">
    <div class="footer__nav">
      <p class="footer__rights">
        This web application was created to fulfill Web Technology module's
        requirements and does not represent an actual company or service.
      </p>
      <ul class="footer__links">
        <li>
          <router-link to="/company" class="link" active-class="active" exact>
            Company
          </router-link>
        </li>
        <li>
          <router-link to="/policies" class="link" active-class="active" exact>
            Policies
          </router-link>
        </li>
        <li>
          <a href="https://t.me/Untitled_project1" class="link">Elsewhere</a>
        </li>
        <li>
          <a href="mailto:mansurisakov.dev@gmail.com" class="link">Contact</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 3rem 0;
  background-color: $dark-blue-1;
  color: $white;
  font-size: 1.8rem;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;

  &__rights {
    font-size: 1.2rem;
    width: 80%;
  }

  @include respond(tab-port) {
    font-size: 1.6rem;
  }

  @include respond(big-phone) {
    padding: 2rem 0;
  }

  @include respond(mini-phone) {
    text-align: center;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5rem;

    @include respond(big-phone) {
      flex-direction: column;
    }
  }

  &__links {
    display: flex;
    align-items: center;

    @include respond(tab-port) {
      margin-left: 1rem;
    }

    @include respond(big-phone) {
      margin-left: 0;
      margin-top: 2rem;
    }

    li:not(:last-child) {
      margin-right: 5rem;

      @include respond(tab-port) {
        margin-right: 3rem;
      }

      @include respond(mini-phone) {
        margin-right: 2rem;
      }
    }

    .link {
      color: $white;

      &.active {
        font-weight: bold;
      }
    }
  }
}
</style>
