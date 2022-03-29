<template>
  <figure class="pie-chart">
    <figcaption></figcaption>
  </figure>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pie-chart {
  background: radial-gradient(circle closest-side, transparent 90%, white 0),
    conic-gradient(
      #03045e 0,
      #03045e 36.5%,
      #023e8a 0,
      #023e8a 58.6%,
      #0077b6 0,
      #0077b6 74%,
      #0096c7 0,
      #0096c7 83.6%,
      #00b4d8 0,
      #00b4d8 93.2%,
      #48cae4 0,
      #48cae4 99.9%
    );
  position: relative;
  height: 27rem;
  transition: all 1s;
  outline: none;
  width: 60%;
  margin: 1rem auto;
  animation: rotate 1.5s;
  cursor: cell;

  &:hover {
    transform: rotate(360deg);
  }
}


</style>
