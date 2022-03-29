<template>
  <base-spinner v-if="loaded"></base-spinner>
  <div v-else class="guide mtb-10">
    <div class="container">
      <div class="guide__articles">
        <h3 class="guide__title">See what’s new on your loved unis</h3>
        <!-- Article Cards -->
        <GuideCard :data="articlesData" />
      </div>
      <div class="guide__filter">
        <!-- Top -->
        <div class="filter__top">
          <h4 class="filter__title">TOP</h4>
          <ul class="filter__list">
            <li v-for="(top, index) in topFive" :key="index">
              {{
                `${index + 1}. ${top.universityShortName} - ${
                  top.ratingsAverage
                } rating`
              }}
            </li>
          </ul>
        </div>
        <!-- Filter Search -->
        <div class="filter__search">
          <div class="filter__input">
            <input type="text" placeholder="Filter" id="filter" />
            <label for="filter">Search your university tag here</label>
          </div>
          <!-- Tags -->
          <div class="filter__tags">
            <uni-tag>WIUT</uni-tag>
            <uni-tag>AMITY</uni-tag>
            <uni-tag>WUT</uni-tag>
            <uni-tag>IUT</uni-tag>
            <uni-tag>YEODJU</uni-tag>
            <uni-tag>LMSUT</uni-tag>
            <uni-tag>BMU</uni-tag>
            <uni-tag>TPU</uni-tag>
            <uni-tag>MDIST</uni-tag>
            <uni-tag>RSUOG</uni-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GuideCard from "@/components/article/GuideCard.vue";

export default {
  name: "UniGuide",
  components: { GuideCard },
  data() {
    return {
      loaded: false,
      topFive: {},
      articlesData: {},
    };
  },
  async mounted() {
    this.loaded = true;

    try {
      const top = await this.$axios.get(`api/v1/unis/top-5-best`);
      const res = await this.$axios.get(`api/v1/articles`);
      this.topFive = top.data.data;
      this.articlesData = res.data.data;
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
.guide {
  color: $dark-blue-1;

  // Container
  .container {
    display: flex;
    justify-content: space-between;

    @include respond(tab-land) {
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  &__title {
    font-size: 3.2rem;
    line-height: 3.8rem;
    margin-bottom: 6rem;
    text-align: center;
  }

  //   Article
  &__articles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  //   Filter
  &__filter {
    border-left: 0.1rem solid $dark-blue-1;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;

    @include respond(tab-land) {
      border: none;
      margin-bottom: 5rem;
    }
  }
}

// Filter
.filter {
  &__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 3.5rem;
    border-bottom: 0.1rem solid $dark-blue-1;

    @include respond(tab-land) {
      display: none;
    }
  }
  &__title {
    font-weight: bold;
    font-size: 3.2rem;
    text-transform: uppercase;
  }
  &__list {
    li {
      font-family: Montserrat;
      font-weight: 600;
      font-size: 1.6rem;
      text-transform: uppercase;
    }
  }
  &__search {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.5rem;
  }
  &__input {
    display: flex;
    flex-direction: column;

    input {
      background: $white;
      border: 0.1rem solid $light-blue-1;
      box-shadow: 0px 1px 2px rgba(55, 65, 81, 0.08);
      border-radius: 0.4rem;
      width: 30rem;
      height: 4rem;
      padding: 1rem;
    }
  }
  &__tags {
    margin-top: 3.5rem;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;

    justify-content: space-around;

    @include respond(tab-land) {
      display: none;
    }

    .tag {
      margin: 1rem;
    }
  }
}
</style>
