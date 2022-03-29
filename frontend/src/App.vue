<template>
  <div class="main">
    <TheHeader />
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
import TheFooter from "@/components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  overflow-x: hidden;

  @include respond(phone) {
    justify-content: space-between;
  }
}

.hide {
  display: none;
}

// Animations
.route-enter-from {
  opacity: 0;
  transform: translateY(-3rem);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(3rem);
}
.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
