<template>
  <tr>
    <td class="place-count">{{idx + 1}}</td>
    <td>
      <div class="coin-name">
        <img
          class="coin-image"
          :src="mainURL + info.ImageUrl"
          alt="coinImg">
        <div class="name-block">
          <p class="full-name">{{info.FullName}}</p>
          <p class="name">{{info.Name}}</p>
        </div>
      </div>
    </td>
    <td>{{display.PRICE}}</td>
    <td>{{raw.SUPPLY}}</td>
  </tr>
</template>

<script>
  export default {
    name: 'coin-component',
    props: {
      coin: Object,
      idx: Number,
    },
    computed: {
      info(){
        return this.coin.CoinInfo;
      },
      display(){
        return this.coin.DISPLAY.USD;
      },
      raw(){
        return this.coin.RAW.USD;
      }
    },
    data(){
      return {
        mainURL: 'https://www.cryptocompare.com',
      }
    }
  }
</script>

<style lang="less">
  @import './styles/coin-component';
</style>
