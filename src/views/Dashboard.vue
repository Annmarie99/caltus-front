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
            <div class="card-header text-white">My Coin !</div>
            <div class="card-body text-white">
              <DashPie />
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="span3">
          <table class="table sticky table-dark table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Last Price</th>
                <th scope="col">Volume</th>
              </tr>
            </thead>
            <tbody>
              <div></div>
              <tr>
                <td>
                  <img
                    src="../assets/eth.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  ETH
                  <footer>Eteream</footer>
                </td>
                <td>
                  ${{
                    Math.floor(marketPrice.ethusdt).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })
                  }}
                </td>
                <td>{{ lastPrice.ethusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/bnb.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  BNB
                  <footer>bnb</footer>
                </td>
                <td>
                  ${{
                    Math.floor(marketPrice.bnbusdt).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })
                  }}
                </td>
                <td>{{ lastPrice.bnbusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/btc.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  BTC
                  <footer>Bitcoin</footer>
                </td>
                <td>
                  ${{
                    Math.floor(marketPrice.btcusdt).toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })
                  }}
                </td>
                <td>{{ lastPrice.btcusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/chz.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  CHZ
                  <footer>Chiliz</footer>
                </td>
                <td>
                  ${{
                    marketPrice.chzusdt.toLocaleString("en-US", {
                      maximumFractionDigits: 2,
                    })
                  }}
                </td>
                <td>{{ lastPrice.chzusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/ada.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  ADA
                  <footer>Cardano</footer>
                </td>
                <td>${{ marketPrice.adausdt }}</td>
                <td>{{ lastPrice.adausdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/amp.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  AMP
                  <footer>Amp</footer>
                </td>
                <td>${{ marketPrice.ampusdt }}</td>
                <td>{{ lastPrice.ampusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/sand.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  SAND
                  <footer>The Sandbox</footer>
                </td>
                <td>${{ marketPrice.sandusdt }}</td>
                <td>{{ lastPrice.sandusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/alice.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  ALICE
                  <footer>My Neighbor Alice</footer>
                </td>
                <td>${{ marketPrice.aliceusdt }}</td>
                <td>{{ lastPrice.aliceusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/mana.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  MANA
                  <footer>Decentraland</footer>
                </td>
                <td>${{ marketPrice.manausdt }}</td>
                <td>{{ lastPrice.manausdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/gala.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  GALA
                  <footer>Gala</footer>
                </td>
                <td>${{ marketPrice.galausdt }}</td>
                <td>{{ lastPrice.galausdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="../assets/shib.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  SHIB
                  <footer>SHIBA INU</footer>
                </td>
                <td>${{ marketPrice.shibusdt }}</td>
                <td>{{ lastPrice.shibusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://seeklogo.com/images/D/dogecoin-doge-logo-DE369C56E6-seeklogo.com.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  DOGE
                  <footer>Dogecoin</footer>
                </td>
                <td>${{ marketPrice.dogeusdt }}</td>
                <td>{{ lastPrice.dogeusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://www.gofx.com/wp-content/uploads/2021/07/coinmarketcap-solana-200.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  SOL
                  <footer>Solana</footer>
                </td>
                <td>${{ marketPrice.solusdt }}</td>
                <td>{{ lastPrice.solusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  LUNA
                  <footer>Terra</footer>
                </td>
                <td>${{ marketPrice.lunausdt }}</td>
                <td>{{ lastPrice.lunausdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://seeklogo.com/images/F/filecoin-fil-logo-A6A4EAB825-seeklogo.com.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  FIL
                  <footer>File coin</footer>
                </td>
                <td>${{ marketPrice.filusdt }}</td>
                <td>{{ lastPrice.filusdt }}</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png"
                    width="30"
                    height="20"
                    class="ml-5 mt-2"
                  />
                </td>
                <td>
                  AVAX
                  <footer>Avalance</footer>
                </td>
                <td>${{ marketPrice.avaxusdt }}</td>
                <td>{{ lastPrice.avaxusdt }}</td>
              </tr>
            </tbody>
          </table>

          <p>
            <a class="btn btn-dark" href="https://www.binance.com/en/markets"
              >View details &raquo;</a
            >
          </p>
        </div>
        <!-- <div class="card border-dark mb-3 bg-dark">
          <div class="card-header text-white">MARKET TREND</div>
          <div class="card-body text-white">
            <div>
              <b-table dark striped hover :items="items"></b-table>
            </div>
          </div>
        </div> -->
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
      user: null,
      marketPrice: [],
      lastPrice: [],
      id: this.$route.params.id,
      style: {
        color: "#ffffff",
      },

      // items: [
      //   {
      //     Name: "BNB",
      //     Last_price: "$42,345.78",
      //     lasthr_change: "-9.50%",
      //     Market: 12,
      //   },
      //   {
      //     Name: "BTC",
      //     Last_price: "$42,345.78",
      //     lasthr_change: "-8.30%",
      //     Market: 678,
      //   },
      //   {
      //     Name: "ETH",
      //     Last_price: "$3,452.50",
      //     lasthr_change: "-7.96%",
      //     Market: 567,
      //   },
      //   {
      //     Name: "heloo",
      //     Last_price: "$0.456325",
      //     lasthr_change: "-12.45%",
      //     Market: 986,
      //   },
      //   {
      //     Name: "FIL",
      //     Last_price: "$74.60",
      //     lasthr_change: "-9.23%",
      //     Market: 89,
      //   },
      //   {
      //     Name: "ADA",
      //     Last_price: "$2.145",
      //     lasthr_change: "-3.64%",
      //     Market: 679,
      //   },
      // ],
    };
  },
  mounted() {
    console.warn("id " + this.id);
    console.warn("name " + this.name);
  },

  created: function () {
    const vm = this;
    this.connection = new WebSocket(
      `wss://stream.binance.com:9443/stream?streams=btcusdt@trade/bnbusdt@trade/ethusdt@trade/chzusdt@trade/adausdt@trade/ampusdt@trade/sandusdt@trade/aliceusdt@trade/manausdt@trade/galausdt@trade/shibusdt@trade/dogeusdt@trade/solusdt@trade/lunausdt@trade/filusdt@trade/avaxusdt@trade`
    );
    this.connection.onmessage = function (event) {
      const convert = JSON.parse(event.data);
      console.log(convert);
      Vue.set(vm.marketPrice, convert.data.s.toLowerCase(), convert.data.p);
      Vue.set(vm.lastPrice, convert.data.s.toLowerCase(), convert.data.q);
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

.table.sticky th {
  position: sticky;
  top: 0;
}
.table.sticky th::after {
  content: "";
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 0;
}
.span3 {
  /* overflow: hidden; */
  /* margin-right: 15px; */
  height: 350px;
  overflow-y: scroll;
}
</style>
