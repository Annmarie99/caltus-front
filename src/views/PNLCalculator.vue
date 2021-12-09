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
        <p class="text-white text-center text-2xl p-0 m-0  uppercase"> PNL Calculator</p>
        <br><br>

        <p class="m-0 p-0 text-lg text-white">
          Calculate your Profit/Loss price below.</p
        >
        <br />

        <p class="m-0 p-0 text-lg text-white"> Entry Price :</p>
        <b-input-group prepend="$" append="$">
        <b-form-input 
        size = "xs"
        class="bg-dark text-white"
        v-model="price1" 
        placeholder="">
        </b-form-input> </b-input-group><br/>

       <p class="m-0 p-0 text-lg text-white"> Exit Price : </p>
       <b-input-group prepend="$" append="$">
        <b-form-input 
        class="bg-dark text-white"
        v-model="price2" 
        placeholder=""> 
        </b-form-input></b-input-group><br />

        <p class="m-0 p-0 text-lg text-white"> Quantity :</p>
        <b-form-input 
        class="bg-dark text-white"
        v-model="quantity" 
        placeholder=""> 
        </b-form-input><br />

        <!--<p class="m-0 p-0 text-lg text-white"> Buy fees % : </p>
        <b-form-input 
        class="bg-dark text-white"
        v-model="buy" 
        placeholder="">
         </b-form-input><br />

        <p class="m-0 p-0 text-lg text-white"> Sell Fees % : </p>
        <b-form-input
        class="bg-dark text-white"
         v-model="sell" 
         placeholder="">
          </b-form-input><br />
-->

         <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePNL" variant="secondary "
            >Calculate</b-button
          >
        </div>


        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            PNL :
            <span class="text-calc-accent">{{
              result.totalpnl.toFixed(2)
            }}</span>
          </p>
          
        </div>
     <router-link to=/CardsPNL class="text-white" >Learn More --> </router-link>
      </div>
      
      <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>

        <div v-for="lists in history" :key="lists.id_history_calculate" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            PNL :
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
  name: "PNLCalculator",
  data() {
    return {
      price1: "",
      price2: "",
      quantity: "",
      result: null,
      history:[]
    };
  },
  async mounted() {
     this.historys()
    
  },
  methods: {
    async calculatePNL(p) {
      p.preventDefault();
      const x = (parseFloat(this.price2)-parseFloat(this.price1));
      const totalpnl = x  *  parseFloat(this.quantity);
      
      this.result = { totalpnl };

      // console.warn(this.id_cal)
      console.warn(this.price1)
      console.warn(this.price2)
      console.warn(this.quantity)
      
      let results = await axios.post("http://localhost:5500/api/calculatePnl", 
      {
        id_user: localStorage.getItem('user_id'),
        id_cal: 1,
        entry_price:this.price1,
        exit_price: this.price2,
        quantity: this.quantity,
        result: this.result.totalpnl,
      },
    );console.warn(results);
    this.historys()
    },
    async historys(){
      this.history = []
      let results = await axios.get("http://localhost:5500/api/calculatePnl",{
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

