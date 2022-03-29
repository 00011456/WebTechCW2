<template>
  <base-spinner v-if="!loaded"></base-spinner>
  <div class="home mtb-5" v-else>
    <h1 class="home__title">Discover the University of your dream!</h1>
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
      loaded: true,
      cardData: [
        {
          title: "UniGuide",
          src: "uniguide.svg",
          desc:
            "The UniGuide is a platform where users can read real articles about universities and find even more information about it.",
          link: "/uni-guide",
        },
        {
          title: "UniPack",
          src: "unipack.svg",
          desc:
            "The UniPack is a platform where the user can find information about universities in Uzbekistan. In particular, about the history of the university, faculties, admission, scholarships, social life and tuition fees.",
          link: "/uni-pack",
        },
      ],
    };
  },
  name: "Home",
  methods: {},
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    align-items: center;

    @include respond(mini-phone) {
      flex-direction: column;
    }
  }

  &__title {
    font-weight: 800;
    font-size: 3.2rem;
    color: $dark-blue-1;
    margin: 5rem 0;
    text-align: center;
    text-transform: uppercase;

    @include respond(tab-mini) {
      font-size: 2.5rem;
    }
    @include respond(big-phone) {
      margin: 3rem;
    }
  }
}
</style>
