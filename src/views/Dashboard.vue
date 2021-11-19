<template>
  <div>
    <div
      class="w-full p-10"
      :style="{
        'background-image':
          'url(https://images6.alphacoders.com/888/888108.png)',
      }"
    >
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
                  <!-- <span class="text-green-500 font-bold m-0 p-0">5%</span> -->
                </p>
                <p class="text-2xl font-bold p-0 m-0 text-gray-400">
                  {{
                    Math.floor(marketPrice.btcusdt).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })
                  }}
                  USD
                </p>
                <p class="text-lg p-0 m-0 text-gray-400">
                  {{
                    Math.floor(marketPrice.btcusdt * 33.3).toLocaleString(
                      "en-US",
                      {
                        maximumFractionDigits: 2,
                      }
                    )
                  }}
                  THB
                </p>
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
                  <!-- <span class="text-green-500 font-bold m-0 p-0">5%</span> -->
                </p>
                <p class="text-2xl font-bold p-0 m-0 text-gray-400">
                  {{
                    Math.floor(marketPrice.ethusdt).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })
                  }}
                  USD
                </p>
                <p class="text-lg p-0 m-0 text-gray-400">
                  {{
                    Math.floor(marketPrice.ethusdt * 33.3).toLocaleString(
                      "en-US",
                      {
                        maximumFractionDigits: 2,
                      }
                    )
                  }}
                  THB
                </p>
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
                  <!-- <span class="text-red-500 font-bold m-0 p-0">-5%</span> -->
                </p>
                <p class="text-2xl font-bold p-0 m-0 text-gray-400">
                  {{
                    Math.floor(marketPrice.bnbusdt).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })
                  }}
                  USD
                </p>
                <p class="text-lg p-0 m-0 text-gray-400">
                  {{
                    Math.floor(marketPrice.bnbusdt * 33.3).toLocaleString(
                      "en-US",
                      {
                        maximumFractionDigits: 2,
                      }
                    )
                  }}
                  THB
                </p>
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
</template>

<script>
import DashPie from "../components/graph/DashPie.vue";
//import DashLine from "../components/graph/DashLine.vue";
import Vue from "vue";

export default {
  components: { DashPie },
  name: "Login",
  data() {
    return {
      marketPrice: [],
      items: [{
        Name: "BNB",
        Last_price: "$42,345.78",
        lasthr_change: "-9.50%",
        Market: 12,
      },],
      style: {
        color: "#ffffff",
      },

    };
  },
  mounted() {
    const item ={
        Name: "BNB",
        Last_price: "$42,345.78",
        lasthr_change: "-9.50%",
        Market: 12,
    },

  },
  created: function () {
    const vm = this;
    this.connection = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=btcusdt@trade/bnbusdt@trade/ethusdt@trade`
    );
    this.connection.onmessage = function (event) {
      const convert = JSON.parse(event.data);
      console.log(convert);
      Vue.set(vm.marketPrice, convert.data.s.toLowerCase(), convert.data.p);
      // console.log(vm.marketPrice);
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
