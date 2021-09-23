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
      <div class="w-25 p-4 rounded-lg mx-auto bg-dark mt-20 shadow-2xl">
        <h2 class="text-gray-100 text-center">Sign Up</h2>

        <div class="input-field mt-5">
          <i class="bi bi-person-fill"></i>
          <input type="text" placeholder="Username" />
        </div>

        <div class="input-field mt-3">
          <i class="bi bi-envelope-fill"></i>
          <input type="email" placeholder="Email" />
        </div>

        <div class="input-field mt-3">
          <i class="bi bi-lock-fill"></i>
          <input type="password" placeholder="Password" />
        </div>

        <div class="input-field mt-3">
          <i class="bi bi-file-lock2-fill"></i>
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div class="text-center mt-5">
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
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
