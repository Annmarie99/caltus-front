<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="dark"
    class="px-3	"
   
  >
    <b-navbar-brand href="#" border-gray-400 class="flex">
      <img
        @click="$router.push('/dash')"
        src="../../assets/logpic.svg"
        width="35"
        height="35"
      />
      &nbsp; CALTUS
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="ml-5" href="#" @click="$router.push('/dash')"
          >Home</b-nav-item
        >
        <b-nav-item href="#" @click="$router.push('/apy-cal')"
          >Calculator</b-nav-item
        >
        <b-nav-item href="#" @click="$router.push('/tracker')"
          >Tracker</b-nav-item
        >
        <b-nav-item href="#" @click="$router.push('/note')">Note</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-nav class="w-100"
      ><b-nav-item href="#" @click="$router.push('/more')" class="learnmore"
        >Learn More</b-nav-item
      >
      <b-nav-item class="ml-auto">{{ cookieName }}</b-nav-item>

      <b-nav-item right href="#" @click="logOut()" class="logout ml-auto"
        >Logout</b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  mounted() {
    this.cookieName = localStorage.getItem("userName");
  },
  data() {
    return {
      cookieName: "test",
    };
  },
  methods: {
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.isLogin = false;
      console.log(`result`, result);
      localStorage.removeItem("userName");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap");
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");

.logout {
  font-family: monospace;
  font-style: italic;
}
.learnmore {
  font-family: monospace;
  font-style: italic;
}
</style>
