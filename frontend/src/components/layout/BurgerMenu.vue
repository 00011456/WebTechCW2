<template>
  <nav class="burger">
    <!-- Burger -->
    <label for="check">
      <input type="checkbox" id="check" @click="toggleMenu" />
      <span></span>
      <span></span>
      <span></span>
    </label>
    <!-- Content -->
    <ul class="dropdown-content" v-if="menuPopup">
      <li>
        <router-link to="/profile" class="link" active-class="active" exact>
          Profile
        </router-link>
      </li>
      <li v-if="!authState">
        <router-link
          to="/user-auth"
          class="link"
          active-class="active"
          exact
          @click="login()"
        >
          Login
        </router-link>
      </li>
      <li v-if="authState">
        <a class="link" active-class="active" exact @click="logout()">
          Logout
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuPopup: false,
    };
  },
  computed: {
    authState() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    toggleMenu() {
      this.menuPopup = !this.menuPopup;
    },
    async logout() {
      try {
        await this.$store.commit("logout");
        this.$router.replace(`/user-auth`);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.burger {
  background-color: rgba(#fff, 0.1);
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.15);
    background-color: rgba(#fff, 0.2);
  }
  &:active {
    background-color: rgba(#fff, 0.1);
    transform: scale(1.05);
  }

  @include respond(big-phone) {
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
  }

  // Burger Menu Icon
  label {
    flex-direction: column;
    width: 1.5rem;
    cursor: pointer;
    display: flex;
  }

  label span {
    background: #fff;
    border-radius: 1rem;
    height: 0.2rem;
    margin: 0.15rem 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  span {
    width: 100%;
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotateZ(45deg) translate(0.3rem, 0.3rem);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotateZ(-45deg);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 0;
    transform: translate(0.75rem, -0.2rem) rotateZ(45deg);
  }
}

// Content
.dropdown-content {
  display: block;
  position: absolute;
  top: 4rem;
  background-color: $dark-blue-1;
  border-radius: 1rem;
  min-width: 10.5rem;
  box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
  z-index: 3;

  a {
    color: $white;
    padding: 1.2rem 1.6rem;
    font-size: 1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.active {
      font-weight: bold;
    }

    &:hover {
      border-radius: 1rem;
      background-color: $dark-blue-2;
      transform: translate(0);
    }
  }
}
</style>
