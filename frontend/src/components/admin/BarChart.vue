<template>
  <div class="bar__title">
    <p>List of Unis</p>
    <p>Top 8 Uni</p>
  </div>
  <figure class="bar">
    <ul>
      <li class="bar__stat--1 bar__stat">
        <span class="bar__percent">90%</span> WIUT
      </li>
      <li class="bar__stat--2 bar__stat">
        <span class="bar__percent">80%</span> IUT
      </li>
      <li class="bar__stat--3 bar__stat">
        <span class="bar__percent">70%</span> MDIS
      </li>
      <li class="bar__stat--4 bar__stat">
        <span class="bar__percent">60%</span> Amity
      </li>
      <li class="bar__stat--5 bar__stat">
        <span class="bar__percent">50%</span> Turin
      </li>
      <li class="bar__stat--6 bar__stat">
        <span class="bar__percent">40%</span> Webster
      </li>
      <li class="bar__stat--7 bar__stat">
        <span class="bar__percent">30%</span> MSIIR
      </li>
      <li class="bar__stat--8 bar__stat">
        <span class="bar__percent">20%</span> CWUM
      </li>
    </ul>
  </figure>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bar {
  margin-bottom: 2.5rem;
  ul {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
  }

  &__title {
    display: flex;
    justify-content: space-between;

    margin-top: 2.5rem;

    p {
      font-size: 1.6rem;
      font-weight: 500;

      &:last-child {
        color: $grey;
      }
    }
  }

  //   Percent
  &__percent {
    position: absolute;
    right: -2.5rem;
    color: $dark-blue-1;
    transition: all 0.2s;
    display: none;
    font-weight: bold;
  }

  //   Bar Chart
  &__stat {
    height: 3.8rem;
    padding: 1rem 1.5rem;
    color: $white;
    border-radius: 0rem 0.6rem 0.6rem 0;
    position: relative;
    transition: all 0.3s;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      transform: translateX(0.1rem) scale(1.01);
      .bar__percent {
        display: block;
      }
    }
    &--1 {
      width: 90%;
      border-radius: 0.6rem 0.6rem 0.6rem 0;
      background-color: #03045e;
      animation: moveRight-1 1.5s;
    }
    &--2 {
      width: 80%;
      background-color: #023e8a;
      animation: moveRight-2 1.5s;
    }
    &--3 {
      width: 70%;
      background-color: #0077b6;
      animation: moveRight-3 1.5s;
    }
    &--4 {
      width: 60%;
      background-color: #0096c7;
      animation: moveRight-4 1.5s;
    }
    &--5 {
      width: 50%;
      background-color: #00b4d8;
      animation: moveRight-5 1.5s;
    }
    &--6 {
      width: 40%;
      background-color: #48cae4;
      animation: moveRight-6 1.5s;
    }
    &--7 {
      width: 30%;
      background-color: #8aebff;
      animation: moveRight-7 1.5s;
    }
    &--8 {
      width: 20%;
      background-color: #caf0f8;
      animation: moveRight-8 1.5s;
      border-radius: 0rem 0.6rem 0.6rem 0.6rem;
    }
  }
}
</style>
