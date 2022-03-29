<template>
  <div class="uni">
    <!-- src="../../assets/img/universities/wiut-3.jpg" -->
    <img
      :src="require(`@/assets/img/universities/${data?.slug}.jpg`)"
      alt="Uni Photo"
      class="uni__image"
    />
    <div class="uni-items">
      <PageContent :data="uniContent" />
    </div>
  </div>
</template>

<script>
import PageContent from '@/components/data/PageContent.vue';

export default {
  components: { PageContent },
  props: ['data'],

  mounted() {
    console.log(this.data);
  },

  data() {
    return {
      uniContent: [
        {
          id: 'heading',
          title: 'Heading',
          text: this.data.summary,
          isActive: true,
        },
        {
          id: 'description',
          title: 'Description',
          text: this.data.summary,
          isActive: false,
        },
        {
          id: 'summary',
          title: 'Summary',
          text: this.data.summary,
          isActive: false,
        },
        {
          id: 'faculties',
          title: 'Faculties',
          text: this.displayCourses(),
          isActive: false,
        },
        {
          id: 'admission',
          title: 'Admission',
          text: this.getFromArray(this.data.admission),
          isActive: false,
        },
        {
          id: 'schoolarship',
          title: 'Schoolarship',
          text: this.data.scolarship,
          isActive: false,
        },
        {
          id: 'fee',
          title: 'Tuition Fee',
          text: `${this.data.tuitionFee} per academic year`,
          isActive: false,
        },
        {
          id: 'location',
          title: 'Location',
          text: `Address: ${this.data.location?.address}`,
        },
      ],
    };
  },
  methods: {
    displayCourses() {
      let course = '';
      this.data.courses?.forEach(function (i) {
        for (var key in i) {
          course += i[key];
        }
      });
      return course;
    },
    getFromArray(arr) {
      let newArr = '';
      arr?.forEach((i) => {
        newArr += i;
      });
      return newArr;
    },
  },
};
</script>

<style lang="scss" scoped>
.uni {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__image {
    width: 77rem;
    height: 32rem;
    object-fit: cover;
    margin-bottom: 4rem;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    @include respond(tab-land) {
      width: 70rem;
    }
    @include respond(tab-port) {
      width: 40rem;
      height: 20rem;
    }
    @include respond(big-phone) {
      width: 42rem;
    }
    @include respond(phone) {
      width: 30rem;
      height: 20rem;
    }
    @include respond(mini-phone) {
      width: 25rem;
      height: 20rem;
    }
  }
}
.uni-items {
  max-width: 77rem;
}
</style>
