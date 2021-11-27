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
        <p class="text-white text-center text-2xl p-0 m-0  uppercase"> Liquidation Calculator</p>
        <br><br>
      
         <p class="m-0 p-0 text-lg text-white"> Entry Price : </p>
      
        <b-form-input
         class="bg-dark text-white"
          v-model="value "
          placeholder=""
        ></b-form-input> 
         <label for="range-1"  class="text-white" ></label> 
         <b-form-input  id="range-1" 
         v-model="value" 
         style="width: 120px; background-color: rgba(0,0,255,.1)"
         type="range" 
         min="0"   
         max="10000000" 
         step="100"></b-form-input><br>


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
          <b-button class="mx-auto" @click="calculateAPY" variant="secondary "
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
        <router-link to=/CardsLiqui>Learn More --> </router-link>
      </div>
      
      <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>


        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            Liquidation Price  :
            <span class="text-calc-accent">{{
              result.totalPercentt.toFixed(3)
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
name : "LiquidationCalculator",
  data() {
    return {
      value: "",
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
      const totalPercentt = parseFloat(this.value) - x ;
      
      this.result = { totalPercentt ,totalB : this.balance , totalQ : this.quantity , totalP : this.value};
    },
  },
};
  
   
</script>
