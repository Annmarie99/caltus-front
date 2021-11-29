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
        <p class="text-white text-center text-2xl p-0 m-0">FEE CALCULATOR</p>
        <br /><br>
      
        
       
        
     <p class="m-0 p-0 text-lg text-white"> Amount of coins </p> 
        <b-form-input
        class="bg-dark text-white"
          v-model="amount"
          placeholder="In cryptocurrencices like USD,BTC,cet.or fiat currencies"
        ></b-form-input>
        
         <br>

         <p class="m-0 p-0 text-lg text-white"> Fee Rate / Funding Rate (%) </p>
        <b-input-group prepend="%" append="%">
        <b-form-input 
        class="bg-dark text-white"
          v-model="rate" 
          placeholder="Rate in%">
          </b-form-input></b-input-group><br>

        
       <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateFee" variant="secondary "
            >Calculate</b-button
          >
        </div>

        

        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            Trading Fee / Funding: 
            <span class="text-calc-accent">{{
              result.totalCI.toFixed(2)
            }}</span>
          </p>
          
         
        </div>
         <router-link to=/CardsFee  class="text-white" >Learn More --> </router-link> 
      </div>
      
     <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>

         <!--<datetime type="datetime" v-model="datetime13" format="yyyy-MM-dd HH:mm:ss"></datetime>-->

          <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">

            
          <p>
           Amount of coins : <span class = "text-calc-accent">{{ result.totalA }}</span> <br>
             Fee Rate / Funding Rate (%):<span class="text-calc-accent">{{ result.totalR }}</span> % 
            Trading Fee / Funding: <span class="text-calc-accent">{{
              result.totalCI.toFixed(2)
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
name : "FeeCalculator",
  data() {
    return {
      amount: "",
      rate: "",
      result: null,
    };
  },
  async mounted() {
    let results = await axios.post("https://caltus.herokuapp.com/api/calculateFee", [
      {
    id_cal: this.id_cal,
    trade_size: this.amount,
    fee_rate: this.rate,
    result: this.result,
        
      },
    ]);console.warn(results);
  },
  methods: {
    calculateFee(f) {
      f.preventDefault();
     const totalCI = (parseFloat(this.rate)*parseFloat(this.amount)) /100;
      this.result = { totalCI , totalA: this.amount , totalR: this.rate};
    },
  },
};
  
   
</script>
