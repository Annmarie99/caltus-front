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
        <p class="text-white text-center text-2xl p-0 m-0  uppercase"> Trade Compound Calculator</p>
        <br><br>
        
         <p class="m-0 p-0 text-lg text-white"> Base Amount :</p> 
        
        <b-input-group prepend="$" append="$">
        <b-form-input
        class="bg-dark text-white"
          v-model="amount"
          placeholder=""
        ></b-form-input> </b-input-group><br>

         <p class="m-0 p-0 text-lg text-white"> Leverage on Base Amount : </p>
        <b-form-input 
        class="bg-dark text-white"
          v-model="leverage" 
          placeholder="">
          </b-form-input><br>
        
         <p class="m-0 p-0 text-lg text-white">Interest rate gain per Trade :</p>
         <b-input-group prepend="%" append="%">
        <b-form-input 
        class="bg-dark text-white"
          v-model="rate" 
          placeholder="Rate %">
          </b-form-input></b-input-group><br>
        
         <p class="m-0 p-0 text-lg text-white">Number of Trades : </p>
        <b-form-input 
        class="bg-dark text-white"
          v-model="trades" 
          placeholder="Trades">
          </b-form-input><br>
        
       

        
        <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateTrad" variant="secondary"
            >Calculate</b-button
          >
        </div>


        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            TOTAL BALANCE AFTER INTEREST : :
            <span class="text-calc-accent">{{
              result.totalCI.toFixed(2)
            }}</span>
          </p>
            
            
        </div>
     
       <router-link to=/CardsTrade class="text-white" >Learn More --> </router-link>


      </div>
      
      <div class="w-1/4 p-2 bg-gray-800 text-white">
        
        <p class="text-center uppercase">History</p>
         
        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            Trade 
            <span class="text-calc-accent">{{result.totalM}}</span> : <br>
            Base amount : 
          <span class="text-calc-accent">{{
              result.totalaAmount.toFixed(2)
            }}</span><br>
            Earnings : 
            <span class="text-calc-accent">{{
              result.totalX.toFixed(2)
            }}</span><br>
            Balance : 
            <span class="text-calc-accent">{{
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
name : "TradeCompoundCalculator",
  data() {
    return {
      amount: "",
      leverage: null ,
      rate: "",
      trades: "",
      m: 0,
      
      result: null,
    };
  },
  async mounted() {
    let results = await axios.post("https://caltus.herokuapp.com/api/calculateTrade", [
      {
     id_cal: this.id_cal,
    amount:this.amount,
    leverage: this.leverage,
    rate_trade: this.rate,
    number_trade:this.trades,
    result: this.result,
      },
    ]);console.warn(results);
  },
  methods: {
    calculateTrad(t) {
      t.preventDefault()
     
      this.m++
      const totalX = parseFloat(this.amount)  * parseFloat(this.leverage) ;


      const totalaAmount = (parseFloat(this.amount) * parseFloat(this.rate) )/ 100;
      const totalCI = totalaAmount + parseFloat(this.amount) ;
      
      this.result = { totalCI ,totalX,totalaAmount, totalM: this.m , totalA: this.amount };
      console.log(totalCI)
    }
  },
};
  
   
</script>
