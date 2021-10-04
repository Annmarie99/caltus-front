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
        <p class="text-white text-center text-2xl p-0 m-0  uppercase"> Liquidation Calculator</p>
        <br><br>
      
         <p class="m-0 p-0 text-lg text-white"> Entry Price : </p>
      
        <b-form-input
         class="bg-dark text-white"
          v-model="price "
          placeholder=""
        ></b-form-input> <br>

         <p class="m-0 p-0 text-lg text-white"> Quantity : </p>
        <b-form-input 
         class="bg-dark text-white"
          v-model="quantity" 
          placeholder="">
          </b-form-input><br>

          <p class="m-0 p-0 text-lg text-white"> Balance : </p>
         <b-form-input 
          class="bg-dark text-white"
          v-model="balance" 
          placeholder="">
          </b-form-input><br>

        
        
      <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAPY" variant="dark"
            >Calculate</b-button
          >
        </div>

        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            Liquidation Price  :
            <span class="text-calc-accent">{{
              result.totalPercentt.toFixed(3)
            }}</span>
          </p>
          
        </div>
      </div>
      
      <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>


        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            <span class="text-calc-accent">{{
              result.totalP}}</span> - (
            <span class="text-calc-accent">{{
              result.totalB}}</span> / 
            <span class="text-calc-accent">{{
              result.totalQ
            }}</span>) = 
            <span class="text-calc-accent">{{
              result.totalPercentt.toFixed(3)}}</span>  

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
name : "LiquidationCalculator",
  data() {
    return {
      price: "",
      quantity: "",
      balance : "",

      result: null,
    };
  },
  methods: {
    calculateAPY(e) {
      e.preventDefault();
      const x = parseFloat(this.balance) / parseFloat(this.quantity);
      const totalPercentt = parseFloat(this.price) - x ;
      
      this.result = { totalPercentt ,totalB : this.balance , totalQ : this.quantity , totalP : this.price};
    },
  },
};
  
   
</script>
