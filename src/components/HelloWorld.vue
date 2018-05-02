<template>
  <div class="container">
    <div class="title">
      <span class="texts">Color Palette</span>
    </div>
    <div class="contents">
      <div class="items" v-for="item in colorList">
        <div class="cls" v-for="cls in item">
        <span>品牌色</span>
          <div class="background-panel" :style="{background: cls.HEX}"></div>
          <div>{{cls.name}}</div>
          <div class="HEX">HEX: {{cls.HEX}}</div>
          <div class="RGB">RGB: {{cls.RGB}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ColorPalette",
  data() {
    return {
      colorList: [
        [{ name: "test1", HEX: "#ff0000", RGB: "rbg(255,0,0)" }],
        [
          { name: "test2", HEX: "#00ff00", RGB: "rbg(0,255,0)" },
          { name: "test3", HEX: "#0000ff", RGB: "rbg(0,0,255)" }
        ],
        [{ name: "test3", HEX: "#0000ff", RGB: "rbg(0,0,255)" }]
      ]
    };
  },
  mounted() {
    console.log(this.colorList);
  }
};
</script>
<style lang="stylus">
.title {
  width: 120px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.contents {
  .items {
    padding: 20px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .cls {
      margin-right: 40px;
    }
  }

  .background-panel {
    position: relative;
    width: 100px;
    height: 130px;
    border-radius: 4px;
    margin: 8px 0;

    // box-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.1), 4px 4px 2px 0 rgba(50, 50, 50, 0.1), 8px 8px 4px 0 rgba(100, 100, 100, 0.1);
    &::after {
      content: '';
      display: block;
      height: 16px;
      background: gold;
      position: absolute;
      bottom: 1px;
      left: 0;
      right: 0;
      border-radius: 50%;
      box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
      z-index: -1;
    }
  }

  .HEX {
    margin: 6px 0;
  }
}
</style>
