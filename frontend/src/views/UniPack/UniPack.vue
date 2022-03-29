<template>
  <div class="uni-pack mtb-10">
    <!-- Filter -->
    <form
      class="pack__search"
      @submit.prevent="searchUni()"
      @keyup.enter="serchUni()"
    >
      <div class="pach__inp">
        <input
          type="text"
          placeholder="Enter name of university"
          id="search"
          required
          v-model="uniName"
        />
        <label for="search">
          <img src="../../assets/icons/search.svg" alt="Search Icon" />
        </label>
      </div>
      <p>Search by Name, ex. WIUT</p>
    </form>
    <!-- Carousel -->
    <Carousel :slides="slides" :interval="3000" controls indicators />
  </div>
</template>

<script>
import Carousel from "@/components/carousel/Carousel.vue";

export default {
  name: "UniPack",
  components: { Carousel },
  data: () => ({
    slides: [
      "universities/wiut-1.jpg",
      "universities/wiut-2.jpg",
      "universities/wiut-3.jpg",
      "universities/wut-1.jpg",
      "universities/wut-2.jpg",
      "universities/wut-3.jpg",
    ],
    uniName: "",
  }),
  methods: {
    async searchUni() {
      this.$router.replace(`/uni-data/${this.uniName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.uni-pack {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $dark-blue-1;
}
.pack {
  &__search {
    margin: 3rem 0 9rem 0;
    position: relative;

    &__input {
      display: flex;
    }

    input {
      border-radius: 4px;
      border: none;
      width: 30.6rem;
      height: 3.2rem;
      padding: 0.8rem;
      transition: all 0.3s;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

      &:hover {
        box-shadow: rgba($dark-blue-1, 0.5) 0px 0.5rem 3rem 0px,
          rgba(0, 0, 0, 0.06) 0px 0px 0px 0.1rem;
      }
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
      position: absolute;
      right: 0.6rem;
      top: 1rem;
      cursor: pointer;
    }
  }
}
</style>
