<template>
  <div id="app">
    <home-page/>
  </div>
</template>

<script>
  import Home from './components/Home';

  export default {
    name: 'App',
    components: {
      'home-page': Home,
    }
  };
</script>

<style lang="less">
  @import './components/styles/main';
</style>
