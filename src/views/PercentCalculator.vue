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
      <div class="p-3">
        <p class="text-white text-center text-2xl p-0 m-0 uppercase">
          Percentage Change Calculator
        </p>
        <br><br>

        <div class="flex-auto">
          <div class="flex-1 items-center space-y-5 p-3">
            <div class="space-y-5">
              
               <p class="m-0 p-0 text-center text-lg text-white">what is</p>
               
              <b-input-group prepend="$" append="$">
              <b-form-input
               class="bg-dark text-white"
                v-model="amount1"
                 placeholder="Enter your amount"
              ></b-form-input></b-input-group>
  
             <p class="m-0 p-0 text-center  text-lg text-white">%of</p>

             <b-input-group prepend="%" append="%">
              <b-form-input 
               class="bg-dark text-white"
              v-model="percent1" 
              placeholder="rate %">
              </b-form-input></b-input-group>

             <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePercent" variant="secondary "
            >Calculate</b-button
          >
        </div>

              <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  Result: :
                  <span class="text-calc-accent">{{
                    result.totalPercent.toFixed(2)
                  }} </span>
                </p>
                
              </div>
            </div>
                  
            
          </div>

          
          <div>
            <div class="flex-1 space-y-5 p-3">

              <b-input-group prepend="$" append="$">
              <b-form-input
               class="bg-dark text-white"
                v-model="percent2"
                placeholder="Enter your amount"
              ></b-form-input></b-input-group>

             <p class="m-0 p-0 text-center  text-lg text-white">is what % of</p>

             <b-input-group prepend="$" append="$">
              <b-form-input
               class="bg-dark text-white"
                v-model="amount2"
                placeholder="Enter your amount"
              ></b-form-input></b-input-group>

              <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePercent" variant="secondary "
            >Calculate</b-button
          >
        </div>

              <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  Result :
                  <span class="text-calc-accent">{{
                    result.totalPercent2.toFixed(2)
                  }}</span> %
                </p>
                
              </div>
            </div>
          </div>




          <div>
            <div class="flex-1 space-y-5 p-3">

              <p class="m-0 p-0 text-center  text-lg text-white">What is the percentage increase/decrease</p><br>

              <p class="m-0 p-0 text-center  text-lg text-white">From</p>
              <b-input-group prepend="$" append="$">
              <b-form-input
               class="bg-dark text-white"
                v-model="amount3"
                placeholder="Enter your amount"
              ></b-form-input></b-input-group>

              <p class="m-0 p-0 text-center  text-lg text-white">to</p>
              <b-input-group prepend="$" append="$">
              <b-form-input 
               class="bg-dark text-white"
              v-model="percent3"
               placeholder="Enter your amount">
               </b-form-input></b-input-group>

              <div class="w-full flex justify-center">
          <b-button class="mx-auto" @click="calculatePercent" variant="secondary "
            >Calculate</b-button
          >
        </div>
              <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  Result :
                  <span class="text-calc-accent">{{
                    result.totalPercent3.toFixed(2) 
                  }}</span>
                  %
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-link to=/CardsPercent class="text-white" >Learn More --> </router-link>


      </div>

     <div class="w-1/4 p-2 bg-gray-800 text-white">
        <p class="text-center uppercase">History</p>

        <div v-for="lists in history" :key="lists.id_history_calculate" class="mt-5 text-gray-300 border-t-2 pt-4">
                <p>
                  what is :
                  <span class="text-calc-accent">{{
                    lists.amount1_1
                  }}</span>
                  of% 
                  <span class="text-calc-accent">{{
                   lists.percent1_2
                  }}</span> = 
                  <span class="text-calc-accent">{{
                    lists.result
                  }}</span> <br>

                  
                 <!-- <span class="text-calc-accent">{{
                    result.totalP2
                  }}</span>
                  is what % of
                  <span class="text-calc-accent">{{
                    result.totalA2
                  }}</span> = 
                  <span class="text-calc-accent">{{
                    result.totalPercent2.toFixed(2) 
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
                    result.totalPercent3.toFixed(2) 
                  }}</span> %
                  -->
                </p>
                
          </div>
        


      </div>

    </div>
  </calculator-layout>
</template>

<script>
import Vue from "vue"; // in Vue 2
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
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
      history:[],
    };
  },
   async mounted() {
    this.historys()
  },
  methods: {
    async calculatePercent(e) {
      e.preventDefault();
      
      const totalPercent = (parseFloat(this.amount1)/ 100 ) * parseFloat(this.percent1);
      
      const totalPercent2 = ( parseFloat(this.percent2) / parseFloat(this.amount2) )  * 100;
      

      const result = parseFloat(this.amount3) - parseFloat(this.percent3);
      const totalValue = result / parseFloat(this.amount3);
      const totalPercent3 = totalValue * -100;
      
      this.result = { totalPercent,totalPercent2, totalPercent3, totalA1 : this.amount1 , totalA2 : this.amount2 ,totalA3 : this.amount3 , totalP1 : this.percent1, totalP2 : this.percent2 ,totalP3 : this.percent3 };
      
      // console.warn(this.id_cal)
      console.warn(this.amount1)
      console.warn(this.percent1)
      console.warn(this.amount2)
      console.warn(this.amount3)
      console.warn(this.percent3)
      console.warn(this.percent3)
      let results = await axios.post("http://localhost:5500/api/calculatePercent", 
      {
         id_user: localStorage.getItem('user_id'),
         id_cal: 2,
         amount1_1: this.amount1,
         percent1_2: this.percent1,
         input2_1: this.amount2,
         input2_2: this.amount3,
         price3_1: this.percent3,
         price3_2: this.percent3,
         result: this.result.totalPercent,
          result: this.result.totalPercent1,
         
      },
    );console.warn(results);
    this.historys()
    },
    async historys(){
      this.history = []
      let results = await axios.get("http://localhost:5500/api/calculatePercent",{
        params:{
          id_user: localStorage.getItem('user_id'),
        },
      });
      console.warn(results);
      this.history = results.data.data
      console.warn(this.history)
    }
  },

};
</script>
