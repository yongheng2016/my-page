<template>
  <div id="app">
    <div class="zelda">
      <span class="letter-B">b</span> lo
      <span class="letter-g">g</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body {
    margin: 0;
    background: #e1e1e1;
  /* background: linear-gradient(90deg,#0f141c 0,#172b49 100%); */
  background: #fdfff3;
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  
  .zelda {
    position: absolute;
    right: 100px;
    top: 0;
    color: #c72d12;
    font-size: 100px;
    letter-spacing: -6px;
    text-shadow: 0 1px 0 #c72d12, 0 2px 0 #800909, 0 3px 0 #841602, 1px 3px 0 #7d0909, 0 5px 0 #580d00, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgb(72, 0, 0), 0 10px 10px rgba(0, 0, 0, .2), 20px 10px 20px rgba(0, 0, 0, .15);
    /* padding: 10px 20px; */
  }
  
  .letter-B {
    margin-right: -20px;
  }
  
  .letter-g {
    display: inline-block;
    letter-spacing: -100px;
    margin-left: -14px;
    transform: rotateZ(2deg) skewX(-10deg);
  }
</style>
