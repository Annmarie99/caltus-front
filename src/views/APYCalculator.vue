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
        <p class="text-white text-center text-2xl  p-0 m-0">APY CALCULATOR</p>
        <br />

        <p class="m-0 p-0 text-lg text-white">Amount</p>

        <b-form-input
          class="bg-dark text-white"
          v-model="value"
          placeholder="Enter your amount"
        ></b-form-input>
        
         <label for="range-1"  class="text-white" ></label> 
         <b-form-input id="range-1" v-model="value" type="range" min="0"  class="bg-dark" max="10000000" step="1"></b-form-input>
          

        <br />
        <p class="m-0 p-0 text-lg text-white">APY</p>
        <b-form-input
          class="bg-dark text-white"
          v-model="apy"
          placeholder="Enter your APY"
        ></b-form-input
        ><br />

        <p class="m-0 p-0 text-lg text-white">DAY</p>
        <b-form-input
          class="bg-dark text-white"
          v-model="days"
          placeholder="Enter your days"
        ></b-form-input>

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
    </div>
  </calculator-layout>
</template>

<script>
import CalculatorLayout from "../components/Layouts/CalculatorLayout.vue";
export default {
  components: { CalculatorLayout },
  name: "APYCalculator",
  data() {
    return {
      value: "",
      amount: "",
      apy: "",
      days: "",
      result: null,
    };
  },
  methods: {
    calculateAPY(e) {
      e.preventDefault();
      const x = (parseFloat(this.apy) / 365) * parseFloat(this.days);
      const totalInterest = (parseFloat(this.value) * x) / 100;
      const totalBalance = totalInterest + parseFloat(this.value);
      this.result = { totalInterest, totalBalance, totalDays: this.days };
    },
  },
};
</script>
