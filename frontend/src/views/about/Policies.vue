<template>
  <div class="policies mtb-10">
    <div class="container">
      <PageNav title="Policies" :links="policiesNav" />
      <div class="policies__content">
        <PageContent :data="policies" />
      </div>
    </div>
  </div>
</template>

<script>
import PageContent from "@/components/data/PageContent.vue";
import PageNav from "@/components/data/PageNav.vue";

export default {
  name: "Policies",
  components: {
    PageContent,
    PageNav,
  },
  data() {
    return {
      policiesNav: [
        {
          id: "agreement",
          name: "Agreement",
          isActive: true,
        },
        {
          id: "privacy",
          name: "Privacy Policy",
          isActive: false,
        },
        {
          id: "security",
          name: "Security",
          isActive: false,
        },
        {
          id: "policy",
          name: "Policy",
          isActive: false,
        },
        {
          id: "terms",
          name: "Terms of Policy",
          isActive: false,
        },
        {
          id: "rates",
          name: "Rates",
          isActive: false,
        },
      ],
      policies: [
        {
          id: "account",
          title: "Account",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: true,
        },
        {
          id: "agreement",
          title: "Agreement",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
        {
          id: "privacy",
          title: "Privacy Policy",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
        {
          id: "security",
          title: "Security",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
        {
          id: "policy",
          title: "Policy",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
        {
          id: "terms",
          title: "Terms of Policy",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
        {
          id: "rates",
          title: "Rates",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.policies {
  color: $dark-blue-1;

  .container {
    display: flex;
    justify-content: center;

    @include respond(big-phone) {
      flex-direction: column;
    }
  }

  &__content {
    max-width: 77rem;
  }
}
</style>
