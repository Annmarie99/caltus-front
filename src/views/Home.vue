<template>
  <div class="container m-0">
    <div class="form-container bg-gradient-to-r from-green-600 to-gray-700">
      <div class="signin-signup">
        <form
          action=""
          @submit.prevent="handleSubmit"
          class="sign-in-form ml-auto w-3/4"
        >
          <h1 class="title text-white">Sign in</h1>

          <div class="input-field">
            <i class="bi bi-person-fill"></i>
            <input type="text" v-model="username" placeholder="Username" />
          </div>

          <div class="input-field">
            <i class="bi bi-lock-fill"></i>
            <input type="password" v-model="password" placeholder="Password" />
          </div>

          <b-button
            type="submit"
            class="bg-gradient-to-r from-green-600 to-gray-700"
            >Sign in</b-button
          >

          <p class="forgot-password text-right text-white">
            <router-link to="forgot">Forgot password?</router-link>
            or
            <router-link to="/signup">Sign up </router-link>
          </p>

          <p class="social-text text-white">Or Sign in with social platforms</p>
          <div class="social-media">
            <a @click="login()" class="social-icon border-white">
              <i class="bi bi-google text-white"></i>
            </a>
            <a href="#" class="social-icon border-white">
              <i class="bi bi-facebook text-white"></i>
            </a>
          </div>
        </form>
        <form action="#" class="sign-up-form">
          <h2 class="title">Sign In</h2>
        </form>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <img src="../assets/logpic.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.isLogin = false;
      console.log(`result`, result);
    },
    async login() {
      const googleUser = await this.$gAuth.signIn();
      console.log("googleUser", googleUser);
      // console.log("getId", googleUser.getId());
      // console.log("getBaseProfile", googleUser.getBasicProfile());
      // console.log("getBaseProfile", googleUser.getBasicProfile().Se);
      // console.log("getAuthResponse", googleUser.getAuthResponse());
      // console.log(
      //   "getAuthResponse$G",
      //   this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      // );
      this.isLogin = this.$gAuth.isAuthorized;
      localStorage.setItem("userName", googleUser.getBasicProfile().Se);

      this.$router.push("/dash");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
input {
  font-family: "Poppins", sans-serif;
}

.container {
  position: relative;
  width: 100%;
  /* background-color: rgb(255, 255, 255); */
  min-height: 100vh;
  overflow: hidden;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  transition: 1s 0.7s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
}

form {
  display: flex;
  align-items: center;
  justify-content: right;
  flex-direction: column;
  padding: 0rem 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

form.sign-up-form {
  opacity: 0;
  z-index: 1;
}

form.sign-in-form {
  z-index: 2;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  max-width: 380px;
  width: 100%;
  background-color: #f0f0f0;
  margin: 10px 0;
  height: 55px;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 0.4rem;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  transition: 0.5s;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.social-text {
  padding: 0.7rem 0;
  font-size: 1rem;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.45rem;
  color: #333;
  border-radius: 50%;
  border: 1px solid #333;
  text-decoration: none;
  font-size: 1.1rem;
  transition: 0.3s;
}

.social-icon:hover {
  color: #4481eb;
  border-color: #4481eb;
}

.btn {
  width: 150px;
  background-color: #5995fd;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
}

.btn:hover {
  background-color: #4d84e2;
}
.panels-container {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.container:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #273f3c 0%, #00bfa6 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}
</style>
