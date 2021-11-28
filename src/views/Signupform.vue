<template>
  <div class="">
    <div
      class="w-full p-10 pt-10 h-screen"
      :style="{
        'background-image':
          'url(https://images6.alphacoders.com/888/888108.png)',
      }"
    >
      <form action="">
        <div class="w-25 p-4 rounded-lg mx-auto mt-auto">
          <h2 class="text-gray-100 text-center text-5xl">Sign Up</h2>
          <!-- <v-alert :value="userExists" color="error" icon="warning"
            >This user already exists, try a different set of data.</v-alert
          > -->
          <b-form-input
            type="texy"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 mt-5"
            v-model="fist_name"
            placeholder="firstname"
          ></b-form-input>

          <b-form-input
            type="text"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
            placeholder="lastname"
            v-model="last_name"
          ></b-form-input>

          <b-form-input
            type="text"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
            placeholder="username"
            v-model="username"
          ></b-form-input>

          <b-form-input
            type="email"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
            placeholder="email"
            v-model="email"
          ></b-form-input>

          <b-form-input
            type="password"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
            placeholder="password"
            v-model="password"
          >
            ></b-form-input
          >

          <b-form-input
            type="password"
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0 mt-3"
            placeholder="Re-password"
            v-model="repassword"
          ></b-form-input>

          <div class="text-center mt-5" type="submit" @submit="handleSubmit">
            <button
              class="
                bg-blue-400
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
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    };
  },
  // data: () => ({
  //   userExists: false,
  //   firstname: "",
  //   lastname: "",
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirm_password: "",
  //   rules: {
  //     required: (value) => !!value || "Required",
  //     email: (value) => {
  //       const pattern =
  //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //       return pattern.test(value) || "Invalid e-mail.";
  //     },
  //   },
  // }),
  methods: {
    async handleSubmit() {
      await axios.post("REGISTER", {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      });

      this.$router.push("/");
    },
    // handleSubmit() {
    //   if (this.valid()) {
    //     this.$store
    //       .dispatch("REGISTER", {
    //         firstname: this.firstname,
    //         lastname: this.lastname,
    //         username: this.username,
    //         email: this.email,
    //         password: this.password,
    //       })
    //       .then(({ status }) => {
    //         this.$store.commit("SET_NOTIFICATION", {
    //           display: true,
    //           text: "Your account has been successfully created! you can now login.",
    //           alertClass: "danger",
    //         });
    //         this.$router.push("/login");
    //       })
    //       .catch((error) => {
    //         this.userExists = true;
    //       });
    //   }
    // },
    // valid() {
    //   return this.password === this.confirm_password;
    // },
  },
};
</script>

<style></style>
