<template>
  <div class="container-form">
    <div class="col-form">
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
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="user.email"
            type="email"
            name="email"
            class="form-control"
          />
        </div>

        <div class="form-group button-row">
          <button class="btn">Send Message</button>
        </div>
      </form>
    </div>
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

<style lang="scss">
.container-form {
  display: flex;

  justify-content: center;
  margin: 100px;
}

.button-row {
  margin-top: 25px;

  .btn {
    background-color: $red;

    color: $white;
    max-width: 250px;
    width: 100%;
    padding: 10px;
    border: none;
  }
}
</style>
