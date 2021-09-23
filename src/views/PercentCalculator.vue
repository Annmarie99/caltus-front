<template>
  <calculator-layout>

    <div class="flex p-0 m-0">  
      
     
       <div class="flex-1 space-y-5 bg-gradient-to-r from-green-600 to-gray-700">

        <font face=angsananew size=5 color=black> Percentage Change Calculator</font> 
         <br>
      <font face=angsananew size=2 color=black> What is </font>
        <b-form-input
          v-model="amount1"
          placeholder=""
        ></b-form-input>
        <b-form-input 
          v-model="percent1" 
          placeholder="%of"></b-form-input>
       
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

      
      

      <div class="flex-1 space-y-5">
        <b-form-input
          v-model="percent2"
          placeholder="is what % of"
        ></b-form-input>
        <b-form-input 
          v-model="amount2" 
          placeholder="Enter your amount"></b-form-input>
        
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


       <div class="flex-1 space-y-5">
        <b-form-input
          v-model="amount3"
          placeholder="Enter your amount"
        ></b-form-input>
        <b-form-input 
          v-model="percent3" 
          placeholder="%"></b-form-input>
        
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
import CalculatorLayout from '../components/Layouts/CalculatorLayout.vue'
export default {
  components: { CalculatorLayout },
name : "PercentCalculator",
  data() {
    return {
      amount1: "",
      amount2: "",
      amount3: "",
      percent1: "",
      percent2: "",
      percent3: "",
      result: null,
    };
  },
  methods: {
    calculatePercent(e) {
      e.preventDefault();
      const x = (parseFloat(this.apy) / 365) * parseFloat(this.days);
      const totalInterest = (parseFloat(this.amount) * x) / 100;
      const totalBalance = totalInterest + parseFloat(this.amount);
      this.result = { totalInterest, totalBalance, totalDays: this.days };
    },
  },
};
  
      
</script>
