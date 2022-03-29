<template>
  <base-spinner v-if="loaded"></base-spinner>
  <div v-else class="edit mtb-10">
    <base-card>
      <div class="container">
        <form>
          <div class="edit-personal">
            <!-- Personal -->
            <div class="personal">
              <!-- Image -->
              <div class="personal__image">
                <img
                  src="@/assets/img/default.jpg"
                  alt="Default Image"
                  class="personal__photo"
                />
                <div class="personal__control">
                  <svg class="icon">
                    <use xlink:href="@/assets/icons/auth.svg#upload"></use>
                  </svg>
                  <svg class="icon">
                    <use xlink:href="@/assets/icons/auth.svg#refresh"></use>
                  </svg>
                  <svg class="icon">
                    <use xlink:href="@/assets/icons/auth.svg#delete"></use>
                  </svg>
                </div>
              </div>

              <!-- Personal Form -->
              <div class="personal__form">
                <PersonalForm
                  :disabled="disabled"
                  :user="user"
                  @editProfile="submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </base-card>
    <FeedbackPopup v-if="showPopup" :message="message" />
  </div>
</template>

<script>
import PersonalForm from "@/components/profile/PersonalForm.vue";
import FeedbackPopup from "@/components/popup/FeedbackPopup.vue";

export default {
  name: "EditProfile",
  components: { PersonalForm, FeedbackPopup },
  data() {
    return {
      disabled: false,
      loaded: false,
      user: {},
      message: "",
      showPopup: false,
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
  methods: {
    async submit(name, email) {
      this.loaded = true;

      try {
        await this.$axios.patch(`api/v1/users/${this.user._id}`, name, email);
        this.message = "Successfully updated your profile!";
        this.loaded = false;
        this.showPopup = true;
      } catch (error) {
        this.message = error.message;
        this.loaded = false;
        this.showPopup = true;
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.personal {
  display: flex;
  justify-content: center;
  align-items: center;

  @include respond(tab-port) {
    flex-direction: column;
  }

  .personal__form {
    @include respond(tab-port) {
      flex-direction: column;
    }
  }

  &__image {
    display: flex;
    margin-right: 5rem;

    @include respond(tab-port) {
      margin-bottom: 3.5rem;
    }
  }

  &__photo {
    width: 20rem;
    height: 15rem;
    border-radius: 0.5rem;
  }

  &__control {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
    background: $light-blue-2;
    box-shadow: 0px 0px 1px $dark-blue-1;
    border-radius: 0.5rem;
    padding: 2rem 1rem;

    svg:not(:last-child) {
      margin-bottom: 2rem;
    }

    .icon {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>
