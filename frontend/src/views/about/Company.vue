<template>
  <div class="company mtb-10">
    <div class="container">
      <PageNav title="Company" :links="companyNav" />
      <div class="company__content">
        <PageContent :data="company" />
      </div>
    </div>
  </div>
</template>

<script>
import PageContent from "@/components/data/PageContent.vue";
import PageNav from "@/components/data/PageNav.vue";

export default {
  name: "Company",
  components: {
    PageContent,
    PageNav,
  },
  data() {
    return {
      companyNav: [
        {
          id: "faq",
          name: "FAQ",
          isActive: true,
        },
        {
          id: "unipack",
          name: "UniPack",
          isActive: false,
        },
        {
          id: "uniguide",
          name: "UniGuide",
          isActive: false,
        },
        {
          id: "contact",
          name: "Contact us",
          isActive: false,
        },
      ],
      company: [
        {
          id: "faq",
          title: "FAQ",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: true,
        },
        {
          id: "unipack",
          title: "UniPack",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
        {
          id: "uniguide",
          title: "UniGuide",
          text:
            "Answer: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam dolor, cursus sit amet ante nec, pellentesque maximus eros. Nulla condimentum, erat ac finibus sollicitudin, elit ligula pretium sem, vitae maximus eros quam eget dolor. Curabitur ultricies, urna ut varius dictum, turpis quam rutrum risus, ut condimentum tellus lectus in est. Suspendisse potenti. Sed fermentum erat ut elit consectetur malesuada. Praesent varius dolor sed dolor dapibus, pellentesque varius odio hendrerit. Fusce sit amet augue sit amet diam tristique ultrices vitae at sapien. Donec egestas accumsan ex, vitae tempus lacus rhoncus quis. Aenean at metus nibh. Suspendisse semper, tellus eu ultrices pellentesque, lectus mi rutrum justo, ac condimentum lacus turpis sed augue.",
          isActive: false,
        },
        {
          id: "contact",
          title: "Contact",
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
.company {
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
