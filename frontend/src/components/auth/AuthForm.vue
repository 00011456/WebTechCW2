<template>
  <Form @submit="onSubmit" class="auth__form">
    <div
      v-for="{ as, name, label, children, ...attrs } in schema.fields"
      :key="name"
      class="input-block"
    >
      <label :for="name">{{ label }}</label>
      <Field :as="as" :id="name" :name="name" v-bind="attrs" class="input">
        <template v-if="children && children.length">
          <component
            v-for="({ tag, text, ...childAttrs }, idx) in children"
            :key="idx"
            :is="tag"
            v-bind="childAttrs"
          >
            {{ text }}
          </component>
        </template>
      </Field>
      <ErrorMessage :name="name" class="auth__error" />
    </div>

    <base-button>
      Log In
      <svg class="auth__right">
        <use xlink:href="@/assets/icons/auth.svg#right"></use>
      </svg>
    </base-button>
  </Form>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "AuthForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      logEmail: "",
      logPassword: "",
      values: "",
    };
  },
  methods: {
    onSubmit(values) {
      this.values = values;
      this.$emit("onRegister", values);
      this.$emit("onLogin", values);
    },
  },
};
</script>

<style lang="scss"></style>
