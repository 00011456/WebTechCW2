<template>
  <div class="auth mtb-5">
    <div>
      <router-link to="/user-auth" class="auth__cancel">
        <svg>
          <use xlink:href="@/assets/icons/auth.svg#cancel"></use>
        </svg>
      </router-link>
    </div>
    <h2 class="auth__subtitle">Create New Account</h2>
    <AuthForm :schema="formSchema" @onRegister="submit" />
  </div>
</template>

<script>
import AuthForm from "@/components/auth/AuthForm";
import * as Yup from "yup";

export default {
  components: { AuthForm },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: "Full Name",
          name: "name",
          as: "input",
          type: "text",
          rules: Yup.string().required(),
        },
        {
          label: "Email",
          name: "email",
          as: "input",
          type: "text",
          rules: Yup.string().email().required(),
        },
        {
          label: "Your Password",
          name: "password",
          as: "input",
          type: "password",
          rules: Yup.string().min(6).required(),
        },
        {
          label: "Confirm Password",
          name: "passwordConfirm",
          as: "input",
          type: "password",
          rules: Yup.string().min(6).required(),
        },
        {
          label: "What type of user?",
          name: "role",
          as: "select",
          children: [
            {
              tag: "option",
              value: "user",
              text: "User",
            },
            {
              tag: "option",
              value: "contributor",
              text: "Contributor",
            },
          ],
        },
      ],
    };
    return {
      formSchema,
    };
  },
  methods: {
    async submit(values) {
      try {
        await this.$axios.post(`api/v1/users/signup`, values);
        this.$router.replace(`/login`);
      } catch (error) {
        this.$router.replace(`/404`);
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
