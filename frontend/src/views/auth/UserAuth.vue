<template>
  <div class="auth mtb-5">
    <h1 class="auth__title">Welcome Dear Guest!</h1>
    <div class="container">
      <HomeCard
        v-for="(card, index) in cardData"
        :key="index"
        :card="card"
        mask
      />
    </div>
  </div>
</template>

<script>
import HomeCard from "@/components/home/HomeCard.vue";

export default {
  components: { HomeCard },
  data() {
    return {
      // Card Data
      cardData: [
        {
          title: "Login",
          src: "login.svg",
          link: "/login",
        },
        {
          title: "Register",
          src: "register.svg",
          link: "/register",
        },
      ],
    };
  },
  name: "auth",
};
</script>

<style lang="scss"></style>
