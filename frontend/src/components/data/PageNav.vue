<template>
  <div class="nav">
    <h3 class="nav__title">{{ title }}</h3>
    <nav>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <a
            :href="'#' + link.id"
            class="nav__link"
            :class="{ 'nav__link--active': link.isActive }"
            @click="link.isActive = !link.isActive"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["title", "links"],
};
</script>

<style lang="scss">
.nav {
  display: flex;
  flex-direction: column;
  margin-right: 6rem !important;
  height: fit-content;
  padding-right: 4rem !important;
  border-right: 1px solid $dark-blue-1;
  align-items: flex-end;
  color: $dark-blue-1;

  @include respond(big-phone) {
    padding-right: 0 !important;
    margin-right: 0 !important;
    margin-bottom: 3rem;
    border: 0;
    align-items: center;
  }

  nav {
    margin-top: 4rem;
    text-align: right;

    @include respond(big-phone) {
      margin: 3rem 0;
    }

    ul {
      @include respond(big-phone) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }

      li:not(:last-child) {
        @include respond(big-phone) {
          margin-right: 3rem;
        }
        @include respond(phone) {
          margin-right: 1.5rem;
        }
      }
    }
  }

  &__title {
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.8rem;

    @include respond(big-phone) {
      font-size: 2.5rem;
    }
  }

  &__link {
    font-family: Montserrat;
    font-size: 1.6rem;
    line-height: 2.9rem;
    text-transform: uppercase;
    color: $dark-blue-1;
    transition: all 0.3s;

    @include respond(phone) {
      font-size: 1.5rem;
    }

    &--active {
      font-weight: bold;
    }

    &:hover {
      font-weight: bold;
    }
  }
}
</style>
