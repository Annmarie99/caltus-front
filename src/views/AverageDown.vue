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
        
        <b-input-group prepend="1.">
        <b-form-input
        
        class="bg-dark text-white"
          v-model="quantity"
          placeholder=""
        
        ></b-form-input>  
        </b-input-group> 
        <br>
        
         <b-input-group prepend="2.">
        <b-form-input 
        class="bg-dark text-white"
          v-model="quantity2" 
          placeholder="">
          </b-form-input></b-input-group><br>
          
       <b-input-group prepend="3.">
          <b-form-input 
          class="bg-dark text-white"
          v-model="quantity3" 
          placeholder="">
          </b-form-input></b-input-group><br>


         <b-input-group prepend="4.">
          <b-form-input 
          class="bg-dark text-white"
          v-model="quantity4" 
          placeholder="">
          </b-form-input></b-input-group><br>
     
        <b-input-group prepend="5.">
         <b-form-input 
         class="bg-dark text-white"
          v-model="quantity5" 
          placeholder="">
          </b-form-input></b-input-group><br>


     <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAver" variant="dark"
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
     
     <b-input-group prepend="$">
        <b-form-input
        class="bg-dark text-white"    
         v-model="price" 
          placeholder="">
          </b-form-input></b-input-group><br>
 
        <b-input-group prepend="$">
        <b-form-input 
        class="bg-dark text-white"
          v-model="price2" 
          placeholder="">
          </b-form-input></b-input-group><br>

         <b-input-group prepend="$">
          <b-form-input 
          class="bg-dark text-white"
          v-model="price3" 
          placeholder="">
          </b-form-input></b-input-group><br>

         <b-input-group prepend="$">
          <b-form-input 
          class="bg-dark text-white"
          v-model="price4" 
          placeholder="">
          </b-form-input></b-input-group><br>
        
        <b-input-group prepend="$">
          <b-form-input 
          class="bg-dark text-white"
          v-model="price5" 
          placeholder="">
          </b-form-input></b-input-group><br>

     <!----<div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculateAver" variant="dark"
            >Clear</b-button
          >
        </div>---->
    </div></div>
        
        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            The average cost for :
            <span class="text-calc-accent">{{
              result.totalY.toFixed(3)
            }}</span>
          </p>
          <p>
            Contracts / Shares is $ : 
             <span class="text-calc-accent">{{
              result.totalX.toFixed(3)
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
      quantity: "",
      quantity2: "",
      quantity3: "",
      quantity4: "",
      quantity5: "",
      price: "",
      price2: "",
      price3: "",
      price4: "",
      price5: "",
      result: null,
    };
  },
  methods: {
    calculateAver(u) {
      u.preventDefault();
      const x = parseFloat(this.quantity) + parseFloat(this.quantity2) + parseFloat(this.quantity3) + parseFloat(this.quantity4) + parseFloat(this.quantity5);
      const totalX = x/5;
      const y = parseFloat(this.price) + parseFloat(this.price2) + parseFloat(this.price3) + parseFloat(this.price4) + parseFloat(this.price5);
      const totalY = y/5;

      this.result = { totalX, totalY };
    },
  },
};
  
  
</script>