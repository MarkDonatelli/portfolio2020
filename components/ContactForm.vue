<template>
  <div class="container--form">
    <div id="contact" class="contact-form">
      <div class="row row--form">
        <div class="col-form">
          <transition name="fade" mode="out-in">
            <div
              v-if="show_contact == true"
              key="1"
              class="form-content shadow"
            >
              <div id="sayHello" class="title-block title-block--contact">
                <p class="hello">&#128075;</p>
                <h1
                  id="sayHelloScrollTo"
                  class="title title--section title--underline"
                >
                  Say Hello
                  <span class="underline"></span>
                </h1>

                <p>
                  My inbox is always open! Whether you have a question or just
                  want to say hello, I will do my best to get back to you as
                  soon as I can. Thank you for visiting!
                  <br />
                  - Mark
                </p>
              </div>

              <form
                name="contactForm"
                method="POST"
                netlify
                netlify-honeypot="bot-field"
                @submit.prevent="submitForm()"
              >
                <input type="hidden" name="form-name" value="contactus" />
                <div class="form-group">
                  <!--user name -->
                  <div class="floating-label">
                    <input
                      v-model="contact_name"
                      class="floating-input"
                      name="name"
                      type="text"
                      placeholder=" "
                      :class="{
                        'child-has-error': $v.contact_name.$error,
                      }"
                    />
                    <label>Enter Your Name</label>
                    <p v-if="$v.contact_name.$dirty">
                      <span
                        v-if="!$v.contact_name.required"
                        class="form__alert"
                      >
                        Name is required
                      </span>
                    </p>
                  </div>
                  <!-- end user name -->

                  <!--user email -->
                  <div class="floating-label">
                    <input
                      v-model="contact_email"
                      class="floating-input"
                      type="text"
                      name="email"
                      placeholder=" "
                      :class="{
                        'child-has-error': $v.contact_email.$error,
                      }"
                    />
                    <label>Enter Your Email</label>
                    <p v-if="$v.contact_email.$dirty">
                      <span
                        v-if="!$v.contact_email.required"
                        class="form__alert"
                      >
                        Email is required
                      </span>

                      <span v-if="!$v.contact_email.email" class="form__alert">
                        Please enter a valid email
                      </span>
                    </p>
                  </div>
                  <!-- end user email -->

                  <!--user message -->
                  <div class="floating-label">
                    <textarea
                      v-model="contact_message"
                      class="form-control form-control--textarea"
                      rows="5"
                      name="message"
                      placeholder="Enter Your Message"
                      :class="{ 'child-has-error': $v.contact_message.$error }"
                    />
                    <p v-if="$v.contact_message.$dirty">
                      <span
                        v-if="!$v.contact_message.required"
                        class="form__alert"
                      >
                        Enter Your Message
                      </span>
                      <span
                        v-if="!$v.contact_message.minLength"
                        class="form__alert"
                      >
                        Message must be over 10 characters :)
                      </span>
                    </p>
                  </div>
                  <!-- end user message -->
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click="submitForm()"
                >
                  Send Message
                  <font-awesome-icon far icon="arrow-right" />
                </button>
              </form>
            </div>

            <div
              v-else
              key="2"
              class="form-content form-content--success shadow"
            >
              <img
                src="../assets/img/mail-sent.svg"
                class="img-responsive img-message-success"
              />
              <h1 class="title title--section title-block--contact">
                Success!
                <span class="underline"></span>
              </h1>
              <p>Thank you for contacting me! I will be in touch shortly :)</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      title: 'Mark Donatelli Contact Form',
      show_contact: true,

      contact_name: '',
      contact_email: '',
      contact_message: '',
    }
  },
  validations: {
    contact_name: {
      required,
    },
    contact_email: {
      required,
      email,
    },
    contact_message: {
      required,
      minLength: minLength(10),
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        return true
      } else {
        this.show_contact = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
input:focus,
textarea {
  outline: none !important;
}

.row--form {
  padding: 50px 0;

  background-color: $white;
  // background-image: url('~assets/img/tile-plus-red.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media all and(max-width:768px) {
    padding: 0;
  }
}

.col-form {
  z-index: 0;

  display: flex;

  width: 100%;
  min-height: 578px;

  @include fluidType(padding-left, 991px, 1200px, 15px, 50px);
  @include fluidType(padding-right, 991px, 1200px, 15px, 50px);

  .title {
    color: $black;

    @include fluidType(font-size, 320px, 1300px, 48px, 65px);
    @include fluidType(line-height, 320px, 1300px, 58px, 75px);
  }

  .hello {
    display: inline-block;

    @include fluidType(font-size, 320px, 1300px, 40px, 60px);
    @include fluidType(padding-right, 329px, 1300px, 5px, 15px);
  }

  @media all and(max-width:768px) {
    padding: 0;
  }
}

.title-block--contact {
  span.underline {
    bottom: 15%;
  }
}

.title--section {
  position: relative;
  z-index: 0;

  margin-bottom: 25px;

  &::after {
    z-index: -1;
  }
}

.form-content {
  z-index: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 920px;
  margin: 25px auto 50px;
  padding: 50px;

  background-color: $white;

  @include fluidType(padding-left, 991px, 1200px, 15px, 50px);
  @include fluidType(padding-right, 991px, 1200px, 15px, 50px);

  @media all and(max-width:768px) {
    box-shadow: none;
  }
}

.form-content--success {
  .title-block--contact {
    margin-top: 25px;
  }
}

form {
  width: 100%;
  margin-top: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-control {
  display: block;

  width: 100%;
  padding: 0.375rem 5px;

  color: $black;
  border: none;
  background-color: $white;

  font-size: 14px;
  line-height: 1.5;
}

.form-control--textarea {
  margin-top: 8px;

  cursor: pointer;

  border: 2px solid $black;
  outline: 0;

  font-family: $poppins;
  font-size: 14px;
  font-weight: 600;

  &::placeholder {
    color: $black;

    font-family: $poppins;
    font-size: 14px;
    font-weight: normal;
  }
}

button.btn-primary {
  margin-top: 10px;
}

.form__alert {
  position: relative;
  top: 0;
  left: 12px;

  color: $red;

  font-size: 12px;
}

//global ios  issue
textarea,
input[type='text'] {
  color: $black;
  border-radius: 0;

  -webkit-appearance: none;
}

//fade out fade in form states on successful submit
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.img-message-success {
  max-width: 35%;
}

//float
.floating-label {
  position: relative;

  margin-top: 15px;
  margin-bottom: 20px;

  font-weight: 600;
}
.floating-input,
.floating-select {
  display: block;

  width: 100%;
  height: 30px;
  padding: 4px 4px;

  border: none;
  border-bottom: solid 2px $black;
  background-color: transparent;

  font-family: $poppins;
  font-size: 14px;
  font-weight: 600;
}

label {
  position: absolute;
  top: 5px;
  left: 5px;

  -webkit-transition: all 0.1s ease-in-out;
  -moz-transition: all 0.1s ease-in-out;
  transition: all 0.1s ease-in-out;
  pointer-events: none;

  color: $black;

  font-family: $poppins;
  font-size: 14px;
  font-weight: normal;
}

.floating-input:focus ~ label,
.floating-input:not(:placeholder-shown) ~ label {
  top: -16px;

  font-size: 12px;
}

.floating-select:focus ~ label,
.floating-select:not([value='']):valid ~ label {
  top: -16px;

  font-size: 12px;
}

.child-has-error {
  animation-name: shakeError;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;

  border-color: $red;

  animation-fill-mode: forwards;
}

@keyframes shakeError {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(0.375rem);
  }
  30% {
    transform: translateX(-0.375rem);
  }
  45% {
    transform: translateX(0.375rem);
  }
  60% {
    transform: translateX(-0.375rem);
  }
  75% {
    transform: translateX(0.375rem);
  }
  90% {
    transform: translateX(-0.375rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
