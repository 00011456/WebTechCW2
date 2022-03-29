<template>
  <base-spinner v-if="loaded"></base-spinner>
  <div v-else class="upload">
    <AdminNav />
    <div class="container">
      <form class="upload-form mtb-10" @submit.prevent="submit">
        <div class="upload-form__input">
          <div class="upload-form__input--cover">
            <input type="file" id="files" class="hidden" />
            <label for="files" class="upload-form__input--file"
              >Select file</label
            >
          </div>
        </div>
        <div class="upload-form__input">
          <label for="uni">University</label>
          <select
            name="uni"
            id="uni"
            class="input"
            v-model="newArticle.articleTag"
          >
            <option value="WIUT">WIUT</option>
            <option value="WUT">Webster</option>
            <option value="MDIST">MDIST</option>
            <option value="BUT">BUT</option>
          </select>
          <p>WIUT - Westminster International University in Tash...</p>
        </div>
        <div class="upload-form__input">
          <label for="title">Title</label>
          <input
            type="text"
            placeholder="..."
            class="input"
            v-model="newArticle.articleTitle"
          />
          <p>University anniversary celebration</p>
        </div>
        <div class="upload-form__input">
          <label for="content">Content</label>
          <textarea
            name="content"
            id="content"
            rows="10"
            placeholder="Text"
            class="input"
            v-model="newArticle.articleContent"
          ></textarea>
        </div>
        <base-button type="submit">Post</base-button>
      </form>
      <FeedbackPopup v-if="showPopup" :message="message" />
    </div>
  </div>
</template>

<script>
import AdminNav from "../../components/admin/AdminNav.vue";
import FeedbackPopup from "@/components/popup/FeedbackPopup.vue";

export default {
  components: { AdminNav, FeedbackPopup },
  data() {
    return {
      newArticle: {
        articleTitle: "",
        articleContent: "",
        articleCover: `article-${this.getRandomNumber(1, 11)}.jpg`,
        articleTag: "WIUT",
        author: this.$store.getters.userId,
      },
      message: "",
      showPopup: false,
      loaded: false,
    };
  },
  methods: {
    async submit() {
      this.loaded = true;
      try {
        await this.$axios.post("api/v1/articles", this.newArticle);
        this.message = "Successfully added a brand new article!";
        this.loaded = false;
        this.showPopup = true;
      } catch (error) {
        this.message = error.message;
        this.loaded = false;
        this.showPopup = true;
        console.error(error);
      }
    },
    getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
  },
};
</script>

<style lang="scss" scoped>
.upload {
  width: 100%;
  color: $dark-blue-1;

  .container {
    display: flex;
    justify-content: center;
  }
}
.upload-form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input {
    &:not(:last-child) {
      margin-bottom: 3rem;
    }

    label {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .input {
      margin: 0.5rem 0;
    }

    p {
      font-weight: 500;
    }

    textarea {
      resize: none;
    }
  }
  &__input--cover {
    width: 45rem;
    height: 30rem;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("../../assets/img/default.jpg") no-repeat top;
    background-size: cover;
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @include respond(phone) {
      width: 30rem;
      height: 25rem;
    }

    .hidden {
      display: none;
    }

    label {
      transition: all 0.3s;
      font-size: 1.5rem;

      &:hover {
        filter: brightness(90%);
        transform: translateY(-0.2rem);
      }
    }
  }

  &__input--file {
    cursor: pointer;
    background-color: $dark-blue-1;
    color: $white;
    font-weight: bold;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    width: 15rem;
    height: 5rem;
    outline: none;
    text-align: center;
    padding: 1rem 0;
  }

  .btn {
    width: 15rem;
  }
}
</style>
