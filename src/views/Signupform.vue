<template>
  <div class="container1 mt-0">
    <div class="form-container mt-20">
      <div class="signin-signup1 mt-20">
        <form action="" class="sign-in-form" @submit.prevent="handleSubmit">
          <h2 class="title">Sign Up</h2>

          <div class="input-field">
            <i class="bi bi-person-fill"></i>
            <input type="text" v-model="username" placeholder="Username" />
          </div>

          <div class="input-field">
            <i class="bi bi-envelope-fill"></i>
            <input type="email" v-model="email" placeholder="Email" />
          </div>

          <div class="input-field">
            <i class="bi bi-lock-fill"></i>
            <input type="password" v-model="password" placeholder="Password" />
          </div>

          <div class="input-field">
            <i class="bi bi-file-lock-fill"></i>
            <input
              type="password"
              v-model="confirm_password"
              placeholder="Confirm Password"
            />
          </div>

          <b-button type="submit" variant="info">Sign Up</b-button>

          <p class="social-text">Or Sign up with social platforms</p>
          <div class="social-media">
            <a href="#" class="social-icon">
              <i class="bi bi-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </form>
        <form action="#" class="sign-up-form">
          <h2 class="title">Sign up</h2>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "Signupform",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      };
      console.log(data);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
</style>
