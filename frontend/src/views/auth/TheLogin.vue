<template>
  <div class="auth mtb-5">
    <div>
      <router-link to="/user-auth" class="auth__cancel">
        <svg>
          <use xlink:href="@/assets/icons/auth.svg#cancel"></use>
        </svg>
      </router-link>
    </div>
    <h2 class="auth__subtitle">Log into your account</h2>
    <AuthForm :schema="formSchema" @onLogin="submit" />
  </div>
</template>

<script>
import AuthForm from "@/components/auth/AuthForm";
import * as Yup from "yup";

export default {
  components: {
    AuthForm,
  },
  data: () => {
    const formSchema = {
      fields: [
        {
          label: "Email",
          name: "email",
          as: "input",
          rules: Yup.string().email().required(),
        },
        {
          label: "Your Password",
          name: "password",
          as: "input",
          type: "password",
          rules: Yup.string().min(6).required(),
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
        const res = await this.$axios.post(`api/v1/users/login`, values);
        let token = res.data.token;
        let userId = res.data.data.user._id;
        let userStatus = res.data.data.user.role;
        let userName = res.data.data.user.name;
        this.$store.commit("logIn", { token, userId, userStatus, userName });
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.$router.replace(`/404`);
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss"></style>
