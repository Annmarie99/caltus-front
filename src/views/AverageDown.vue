<template>
  <calculator-layout>

    <div class="flex p-0 m-0 rounded-tl-lg">
      <div class="
          flex-1
          space-y-5
           p-3
          rounded-tl-lg
        "
          >
        <div class="p-3 ">

        <p class="text-white text-center text-2xl p-0 m-0">AVERAGE DOWN CALCULATOR</p>
        <br /><br>

      

     <div class="flex">

          <div class="flex-auto items-center space-y-5 p-3 ">
            
            <div class="space-y-5">

        <div class="table-fixed bg-gray-600 rounded-lg" >
        <p class="text-center  text-white text-xl p-0 m-0">Quantity</p> 
        </div><br>
        
        <b-input-group prepend="1.">
        <b-form-input
        
        class="bg-dark text-white"
          v-model="quantity"
          placeholder=""
        
        ></b-form-input>  
        </b-input-group> 
        <br>
        
         <b-input-group prepend="2.">
        <b-form-input 
        class="bg-dark text-white"
          v-model="quantity2" 
          placeholder="">
          </b-form-input></b-input-group><br>
          
       <b-input-group prepend="3.">
          <b-form-input 
          class="bg-dark text-white"
          v-model="quantity3" 
          placeholder="">
          </b-form-input></b-input-group><br>


         <b-input-group prepend="4.">
          <b-form-input 
          class="bg-dark text-white"
          v-model="quantity4" 
          placeholder="">
          </b-form-input></b-input-group><br>
     
        <b-input-group prepend="5.">
         <b-form-input 
         class="bg-dark text-white"
          v-model="quantity5" 
          placeholder="">
          </b-form-input></b-input-group><br>


     <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAver" variant="secondary"
            >Calculate</b-button
          >
        </div>
            </div>

            <router-link to=/CardsAverage  class="text-white" >Learn More --> </router-link> 
            
          </div>

     

     <div >
    <div  class="flex-auto items-center space-y-5 p-3">
        
        <div class="table-fixed bg-gray-600 rounded-lg" >
       <p class="text-center  text-white text-xl p-0 m-0">Purchase Price</p>
       </div><br>
     
     <b-input-group prepend="$">
        <b-form-input
        class="bg-dark text-white"    
         v-model="price" 
          placeholder="">
          </b-form-input></b-input-group><br>
 
        <b-input-group prepend="$">
        <b-form-input 
        class="bg-dark text-white"
          v-model="price2" 
          placeholder="">
          </b-form-input></b-input-group><br>

         <b-input-group prepend="$">
          <b-form-input 
          class="bg-dark text-white"
          v-model="price3" 
          placeholder="">
          </b-form-input></b-input-group><br>

         <b-input-group prepend="$">
          <b-form-input 
          class="bg-dark text-white"
          v-model="price4" 
          placeholder="">
          </b-form-input></b-input-group><br>
        
        <b-input-group prepend="$">
          <b-form-input 
          class="bg-dark text-white"
          v-model="price5" 
          placeholder="">
          </b-form-input></b-input-group><br>

     <!----<div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAver" variant="dark"
            >Clear</b-button
          >
        </div>---->
    </div></div>
        
        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            The average cost for :
            <span class="text-calc-accent">{{
              result.totalY.toFixed(2)
            }}</span>
          </p>
          <p>
            Contracts / Shares is $ : 
             <span class="text-calc-accent">{{
              result.totalX.toFixed(2)
            }}</span>
            
          </p>
        
        </div>
    </div>
    </div> 
</div>

       <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>

        <div v-for="lists in history" :key="lists.id_history_calculate" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            The average cost for :
            <span class="text-calc-accent">{{
              lists.result
            }}</span> 
          </p>
          
            
          
        </div>
      </div>

    </div> 
  </calculator-layout>
</template>



<script>
import Vue from "vue"; // in Vue 2
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import CalculatorLayout from "../components/Layouts/CalculatorLayout.vue";
export default {
  components: { CalculatorLayout },
  name: "AverageDown",
    data() {
    return {
      quantity: "",
      quantity2: "",
      quantity3: "",
      quantity4: "",
      quantity5: "",
      price: "",
      price2: "",
      price3: "",
      price4: "",
      price5: "",
      result: null,
      history: [],
    };
  },
async mounted() {
    this.historys()
  },

  methods: {
    async calculateAver(u) {
      u.preventDefault();
      const x = parseFloat(this.quantity) + parseFloat(this.quantity2) + parseFloat(this.quantity3) + parseFloat(this.quantity4) + parseFloat(this.quantity5);
      const totalX = x/5;
      const y = parseFloat(this.price) + parseFloat(this.price2) + parseFloat(this.price3) + parseFloat(this.price4) + parseFloat(this.price5);
      const totalY = y/5;

      this.result = { totalX, totalY };
       // console.warn(this.id_cal)
      
      let results = await axios.post("http://localhost:5500/api/calculateAverage", 
      {
      id_user: localStorage.getItem('user_id'),
      id_cal: 4,
      quantity1: this.quantity1,
      quantity2: this.quantity2,
      quantity3:this.quantity3,
      quantity4: this.quantity4,
      quantity5: this.quantity5,
      price1: this.price1,
      price2: this.price2,
      price3: this.price3,
      price4: this.price4,
      price5: this.price5,
      result: this.result.totalY,
        
      },
    );console.warn(results);
    this.historys()
    },
    async historys(){
      this.history = []
      let results = await axios.get("http://localhost:5500/api/calculateAverage",{
        params:{
          id_user: localStorage.getItem('user_id'),
        },
      });
      console.warn(results);
      this.history = results.data.data
      console.warn(this.history)
    }
  },
};
  
  
</script>