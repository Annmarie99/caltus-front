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
      <div class="p-3">
        <p class="text-white text-center text-2xl p-0 m-0 uppercase">
          Percentage Change Calculator
        </p>
        <br><br>

        <div class="flex-auto">
          <div class="flex-1 items-center space-y-5 p-3">
            <div class="space-y-5">
              
               <p class="m-0 p-0 text-center text-lg text-white">what is</p>
              <b-form-input
               class="bg-dark text-white"
                v-model="amount1"
                placeholder=""
              ></b-form-input>
  
             <p class="m-0 p-0 text-center  text-lg text-white">%of</p>
              <b-form-input 
               class="bg-dark text-white"
              v-model="percent1" 
              placeholder="">
              </b-form-input>

             <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePercent" variant="dark"
            >Calculate</b-button
          >
        </div>

              <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  Result: :
                  <span class="text-calc-accent">{{
                    result.totalPercent.toFixed(3)
                  }}</span>
                </p>
                
              </div>
            </div>
          </div>

          
          <div>
            <div class="flex-1 space-y-5 p-3">

              
              <b-form-input
               class="bg-dark text-white"
                v-model="percent2"
                placeholder=""
              ></b-form-input>

             <p class="m-0 p-0 text-center  text-lg text-white">is what % of</p>
              <b-form-input
               class="bg-dark text-white"
                v-model="amount2"
                placeholder=""
              ></b-form-input>

              <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePercent" variant="dark"
            >Calculate</b-button
          >
        </div>

              <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  Result :
                  <span class="text-calc-accent">{{
                    result.totalPercent2.toFixed(3)
                  }}</span> %
                </p>
                
              </div>
            </div>
          </div>




          <div>
            <div class="flex-1 space-y-5 p-3">

              <p class="m-0 p-0 text-center  text-lg text-white">What is the percentage increase/decrease</p><br>

              <p class="m-0 p-0 text-center  text-lg text-white">From</p>
              <b-form-input
               class="bg-dark text-white"
                v-model="amount3"
                placeholder=""
              ></b-form-input>

              <p class="m-0 p-0 text-center  text-lg text-white">to</p>
              <b-form-input 
               class="bg-dark text-white"
              v-model="percent3"
               placeholder="">
               </b-form-input>

              <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePercent" variant="dark"
            >Calculate</b-button
          >
        </div>
              <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  Result :
                  <span class="text-calc-accent">{{
                    result.totalPercent3.toFixed(3) 
                  }}</span>
                  %
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

     <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>

        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  what is :
                  <span class="text-calc-accent">{{
                    result.totalA1
                  }}</span>
                  of% 
                  <span class="text-calc-accent">{{
                    result.totalP1 
                  }}</span> = 
                  <span class="text-calc-accent">{{
                    result.totalPercent.toFixed(3) 
                  }}</span> <br>

                  
                  <span class="text-calc-accent">{{
                    result.totalP2
                  }}</span>
                  is what % of
                  <span class="text-calc-accent">{{
                    result.totalA2
                  }}</span> = 
                  <span class="text-calc-accent">{{
                    result.totalPercent2.toFixed(3) 
                  }}</span> %<br>
                  
                  From 
                   <span class="text-calc-accent">{{
                    result.totalA3
                  }}</span>
                  is what % of
                  <span class="text-calc-accent">{{
                    result.totalP3
                  }}</span> = 
                  <span class="text-calc-accent">{{
                    result.totalPercent3.toFixed(3) 
                  }}</span> %
                  
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
  name: "PercentCalculator",
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
      
      const totalPercent = (parseFloat(this.amount1)/ 100 ) * parseFloat(this.percent1);
      
      const totalPercent2 = ( parseFloat(this.percent2) / parseFloat(this.amount2) )  * 100;
      

      const result = parseFloat(this.amount3) - parseFloat(this.percent3);
      const totalValue = result / parseFloat(this.amount3);
      const totalPercent3 = totalValue * -100;
      
      this.result = { totalPercent,totalPercent2, totalPercent3, totalA1 : this.amount1 , totalA2 : this.amount2 ,totalA3 : this.amount3 , totalP1 : this.percent1, totalP2 : this.percent2 ,totalP3 : this.percent3 };
    },
  },
};
</script>
