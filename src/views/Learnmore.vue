<template lang="html">

<div class="
        w-full
        mx-auto
        pb-36
        p-10
        bg-gradient-to-r
        from-green-600
        to-gray-700
        m-0
        text-center
        h-screen
      "
      >
 
  <div class="flex-1 w-full grid grid-cols-3 gap-4 p-3">
    <b-card
    title="APY CALCULATOR"
    tag="article"
    style="max-width: 15rem;"
    class="mb-2 "
  >
    <b-card-text>
      Calculate the interest on the date that we will not complete the year.
    </b-card-text>

    <b-button href="#" variant="primary">Go</b-button>
  </b-card>
  
  </div>
  <b-row>
    <b-col>
   
   <div class="flex-1 w-full grid grid-cols-3 gap-4 p-3">
     <b-card
    title="AVERAGE DOWN CALCULATOR"
    tag="article"
    style="max-width: 15rem;"
    class="mb-2  "
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go</b-button>
  </b-card>
  </b-col>
</b-row>

 </div>
  
  
  <b-row>
    <b-col>
 <div class="flex-1 w-full grid grid-cols-3 gap-4 p-3">
     <b-card
    title="AVERAGE DOWN CALCULATOR"
    tag="article"
    style="max-width: 15rem;"
    class="mb-2  "
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go</b-button>
  </b-card>

</b-col>
</b-row>
  </div>
  
</div>

</div>



 
</template>

<script>
//import CalculatorLayout from "../components/Layouts/CalculatorLayout.vue";
export default {
  async asyncData({$constants}){
     const postsData = await $constants('posts').fetch()
     return {
        post: postsData,
     };
   },
   mounted(){
     console.log('THIS.POSTS', this.posts);
   }
};
</script>



