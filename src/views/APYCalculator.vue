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
        <p class="text-white text-center text-2xl  p-0 m-0">APY CALCULATOR</p>
        <br />

        <p class="m-0 p-0 text-lg text-white">Amount</p>

        <b-input-group prepend="$" append="$">
        <b-form-input
          class="bg-dark text-white"
          v-model="value"
          placeholder="Enter your amount"
        ></b-form-input></b-input-group>

        <div class="range1">
        <div class="field">
        <div class="value left text-white ">0</div>
        <label for="range-1"  class="text-white" ></label> 
         <b-form-input id="range2" v-model="value" value="50" type="range" min="0"   max="10000000" step="1" ></b-form-input>
        <div class="value right text-white">10,000,000</div>
        <div id="selector">
        <div class="SelectBtn">
        
        </div>
        </div>
        </div>
        </div>
         
          

        <br/>
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
          <b-button class="mx-auto" @click="calculateAPY" variant="secondary"
            >Calculate</b-button
          >
          
        </div>

        <div v-if="result" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>
            Total Interest :
            <span class="text-calc-accent">{{
              result.totalInterest.toFixed(2)
            }}</span>
          </p>
          <p>
            Your total balance after
            <span class="text-calc-accent">{{ result.totalDays }}</span> days
            will be :
            <span class="text-calc-accent">{{
              result.totalBalance.toFixed(2)
            }}</span>
          </p>
        </div>

       <router-link  to=/CardsApy  class="text-white" >Learn More --> </router-link> 
      
      </div>

      <div class="w-1/4 p-2 bg-gray-700 text-white">
        <p class="text-center uppercase">History</p>

        <div v-for="lists in history" :key="lists.id_history_calculate" class="mt-5 text-gray-300 border-t-2 pt-4">
          <p>


            Total Interest :
            <span class="text-calc-accent">{{
              lists.result
            }}</span>
          </p>
          <p>
            Your total balance after
            <span class="text-calc-accent">{{ lists.apy }}</span> days
            will be :
            <span class="text-calc-accent">{{
              lists.day
            }}</span>
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
  name: "APYCalculator",
  data() {
    return {
      value: "",
      apy: "",
      days: "",
      result: null,
      history:[],
    };
  },

  async mounted() {
    this.historys()
    
  },
  methods: {
    async calculateAPY(e) {
      e.preventDefault();
      const x = (parseFloat(this.apy) / 365) * parseFloat(this.days);
      const totalInterest = (parseFloat(this.value) * x) / 100;
      const totalBalance = totalInterest + parseFloat(this.value);
      this.result = { totalInterest, totalBalance, totalDays: this.days };
      
      // console.warn(this.id_cal)
      console.warn(this.value)
      console.warn(this.apy)
      console.warn(this.result)
      console.warn(this.days)
      let results = await axios.post("http://localhost:5500/api/calculateApy", 
      {
        id_user: localStorage.getItem('user_id'),
        id_cal: 8,
        principal_amount: this.value,
        apy: this.apy,
        day: this.days,
        result: this.result.totalInterest,
      },
      );console.warn(results);
      this.historys()
    },
    async historys(){
      this.history = []
      let results = await axios.get("http://localhost:5500/api/calculateApy",{
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

<style>

.range1{

  width: 100%;
  margin: 24% auto;
  position: relative;
}
#range2{

  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  outline: none;
  border-radius: 3px ;
}
#range2::-webkit-range2-thumb{

   -webkit-appearance: none;
    width: 48px;
    height: 48px;
    cursor: pointer;
    z-index: 3;
    position: relative;
}
#selector{

   height: 104px;
   width: 48px;
   position: absolute;
   bottom: -20px;
   left: 50%;
   transform: translateX(-50%);
   z-index: 2;
}
.SelectBtn{
  height: 48px;
  width: 48px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  bottom: 0;
}
.range1 .field{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center ;
  height: 100%;
}
</style>