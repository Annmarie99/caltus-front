<template>
  <div>
    <div class="w-full bg-gradient-to-r from-green-600 to-gray-700 p-10">
      <div class="row">
        <div class="col pt-10">
          <div
            class="card border-success mb-3 bg-dark"
            style="max-width: 18rem"
          >
            <div class="card-header text-gray-100">Bitcoin Price</div>
            <div class="card-body flex itmes-center justify-center space-x-5">
              <div class="my-auto">
                <img
                  src="../assets/btc.png"
                  width="50"
                  height="40"
                  class="mr-2 animate-bounce"
                />
              </div>
              <div>
                <p class="text-gray-300 p-0 m-0">
                  BTC / USDT
                  <span class="text-green-500 font-bold m-0 p-0">5%</span>
                </p>
                <p class="text-2xl font-bold p-0 m-0 text-gray-400">42,2000</p>
                <p class="text-lg p-0 m-0 text-gray-400">1,400,000 THB</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col pt-10">
          <div class="card mb-3 bg-dark" style="max-width: 18rem">
            <div class="card-header text-white">Ethereum Price</div>
            <div class="card-body flex itmes-center justify-center space-x-5">
              <div class="my-auto">
                <img
                  src="../assets/eth.png"
                  width="50"
                  height="40"
                  class="mr-2 animate-bounce"
                />
              </div>
              <div>
                <p class="text-gray-300 p-0 m-0">
                  ETH / USDT
                  <span class="text-green-500 font-bold m-0 p-0">5%</span>
                </p>
                <p class="text-2xl font-bold p-0 m-0 text-gray-400">2,9000</p>
                <p class="text-lg p-0 m-0 text-gray-400">94,000 THB</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col pt-10">
          <div class="card mb-3 bg-dark" style="max-width: 18rem">
            <div class="card-header text-gray-100">Binacne Coin Price</div>
            <div class="card-body flex itmes-center justify-center space-x-5">
              <div class="my-auto">
                <img
                  src="../assets/bnb.png"
                  width="50"
                  height="40"
                  class="mr-2 animate-bounce"
                />
              </div>
              <div>
                <p class="text-gray-300 p-0 m-0">
                  BNB / USDT
                  <span class="text-red-500 font-bold m-0 p-0">-5%</span>
                </p>
                <p class="text-2xl font-bold p-0 m-0 text-gray-400">373</p>
                <p class="text-lg p-0 m-0 text-gray-400">12,000 THB</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-3 flex bg-dark">
            <div class="card-header text-white">Amazing Pie !</div>
            <div class="card-body text-white">
              <DashPie />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-8">
          <div class="card mb-3 bg-dark">
            <div class="card-header">Amazing Line Graph</div>
            <div class="card-body">
              <DashLine />
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card border-dark mb-3 bg-dark">
            <div class="card-header text-white">MARKET TREND</div>
            <div class="card-body text-white">
              <div>
                <b-table dark striped hover :items="items"></b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashPie from "../components/graph/DashPie.vue";
import DashLine from "../components/graph/DashLine.vue";

export default {
  components: { DashPie, DashLine },
  name: "Login",
  data() {
    return {
      style: {
        color: "#ffffff",
      },
      items: [
        {
          Name: "BNB",
          Last_price: "$364.54",
          lasthr_change: "-9.50%",
          Market: 12,
        },
        {
          Name: "BTC",
          Last_price: "$42,345.78",
          lasthr_change: "-8.30%",
          Market: 678,
        },
        {
          Name: "ETH",
          Last_price: "$3,452.50",
          lasthr_change: "-7.96%",
          Market: 567,
        },
        {
          Name: "CHZ",
          Last_price: "$0.456325",
          lasthr_change: "-12.45%",
          Market: 986,
        },
        {
          Name: "FIL",
          Last_price: "$74.60",
          lasthr_change: "-9.23%",
          Market: 89,
        },
        {
          Name: "ADA",
          Last_price: "$2.145",
          lasthr_change: "-3.64%",
          Market: 679,
        },
      ],
    };
  },
};
</script>

<style>
.card-header {
  text-align: center;
}
div.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
</style>
