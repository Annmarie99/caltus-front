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
      "
    >
      <div class="flex">
        <div class="flex-1 bg-dark rounded-lg">
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
              <p class="text-gray-300 p-0 m-0">ETH</p>
              <p class="text-lg p-0 m-0 text-gray-400">
                Amount :
                <span class="text-green-500 font-bold m-0 p-0">2.0</span>
              </p>
              <p class="text-lg p-0 m-0 text-gray-400">
                Buying Price :
                <span class="text-blue-500 font-bold m-0 p-0">80000 THB</span>
              </p>
              <button
                @click="openGraph = !openGraph"
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
                5%
              </button>
            </div>
          </div>
          <div v-if="showGraph" class="w-full text-white p-5">
            <dash-line />
          </div>
        </div>

        <div class="flex-1 bg-dark rounded-lg ml-3">
          <div class="card-body flex itmes-center justify-center space-x-5">
            <div class="my-auto">
              <img
                src="../assets/chz.png"
                width="50"
                height="40"
                class="mr-2 animate-bounce"
              />
            </div>
            <div>
              <p class="text-gray-300 p-0 m-0">CHZ</p>
              <p class="text-lg p-0 m-0 text-gray-400">
                Amount :
                <span class="text-green-500 font-bold m-0 p-0">0.5</span>
              </p>
              <p class="text-lg p-0 m-0 text-gray-400">
                Buying Price :
                <span class="text-blue-500 font-bold m-0 p-0">5000 THB</span>
              </p>
              <button
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
              </button>
            </div>
          </div>
          <div v-if="showGraph" class="w-full text-white p-5">
            <dash-line />
          </div>
        </div>

        <div class="flex-1 bg-dark rounded-lg ml-3">
          <div class="card-body flex itmes-center justify-center space-x-5">
            <div class="my-auto">
              <img
                src="../assets/ada.png"
                width="50"
                height="40"
                class="mr-2 animate-bounce"
              />
            </div>

            <div>
              <p class="text-gray-300 p-0 m-0">ADA</p>
              <p class="text-lg p-0 m-0 text-gray-400">
                Amount :
                <span class="text-green-500 font-bold m-0 p-0">0.2</span>
              </p>
              <p class="text-lg p-0 m-0 text-gray-400">
                Buying Price :
                <span class="text-blue-500 font-bold m-0 p-0">20000 THB</span>
              </p>
              <button
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
                2%
              </button>
            </div>
          </div>
          <div v-if="showGraph" class="w-full text-white p-5">
            <dash-line />
          </div>
        </div>
      </div>

      
      <div class="ml-auto mt-20 text-center w-full flex justify-center">
        <div class="text-center mr-0 h-25 bg-dark rounded-lg shadow-lg py-5">
          <form action="" class="">
            <div class="form-group">
              <input
                class="form-control shadow"
                type="text"
                placeholder="name"
                v-model="coinName"
              />
            </div>
            <div class="form-group">
              <input
                class="mt-3 form-control shadow"
                type="text"
                placeholder="amount"
                v-model="amount"
              />
            </div>

            <div class="form-group">
              <input
                class="mt-3 form-control shadow"
                type="text"
                placeholder="price"
                v-model="price"
              />
            </div>
            <p class="mt-3 text-gray-200">ETH CURRENT PRICE : {{ ethPrice }}</p>
            <div v-for="(coin, i) in myCoin" :key="i">
              <p>
                Name : {{ coin.coinName }} | Amount :{{ coin.amount }} | Price :
                {{ coin.price }} | Profit :
                {{ (ethPrice - coin.price) * coin.amount }}
              </p>
            </div>
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
              "
            >
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashLine from "../components/graph/DashLine.vue";
export default {
  components: { DashLine },
  name: "App",
  data() {
    return {
      coinName: "",
      amount: "",
      price: "",
      myCoin: [],
      ethPrice: 0,
      openGraph: false,
    };
  },
  computed: {
    showGraph() {
      return this.openGraph;
    },
  },
  methods: {
    handleOpenGrpah() {
      if (this.openGraph === true) {
        this.openGraph = false;
      } else this.openGraph = true;
    },
    handleSubmit() {
      const newCoin = {
        coinName: this.coinName,
        amount: this.amount,
        price: this.price,
      };

      this.myCoin.push(newCoin);
    },
  },
  created: function () {
    const vm = this;
    this.connection = new WebSocket(
      "wss://stream.binance.com:9443/ws/etheur@trade"
    );
    this.connection.onmessage = function (event) {
      const convert = JSON.parse(event.data);
      vm.ethPrice = convert.p;
    };
  },
};
</script>
