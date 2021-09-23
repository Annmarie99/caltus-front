<template>
  <calculator-layout>

    <div class="flex p-0 m-0">  
      
      
      <div class="flex-1 space-y-5 bg-gradient-to-r from-green-600 to-gray-700">
        <font face=angsananew size=5 color=white> Trade Compound Calculator</font> <br><br>
      
        
        <font face=angsananew size=3 color=white> Base Amount :</font> <br>

        <b-form-input
          v-model="amount"
          placeholder=""
        ></b-form-input> <br>

        <font face=angsananew size=1 color=white> Leverage on Base Amount : </font>
        <b-form-input 
          v-model="leverage" 
          placeholder="">
          </b-form-input><br>
        
        <font face=angsananew size=1 color=white> Interest rate gain per Trade :</font>
        <b-form-input 
          v-model="rate" 
          placeholder="Rate %">
          </b-form-input><br>
        
        <font face=angsananew size=1 color=white> Number of Trades : </font>
        <b-form-input 
          v-model="trades" 
          placeholder="Trades">
          </b-form-input><br>
        
       

        
        <b-button @click="calculateAPY" variant="outline-primary" 
          >Calculate</b-button
        >


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
        <p>History</p>
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
