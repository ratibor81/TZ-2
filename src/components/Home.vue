<template>
  <div class="home-page">
    <h2>CryptoCompare.com</h2>
    <table class="main-table">
      <thead>
      <tr>
        <th>#</th>
        <th>COIN</th>
        <th>PRICE</th>
        <th>SUPPLY</th>
      </tr>
      </thead>
      <tbody>

      <template v-for="(coin, idx) in sortCoins">
        <coin-component
          :coin="coin"
          :idx="idx"
          :key="coin.CoinInfo.Id"/>
      </template>

      </tbody>
    </table>
  </div>
</template>

<script>
  //api
  import api from '../api';

  //components
  import Coin from './CoinComponent';

  export default {
    name: 'home-page',
    components: {
      'coin-component': Coin,
    },
    data(){
      return {
        coins: [],
      }
    },
    computed: {
      sortCoins(){
        return this.coins.sort((a, b) => {
          return b.RAW.USD.PRICE - a.RAW.USD.PRICE;
        });
      }
    },

    mounted(){
      this.getCoins();

      setInterval(() => {
        this.getCoins();
      }, 300000);
    },

    methods: {
      async getCoins(){
        try{
          let res = await api.getData();

          this.coins = res.data.Data;

        }catch(err){
          console.log(err);
        }
      }
    }
  }
</script>

<style lang="less">
  @import './styles/home';
</style>
