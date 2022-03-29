<template>
  <div class="stat">
    <AdminNav />
    <div class="mtb-10">
      <div class="container">
        <!-- Article Stats = astats -->
        <stat-card class="stat-article">
          <h4 class="stat__title">Amount of posts by Uni</h4>
          <p class="astats__text">
            Each line display counter of posted news according to the
            corresponding Uni
          </p>

          <!-- Bar Chart -->
          <div class="astats__bar">
            <BarChart />
          </div>
          <p class="astats__text">Hower the line to viwe numbers</p>
        </stat-card>

        <!-- University Stats = ustats -->
        <stat-card class="stat-uni">
          <h4 class="stat__title">
            <img
              src="../../assets/icons/pie-chart.svg"
              alt="Pie Chart Icon"
              class="stat__icon"
            />
            All likes by Uni
          </h4>
          <div class="ustats__date">
            <div>
              <p>January, 2022</p>
              <b>More than previous month</b>
            </div>
            <img src="../../assets/icons/chart.svg" alt="Chart Icon" />
          </div>

          <!-- Pie Chart -->
          <div class="ustats__pie">
            <PieChart />
          </div>
          <div class="ustats__list">
            <h4 class="stat__title">List of Unis</h4>
            <div>
              <img
                src="../../assets/icons/vector.svg"
                alt="Vector Icon"
                class="stat__icon"
              />
            </div>
          </div>
          <div class="ustats__unis">
            <ul>
              <li><span></span> WIUT</li>
              <li><span></span> IUT</li>
              <li><span></span> MDIS</li>
              <li><span></span> Amity</li>
              <li><span></span> Turin</li>
              <li><span></span> Webster</li>
            </ul>
          </div>
        </stat-card>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNav from "../../components/admin/AdminNav.vue";
import BarChart from "../../components/admin/BarChart.vue";
import PieChart from "../../components/admin/PieChart.vue";

export default {
  components: { AdminNav, BarChart, PieChart },
};
</script>

<style lang="scss" scoped>
.stat {
  width: 100%;
  color: $dark-blue-1;

  .container {
    display: flex;
    justify-content: space-around;

    @include respond(tab-port) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
    }
  }

  &__icon {
    width: 2.4rem;
    height: 2.8rem;
  }
}

// Article Stats
.astats {
  &__text {
    font-size: 1.3rem;
    font-weight: 500;
  }
}

.card.stat-article {
  @include respond(tab-port) {
    margin-bottom: 5rem;
  }
}

// University Stats
.ustats {
  &__date {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    font-size: 1.3rem;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      background: #e3faff;
      border-radius: 50%;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  &__unis {
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        transition: all 0.3s;
        cursor: pointer;

        &:hover {
          font-weight: bold;
          letter-spacing: 0.2rem;
        }

        span {
          padding: 0rem 1rem;
          border-radius: 0.4rem;
          background-color: #03045e;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
