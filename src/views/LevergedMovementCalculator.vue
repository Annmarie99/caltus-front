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
        <p class="text-white text-center text-2xl p-0 m-0   uppercase"> Leverged Movement  CALCULATOR</p>
        <br><br>
      
      <p class="m-0 p-0 text-lg text-white"> Leverage on Base Amount : </p>
        <b-form-input
        class="bg-dark text-white"
          v-model="amount"
          placeholder="X Leverage"
        ></b-form-input> <br>

    <p class="m-0 p-0 text-lg text-white"> Gain want to achieve in %  : </p>
    <b-input-group prepend="%" append="%">
    <b-form-input 
    class="bg-dark text-white"
        v-model="rate" 
        placeholder="Rate in %">
        </b-form-input></b-input-group><br>

        
       
      <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateMovment" variant="dark"
            >Calculate</b-button
          >
        </div>

        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            FOR :
            <span class="text-calc-accent">{{ result.totalR }}</span> %
            GAIN ON BASE AMOUNT WITH
            <span class="text-calc-accent">{{ result.totalA }}</span> X 
            LEVERAGE :
            YOU NEED TO TARGET 
            <span class="text-calc-accent">{{
              result.totalCI.toFixed(3)
            }}</span>%
          </p>
        </div>
      </div>
      
      <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>
        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            FOR :
            <span class="text-calc-accent">{{ result.totalR }}</span> %
            GAIN ON BASE AMOUNT WITH
            <span class="text-calc-accent">{{ result.totalA }}</span> X 
            LEVERAGE :
            YOU NEED TO TARGET 
            <span class="text-calc-accent">{{
              result.totalCI.toFixed(3)
            }}</span>%
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
  name: "LevergedMovementCalculator",
  data() {
    return {
      amount: "",
      rate: "",
      p:0,
      result: null,
    };
  },
  methods: {
    calculateMovment(m) {
      m.preventDefault();
      
      const totalCI = parseFloat(this.rate)/parseFloat(this.amount);
      this.result = { totalCI  , totalA: this.amount , totalR:this.rate};
      console.log(totalCI)
    },
  },
};
</script>
