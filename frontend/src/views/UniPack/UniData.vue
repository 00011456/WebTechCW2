<template>
  <base-spinner v-if="loaded"></base-spinner>
  <div v-else class="pack mtb-10">
    <div class="container">
      <PageNav :title="title" :links="uniNav" />
      <div class="pack__content">
        <University :data="uni" />
      </div>
    </div>
  </div>
</template>

<script>
import University from '@/components/uni/University.vue';
import PageNav from '@/components/data/PageNav.vue';

export default {
  name: 'UniData',
  components: {
    University,
    PageNav,
  },
  data() {
    return {
      loaded: false,
      uniName: this.$route.params.uni,
      uni: {},
      title: '',
      uniNav: [
        {
          id: 'heading',
          name: 'Heading',
          isActive: true,
        },
        {
          id: 'description',
          name: 'Description',
          isActive: false,
        },
        {
          id: 'summary',
          name: 'Summary',
          isActive: false,
        },
        {
          id: 'faculties',
          name: 'Faculties',
          isActive: false,
        },
        {
          id: 'admission',
          name: 'Admission',
          isActive: false,
        },
        {
          id: 'scholarship',
          name: 'Scholarship',
          isActive: false,
        },
        {
          id: 'fee',
          name: 'Tuition Fee',
          isActive: false,
        },
        {
          id: 'social',
          name: 'Social Life',
          isActive: false,
        },
        {
          id: 'location',
          name: 'Location',
          isActive: false,
        },
      ],
    };
  },
  async beforeMount() {
    this.loaded = true;
    this.uniName = this.uniName.toUpperCase();
    try {
      const res = await this.$axios.get(
        `/api/v1/unis?universityShortName=${this.uniName}`
      );
      this.uni = res.data.data[0];
      this.title = this.uni.universityShortName;
      this.loaded = false;
    } catch (error) {
      this.loaded = false;
      this.$router.replace(`/404`);
      console.error('ERROR');
    }
  },
};
</script>

<style lang="scss">
.pack {
  color: $dark-blue-1;

  .container {
    display: flex;
    justify-content: center;

    @include respond(big-phone) {
      flex-direction: column;
    }
  }
}
</style>
