<template>
  <div class="container">
    <form
      name="contactTest"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      @submit.prevent="handleSubmit"
    >
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          :class="{
            'is-invalid': submitted && $v.user.name.$error,
          }"
        />
        <div
          v-if="submitted && !$v.user.name.required"
          class="invalid-feedback"
        >
          Name is required
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="user.email"
          type="email"
          name="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.user.email.$error }"
        />
        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
          <span v-if="!$v.user.email.required">Email is required</span>
          <span v-if="!$v.user.email.email">Email is invalid</span>
        </div>
      </div>

      <div class="form-group">
        <button class="btn btn-primary">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      user: {
        name: '',

        email: '',
      },
      submitted: false,
    }
  },
  validations: {
    user: {
      name: { required },
      email: { required, email },
    },
  },
  methods: {
    handleSubmit(e) {
      this.submitted = true

      // stop here if form is invalid
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      // eslint-disable-next-line no-console
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.user))
    },
  },
}
</script>
