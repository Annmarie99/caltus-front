<template>
  <calculator-layout>
    <div class="flex p-0 m-0">
      <div class="flex-1 space-y-5 bg-gradient-to-r from-green-600 to-gray-700">
        <div class="bottom-2">
          <font face="angsananew" size="5" color="white"> PNL Calculator</font>
          <br /><br />
        </div>

        <font face="angsananew" size="3" color="white">
          Calculate your Profit/Loss price below.</font
        >
        <br />

        <font face="angsananew" size="3" color="white"> Entry Price :</font>
        <br />

        <b-form-input v-model="price1" placeholder=""></b-form-input> <br />

        <font face="angsananew" size="1" color="white"> Exit Price : </font>
        <b-form-input v-model="price2" placeholder=""> </b-form-input><br />

        <font face="angsananew" size="1" color="white"> Quantity :</font>
        <b-form-input v-model="quantity" placeholder=""> </b-form-input><br />

        <font face="angsananew" size="1" color="white"> Buy fees % : </font>
        <b-form-input v-model="buy" placeholder=""> </b-form-input><br />

        <font face="angsananew" size="1" color="white"> Sell Fees % : </font>
        <b-form-input v-model="sell" placeholder=""> </b-form-input><br />

        <b-button @click="calculateAPY" variant="outline-primary"
          >Calculate</b-button
        >

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
        <p>History</p>
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
