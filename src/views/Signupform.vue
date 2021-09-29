<template>
  <div class="">
    <div
      class="
        w-full
        bg-gradient-to-r
        from-green-600
        to-gray-700
        p-10
        pt-10
        h-screen
      "
    >
      <form action="">
        <div class="w-25 p-4 rounded-lg mx-auto bg-dark mt-20 shadow-2xl">
          <h2 class="text-gray-100 text-center">Sign Up</h2>

          <div class="input-field mt-5">
            <i class="bi bi-person-fill"></i>
            <input type="text" v-model="username" placeholder="Username" />
          </div>

          <div class="input-field mt-3">
            <i class="bi bi-envelope-fill"></i>
            <input type="email" v-model="email" placeholder="Email" />
          </div>

          <div class="input-field mt-3">
            <i class="bi bi-lock-fill"></i>
            <input type="password" v-model="password" placeholder="Password" />
          </div>

          <div class="input-field mt-3">
            <i class="bi bi-file-lock2-fill"></i>
            <input
              type="password"
              v-model="confirm_password"
              placeholder="Confirm Password"
            />
          </div>

          <div class="text-center mt-5" type="submit" @submit="handleSubmit">
            <button
              class="
                bg-green-500
                hover:bg-gray-400
                text-white
                font-bold
                py-2
                px-4
                hover:border-dark
                rounded
              "
            >
              Sing up
            </button>

            <button
              class="
                bg-red-500
                hover:bg-gray-400
                text-white
                font-bold
                py-2
                px-4
                hover:border-dark
                rounded
                ml-5
              "
              @click="$router.push('/')"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
    async handleSubmit() {
      await axios.post("https://localhost:5500/signup", {
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      });

      this.$router.push("/");
    },
  },
};
</script>

<style></style>
