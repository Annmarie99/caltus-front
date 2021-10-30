<template>
  <div>
    <div
      class="
        w-full
        mx-auto
        pb-36
        p-10
        bg-gradient-to-r
        from-green-600
        to-gray-700
        m-0
        text-center
        h-screen
      "
    >
      <div class="grid grid-cols-6">
        <b-form-select
          class="text-white bg-dark mt-3 shadow ml-3 form-control"
          v-model="selectedCurr"
          :options="currOptions"
        ></b-form-select>
      </div>
      <div class="grid grid-cols-3">
        <div v-for="coin in myCoin" :key="coin.id">
          <div class="flex-1 bg-dark rounded-lg ml-3">
            <div class="card-body flex itmes-center justify-center space-x-5">
              <div class="my-auto">
                <img
                  :src="coin.img"
                  width="50"
                  height="40"
                  class="mr-2 animate-bounce"
                />
              </div>

              <div>
                <p class="text-gray-300 p-0 m-0">{{ coin.name }}</p>
                <p class="text-lg p-0 m-0 text-gray-400">
                  Amount :
                  <span class="text-green-500 font-bold m-0 p-0">{{
                    coin.amount
                  }}</span>
                  {{ coin.symbol }}
                </p>
                <p class="text-lg p-0 m-0 text-gray-400">
                  Buying Price :
                  <span class="text-blue-500 font-bold m-0 p-0"
                    >{{
                      (+coin.price * selectedCurr.multiplier).toLocaleString(
                        "en-US",
                        { maximumFractionDigits: 2 }
                      )
                    }}
                    <span class="text-gray-400">{{
                      selectedCurr.name
                    }}</span></span
                  >
                </p>
                <p class="text-lg p-0 m-0 text-gray-400">
                  Profit :
                  <span class="text-blue-500 font-bold m-0 p-0"
                    >{{
                      (
                        (((+marketPrice[coin.api] - +coin.price) *
                          +coin.amount *
                          selectedCurr.multiplier) /
                          (+coin.price * selectedCurr.multiplier)) *
                        100
                      ).toLocaleString("en-US", { maximumFractionDigits: 2 })
                    }}
                    %
                    <span class="text-gray-400">{{
                      selectedCurr.name
                    }}</span></span
                  >
                </p>

                <!-- <button
                  class="
                    bg-green-500
                    hover:bg-gray-500
                    text-gray-100
                    font-bold
                    py-1
                    px-4
                    rounded-full
                    mt-3
                  "
                >
                  <i class="bi bi-arrow-down-up"></i>
                  10%
                </button> -->
              </div>
            </div>
          </div>
          <!-- <div v-if="showGraph" class="w-full text-white p-5">
          <dash-line />
        </div> -->
        </div>
      </div>
      <div class="ml-auto mt-10 text-center w-full flex justify-center">
        <div class="text-center mr-0 h-25 bg-dark rounded-lg shadow-lg py-5">
          <form action="" class="">
            <div class="form-group mt-3 form-control bg-dark text-white">
              <div class="flex items-center space-x-3 bg-dark">
                <input
                  type="text"
                  v-model="searchCoin"
                  class="text-black bg-white mt-3 form-control shadow"
                  placeholder="Search your coin"
                />
                <b-form-select
                  :select-size="4"
                  v-model="selected"
                  :options="filteredCoin"
                  size="lg"
                  class="text-lg bg-dark"
                  placeholder="pls choose "
                ></b-form-select>
              </div>
            </div>
            <div class="form-group">
              <input
                class="mt-3 form-control shadow"
                type="text"
                placeholder="amount"
                v-model="amount"
              />
            </div>

            <div class="form-group mb-3">
              <input
                class="mt-3 form-control shadow"
                type="text"
                placeholder="price"
                v-model="price"
              />
            </div>

            <div>
              <button
                @click="handleSubmit"
                class="
                  bg-green-800
                  hover:bg-green-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  flex-1
                "
              >
                ADD
              </button>
              <button
                type="reset"
                value="Reset"
                class="
                  bg-red-800
                  hover:bg-red-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded
                  flex-1
                  ml-2
                "
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tokenList } from "../constants/tokenlist";
import { curencyList } from "../constants/currency";
import Vue from "vue";

// import DashLine from "../components/graph/DashLine.vue";
export default {
  // components: { DashLine },
  name: "App",
  data() {
    return {
      searchCoin: "",
      selected: "",
      selectedCurr: { name: "USD", multiplier: 1 },
      coinName: "",
      amount: "",
      price: "",
      myCoin: [],
      marketPrice: {},
      currOptions: curencyList.map((e) => {
        return {
          value: {
            name: e.name,
            multiplier: e.multiplier,
          },
          text: e.name,
        };
      }),
      coinOptions: tokenList.map((e) => {
        return {
          value: {
            name: e.name,
            api: e.api,
            img: e.imageUrl,
            symbol: e.symbol,
          },
          text: e.name,
        };
      }),
      openGraph: false,
      coinBox: [
        {
          id: 1,
          content: "coin Here",
        },
      ],
    };
  },

  computed: {
    filteredCoin() {
      return this.coinOptions.filter((coin) =>
        coin.text.toLowerCase().includes(this.searchCoin.toLowerCase())
      );
    },
    showGraph() {
      return this.openGraph;
    },
    apiLink() {
      const coins = this.myCoin.map(
        (e, i) => `${e.api}@trade${i !== this.myCoin.length - 1 ? "/" : ""}`
      );
      let url = "";
      coins.forEach((e) => {
        url += e;
      });
      return url;
    },
  },
  methods: {
    handleOpenGrpah() {
      if (this.openGraph === true) {
        this.openGraph = false;
      } else this.openGraph = true;
    },
    handleSubmit(e) {
      e.preventDefault();
      const newCoin = {
        coinName: this.selected.name,
        api: this.selected.api,
        amount: this.amount,
        price: this.price,
        img: this.selected.img,
        id: this.coinBox[this.coinBox.length - 1].id + 1,
        symbol: this.selected.symbol,
      };
      this.myCoin.push(newCoin);
      console.log(this.apiLink);
    },
  },
  watch: {
    myCoin() {
      const vm = this;
      this.connection = new WebSocket(
        `wss://stream.binance.com:9443/stream?streams=${this.apiLink}`
      );
      this.connection.onmessage = function (event) {
        const convert = JSON.parse(event.data);
        // vm.marketPrice[convert.data.s.toLowerCase()] = convert.data.p;
        Vue.set(vm.marketPrice, convert.data.s.toLowerCase(), convert.data.p);
      };
    },
  },
  // created: function () {
  //   const vm = this;
  //   this.connection = new WebSocket(
  //     `wss://stream.binance.com:9443/stream?streams=${this.apiLink}`
  //   );
  //   this.connection.onmessage = function (event) {
  //     const convert = JSON.parse(event.data);
  //     console.log(convert);
  //     vm.ethPrice = convert.p;
  //   };
  // },
};
</script>
