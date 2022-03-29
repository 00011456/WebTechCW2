<template>
  <form class="personal__form" @submit.prevent="onSubmit">
    <div class="form__col">
      <h3 class="edit__title">Personal Information</h3>
      <label for="name">Full Name</label>
      <input
        type="text"
        id="name"
        v-model="name"
        class="input"
        :disabled="disabled"
      />
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        class="input"
        :disabled="disabled"
      />
      <label for="type">Type</label>
      <input
        type="text"
        id="type"
        :value="user?.role"
        class="input"
        disabled="disabled"
      />
    </div>

    <div class="edit-password" v-if="!disabled">
      <h3 class="edit__title">Change Password</h3>
      <PasswordForm />
    </div>

    <div class="edit__action" v-if="!disabled">
      <button type="reset">
        Discard Changes
        <svg class="icon">
          <use xlink:href="@/assets/icons/auth.svg#cancel"></use>
        </svg>
      </button>
      <button type="submit">
        <svg class="icon">
          <use xlink:href="@/assets/icons/auth.svg#refresh"></use>
        </svg>
        Update
      </button>
    </div>
  </form>
</template>

<script>
import PasswordForm from "@/components/profile/PasswordForm.vue";

export default {
  components: { PasswordForm },
  props: ["disabled", "user"],
  data() {
    return {
      name: this.user.name,
      email: this.user.email,
    };
  },

  methods: {
    onSubmit() {
      this.$emit("editProfile", { name: this.name, email: this.email });
    },
  },
};
</script>

<style lang="scss" scoped>
.personal__form {
  display: flex;
  align-items: center;
  flex-direction: column;

  @include respond(tab-port) {
    flex-direction: column;
  }
}
.form__col {
  margin-bottom: 3rem;
  input:not(:last-child) {
    margin-bottom: 3rem;
  }

  @include respond(tab-port) {
    margin-left: 0;

    &:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
}

.edit-password {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.edit {
  width: 100%;
  position: relative;
  padding: 10rem 0;

  .container {
    margin: 0 0rem;
  }

  &__title {
    font-weight: bold;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: $dark-blue-1;
    text-align: center;
    margin-bottom: 1rem;
  }

  &__action {
    display: flex;
    justify-content: center;
    margin-top: 1rem;

    button {
      background: #f7f7f7;
      border-radius: 4px;
      border: none;
      display: flex;
      align-items: center;
      padding: 0.4rem 0.6rem;
      font-size: 1.4rem;
      font-weight: bold;
      color: $dark-blue-1;
      transition: all 0.5s;
      cursor: pointer;
      margin: 1rem;

      &:hover {
        transform: translateY(-0.2rem) scale(1.05);
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }

      &:active {
        transform: translateY(0rem) scale(1);
        box-shadow: 0;
      }

      svg {
        margin: 0.5rem;
        width: 2rem;
        height: 2rem;
      }

      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
}

// All labels
label {
  font-weight: bold;
  font-size: 1.2rem;
  color: $grey;
}
</style>
