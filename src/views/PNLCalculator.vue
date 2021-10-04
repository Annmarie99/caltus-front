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
        <p class="text-white text-center text-2xl p-0 m-0  uppercase"> PNL Calculator</p>
        <br><br>

        <p class="m-0 p-0 text-lg text-white">
          Calculate your Profit/Loss price below.</p
        >
        <br />

        <p class="m-0 p-0 text-lg text-white"> Entry Price :</p>
        
        <b-form-input 
        class="bg-dark text-white"
        v-model="price1" 
        placeholder="">
        </b-form-input> <br />

       <p class="m-0 p-0 text-lg text-white"> Exit Price : </p>
        <b-form-input 
        class="bg-dark text-white"
        v-model="price2" 
        placeholder=""> 
        </b-form-input><br />

        <p class="m-0 p-0 text-lg text-white"> Quantity :</p>
        <b-form-input 
        class="bg-dark text-white"
        v-model="quantity" 
        placeholder=""> 
        </b-form-input><br />

        <p class="m-0 p-0 text-lg text-white"> Buy fees % : </p>
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

         <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePNL" variant="dark"
            >Calculate</b-button
          >
        </div>


        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            PNL :
            <span class="text-calc-accent">{{
              result.totalpnl.toFixed(3)
            }}</span>
          </p>
          
        </div>
      </div>
      
      <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>

         <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            PNL :
            <span class="text-calc-accent">{{
              result.totalpnl.toFixed(3)
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
  name: "PNLCalculator",
  data() {
    return {
      price1: "",
      price2: "",
      quantity: "",
      buy: "",
      sell: "",
      result: null,
    };
  },
  methods: {
    calculatePNL(p) {
      p.preventDefault();
      const x = (parseFloat(this.price2)-parseFloat(this.price1));
      const totalpnl = x  *  parseFloat(this.quantity);
      
      this.result = { totalpnl };
    },
  },
};
</script>
