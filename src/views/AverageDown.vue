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
        <div class="p-3 ">

        <p class="text-white text-center text-2xl p-0 m-0">AVERAGE DOWN CALCULATOR</p>
        <br /><br>

      

     <div class="flex">

          <div class="flex-auto items-center space-y-5 p-3 ">
            
            <div class="space-y-5">

        <div class="table-fixed bg-gray-800 rounded-lg" >
        <p class="text-center  text-white text-xl p-0 m-0">Quantity</p> 
        </div><br>
        
        <p class="m-0 p-0 text-lg text-white"> 1. </p>
        <b-form-input
        class="bg-dark text-white"
          v-model="amount"
          placeholder=""
        ></b-form-input> <br>
 
        <p class="m-0 p-0 text-lg text-white"> 2. </p>
        <b-form-input 
        class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>
          
        <p class="m-0 p-0 text-lg text-white"> 3. </p>
          <b-form-input 
          class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>


        <p class="m-0 p-0 text-lg text-white"> 4. </p>
          <b-form-input 
          class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>
     
        <p class="m-0 p-0 text-lg text-white"> 5. </p>
         <b-form-input 
         class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>


     <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAPY" variant="dark"
            >Calculate</b-button
          >
        </div>
            </div>
          </div>
     


     <div >
    <div  class="flex-auto items-center space-y-5 p-3">
        
        <div class="table-fixed bg-gray-800 rounded-lg" >
       <p class="text-center  text-white text-xl p-0 m-0">Purchase Price</p>
       </div><br>
     
      <p class="m-0 p-0 text-lg text-white"> $ </p>
        <b-form-input
        class="bg-dark text-white"    
         v-model="rate" 
          placeholder="">
          </b-form-input><br>
 
        <p class="m-0 p-0 text-lg text-white"> $ </p>
        <b-form-input 
        class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>

        <p class="m-0 p-0 text-lg text-white"> $ </p>
          <b-form-input 
          class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>

        <p class="m-0 p-0 text-lg text-white"> $ </p>
          <b-form-input 
          class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>
        
        <p class="m-0 p-0 text-lg text-white"> $ </p>
          <b-form-input 
          class="bg-dark text-white"
          v-model="rate" 
          placeholder="">
          </b-form-input><br>

     <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAPY" variant="dark"
            >Clear</b-button
          >
        </div>
    </div></div>
        
       

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
  name: "AverageDown",
    data() {
    return {
      amount: "",
      rate: "",
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