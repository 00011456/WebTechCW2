<template>
  <base-spinner v-if="loaded"></base-spinner>
  <div v-else class="profile mtb-10">
    <base-card>
      <div class="container">
        <h3 class="profile__title">Mansur`s Profile</h3>

        <!-- Image -->
        <div class="profile__image">
          <img
            v-if="user.photo"
            :src="require(`@/assets/img/${user.photo}`)"
            alt="Article Cover"
            class="article__cover"
          />
        </div>

        <!-- profile Form -->
        <div class="profile__form">
          <PersonalForm :disabled="disabled" :user="user" />
        </div>
        <base-button link to="/edit-profile"> Edit Profile </base-button>
      </div>
    </base-card>
  </div>
</template>

<script>
import PersonalForm from "@/components/profile/PersonalForm.vue";

export default {
  name: "EditProfile",
  components: { PersonalForm },
  data() {
    return {
      disabled: true,
      loaded: false,
      user: {},
    };
  },
  async mounted() {
    this.loaded = true;
    try {
      const res = await this.$axios.get(`api/v1/users/me`, {
        headers: { Authorization: `Bearer ${this.$store.getters.token}` },
      });
      this.user = res.data.data;
      this.loaded = false;
    } catch (error) {
      this.loaded = false;
      this.$router.replace(`/404`);
      console.error("ERROR");
    }
  },
};
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: 0 0rem;
  }

  &__title {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: $dark-blue-1;
    text-align: center;
  }

  &__image {
    display: block;
    text-align: center;
    margin: 5.5rem auto;

    img {
      width: 20rem;
      height: 15rem;
      border-radius: 0.5rem;
      object-fit: cover;
    }
  }

  .btn {
    width: 20rem;

    @include respond(big-phone) {
      margin-top: 3.5rem;
    }
  }
}
</style>
