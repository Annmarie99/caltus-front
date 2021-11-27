<template >

 <div class="flex p-0 m-0 rounded-tl-lg">
<!--<div
        class="
          flex-1
          space-y-5
          bg-gradient-to-r
          from-green-600
          to-gray-700
          p-3
          rounded-tl-lg
        "
      >-->
  <b-container1 class="m-12">

  <b-row align-v="center"  >
  
    <b-col md="3">

    <b-card
    
    img-src="https://i.pinimg.com/564x/19/02/2a/19022a04d39ceeb51fffbc3eab070c33.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 50rem;"
    class="mb-2 "
  >


    <router-link to="/CardsApy">APY CALCULATOR</router-link>
    </b-card>
    </b-col>
  
    <b-col md="3" >

    <b-card
    img-src="https://i.pinimg.com/564x/35/bf/08/35bf0818ead3d5ffeab0d9c10390fb1f.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 50rem;"
    class="mb-2 "
  >
    
    <router-link to="/CardsPercent">PERCENTAGE CHANGE CALCULATOR</router-link>

    </b-card>
    </b-col>


   <b-col md="3" >
    <b-card
    img-src="https://i.pinimg.com/564x/af/33/b2/af33b22ab2054425ecd74e6e905704fc.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
  >

   <router-link to="/CardsFee">FEE CALCULATOR</router-link>
    </b-card>
    </b-col> 



    <b-col md="3" >
    <b-card
    img-src="https://i.pinimg.com/564x/35/bf/08/35bf0818ead3d5ffeab0d9c10390fb1f.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
  >
  
    <router-link to="/CardsAverge">AVERAGE DOWN CALCULATOR</router-link>

    </b-card>
    </b-col> 
  </b-row>
    <br>

    

<b-row align-v="center" >

  <b-col md="3">
    <b-card
    img-src="https://i.pinimg.com/564x/35/bf/08/35bf0818ead3d5ffeab0d9c10390fb1f.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 15rem;"
    class="mb-2"
  >
    

   <router-link to="/CardsLiqui">LIQUIDATION CALCULATOR</router-link>
    </b-card>
    </b-col>

  <b-col md="3">
    <b-card
     img-src="https://i.pinimg.com/564x/35/bf/08/35bf0818ead3d5ffeab0d9c10390fb1f.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 15rem;"
    class="mb-2"
  >
  

   <router-link to="/CardsPNL">PNL CALCULATOR</router-link>
    </b-card>
    </b-col>

  <b-col md="3">
    <b-card
     img-src="https://i.pinimg.com/564x/35/bf/08/35bf0818ead3d5ffeab0d9c10390fb1f.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 15rem;"
    class="mb-2"
  >
   
   <router-link to="/CardsTrade">TRADE COMPOUND CALCULATOR</router-link>
    </b-card>
    </b-col> 


  <b-col md="3" >
    <b-card
     img-src="https://i.pinimg.com/564x/35/bf/08/35bf0818ead3d5ffeab0d9c10390fb1f.jpg"
    img-alt="Image"
    img-top
    title=""
    tag="article"
    style="max-width: 50rem;"
    class="mb-2"
  >
    

    <router-link to="/CardsLever">LEVERGED MOVEMENT CALCULATOR</router-link>
    </b-card>
    </b-col> 
    </b-row>
    <br>

<b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>

  </b-container1>

</div>
 
</template>

<script>
//import CalculatorLayout from "../components/Layouts/CalculatorLayout.vue";
export default {
  data(){
    return {
      currentPage: 1,
      rows: 1,
      perPage: 3,
      Image: {  width: 50, height: 75, class: 'm2' },
    }

  },
  async asyncData({$constants}){
     const postsData = await $constants('posts').fetch()
     return {
        post: postsData,
     };
   },

  // //  methods:{
  // //  async fetchData(){
  // //    this.rows = this
     

  //  }


  //  },
   mounted(){
      
     console.log('THIS.POSTS', this.posts);

    
   }
};
</script>



