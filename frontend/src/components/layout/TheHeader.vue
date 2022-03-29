<template>
  <header class="header">
    <div class="header__nav">
      <div class="header__user">
        <router-link
          v-if="isAdmin"
          to="/upload"
          class="header-admin link"
          active-class="active"
          exact
        >
          Admin
        </router-link>
        <li>Hey, {{ userName }}</li>
      </div>

      <ul class="header__links">
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
      <BurgerMenu />
    </div>
    <router-link to="/home">
      <img
        src="../../../src/assets/icons/logo.svg"
        alt="Logo"
        class="header-logo"
      />
    </router-link>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import BurgerMenu from "@/components/layout/BurgerMenu.vue";

export default {
  components: { BurgerMenu },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      authState: "isAuthenticated",
      userName: "userName",
    }),
    isAdmin() {
      return this.$store.getters.userStatus === "admin";
    },
  },
  methods: {
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
.header {
  padding: 2.5rem 0;
  background-color: $dark-blue-1;
  color: $white;
  font-size: 1.8rem;
  position: relative;
  font-weight: 300;
  font-family: "Raleway", sans-serif;

  @include respond(tab-port) {
    font-size: 1.6rem;
  }

  @include respond(tab-mini-1) {
    padding: 2rem 0;
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5rem;

    a.active {
      font-weight: bold;
    }
  }

  &__user {
    display: flex;
    align-items: center;
  }

  &__links {
    display: flex;

    li:not(:last-child) {
      margin-right: 5rem;
    }

    .link {
      color: $white;
      cursor: pointer;
    }

    @include respond(tab-port) {
      display: none;
    }
  }
}
.header-logo {
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
}
.header-admin {
  color: $white;
  margin-right: 5rem;
}

.burger {
  @include respond(tab-port) {
    display: flex;
  }
}
</style>
