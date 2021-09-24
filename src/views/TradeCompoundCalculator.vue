<template>
  <calculator-layout>

    <div class="flex p-0 m-0 rounded-tl-lg">
      <div
        class="
          flex-1
          space-y-5
          bg-gradient-to-r
          from-green-600
          to-gray-700
          p-3
          rounded-tl-lg
        "
      >
        <p class="text-white text-center text-2xl p-0 m-0  uppercase"> Trade Compound Calculator</p>
        <br><br>
        
         <p class="m-0 p-0 text-lg text-white"> Base Amount :</p> 

        <b-form-input
        class="bg-dark text-white"
          v-model="amount"
          placeholder=""
        ></b-form-input> <br>

         <p class="m-0 p-0 text-lg text-white"> Leverage on Base Amount : </p>
        <b-form-input 
        class="bg-dark text-white"
          v-model="leverage" 
          placeholder="">
          </b-form-input><br>
        
         <p class="m-0 p-0 text-lg text-white">Interest rate gain per Trade :</p>
        <b-form-input 
        class="bg-dark text-white"
          v-model="rate" 
          placeholder="Rate %">
          </b-form-input><br>
        
         <p class="m-0 p-0 text-lg text-white">Number of Trades : </p>
        <b-form-input 
        class="bg-dark text-white"
          v-model="trades" 
          placeholder="Trades">
          </b-form-input><br>
        
       

        
        <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAPY" variant="dark"
            >Calculate</b-button
          >
        </div>


        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            Total Interest :
            <span class="text-calc-accent">{{
              result.totalInterest.toFixed(3)
            }}</span>
          </p>
          <p>
            Your total balance after
            <span class="text-calc-accent">{{ result.totalDays }}</span> days
            will be :
            <span class="text-calc-accent">{{
              result.totalBalance.toFixed(3)
            }}</span>
          </p>
        </div>
      </div>
      
      <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>
      </div>

    </div>
  </calculator-layout>
</template>

<script>

import CalculatorLayout from "../components/Layouts/CalculatorLayout.vue";
export default {
  components: { CalculatorLayout },
name : "TradeCompoundCalculator",
  data() {
    return {
      amount: "",
      leverage: "",
      rate: "",
      trades: "",
      
      result: null,
    };
  },
  methods: {
    calculateAPY(e) {
      e.preventDefault();
      const x = (parseFloat(this.apy) / 365) * parseFloat(this.days);
      const totalInterest = (parseFloat(this.amount) * x) / 100;
      const totalBalance = totalInterest + parseFloat(this.amount);
      this.result = { totalInterest, totalBalance, totalDays: this.days };
    },
  },
};
  
   
</script>
