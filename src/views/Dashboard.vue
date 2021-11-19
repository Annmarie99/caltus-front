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
              <!--<b-table dark striped hover :items="items"></b-table>-->
              <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Price</th>
                    <th scope="col">24hr change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>
                      BNB
                      <footer>BNB</footer>
                    </td>
                    <td>
                      ${{ marketPrice.bnbusdt }}
                      <!--{{
                        Math.Round(
                          marketPrice.bnbusdt,
                          MidpointRounding.AwayFromZero
                        )
                      }}-->
                    </td>
                    <td>
                      {{ marketPrice.bnbusdt }}
                      <!--{{ Math.Floor((+marketPrice.bnbusdt - 572) / 572) * 100 }}-->
                      %
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>
                      BTC
                      <footer>Bitcoin</footer>
                    </td>
                    <td>
                      $
                      {{
                        marketPrice.btcusdt.toLocaleString("en-US", {
                          maximumFractionDigits: 2,
                        })
                      }}
                    </td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>
                      ETH
                      <footer>Ethereum</footer>
                    </td>
                    <td>{{ marketPrice.ethusdt }}</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>
                      SAND
                      <footer>The Sandbox</footer>
                    </td>
                    <td>{{ marketPrice.chzusdt }}</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
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
//import axios from "axios";

export default {
  components: { DashPie },
  name: "Login",
  data() {
    return {
      user: null,
      marketPrice: [],
      style: {
        color: "#ffffff",
      },
      items: [
        {
          Name: "BNB",
          Last_price: "$42,345.78",
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
          Name: "heloo",
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
  // async created() {
  //   const response = await axios.get("user", {});
  //   console.log(response);
  // },
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
footer {
  color: #d3d3d3;
}
</style>
