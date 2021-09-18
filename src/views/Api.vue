<template>
  <div>
    <input type="text" placeholder="name" v-model="coinName" />
    <input type="text" placeholder="amount" v-model="amount" />
    <input type="text" placeholder="price" v-model="price" />
    <p>ETH CURRENT PRICE : {{ ethPrice }}</p>
    <div v-for="(coin, i) in myCoin" :key="i">
      <p>
        Name : {{ coin.coinName }} | Amount :{{ coin.amount }} | Price :
        {{ coin.price }} | Profit : {{ (ethPrice - coin.price) * coin.amount }}
      </p>
    </div>

    <button @click="handleSubmit">ADD</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      coinName: "",
      amount: "",
      price: "",
      myCoin: [],
      ethPrice: 0,
    };
  },
  methods: {
    handleSubmit() {
      const newCoin = {
        coinName: this.coinName,
        amount: this.amount,
        price: this.price,
      };

      this.myCoin.push(newCoin);
    },
  },
  created: function() {
    const vm = this;
    this.connection = new WebSocket(
      "wss://stream.binance.com:9443/ws/etheur@trade"
    );
    this.connection.onmessage = function(event) {
      const convert = JSON.parse(event.data);
      vm.ethPrice = convert.p;
    };
  },
};
</script>