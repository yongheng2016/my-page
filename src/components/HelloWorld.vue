<template>
  <div class="container">
    <div class="title">
      <span class="texts">Color Palette</span>
    </div>
    <div class="contents">
      <div class="items" v-for="item in colorList">
        <div class="cls" v-for="cls in item">
          <span class="cls-item">品牌色</span>
          <div class="wrapper">
            <div class="background-panel" :style="{background: cls.HEX}"></div>
            <div class="color-value">
              <div>{{cls.name}}</div>
              <div class="HEX">HEX: {{cls.HEX}}</div>
              <div class="RGB">RGB: {{cls.RGB}}</div>
            </div>
          </div>
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
          [{  info: '品牌色',
              name: "test1",
              HEX: "#774254",
              RGB: "rbg(255,0,0)"
            },
            {
              name: "test1",
              HEX: "#231241",
              RGB: "rbg(255,0,0)"
            },
            {
              name: "test1",
              HEX: "#526790",
              RGB: "rbg(255,0,0)"
            }
          ],
          [{
              name: "test2",
              HEX: "#387427",
              RGB: "rbg(0,255,0)"
            },
            {
              name: "test3",
              HEX: "#248990",
              RGB: "rbg(0,0,255)"
            },
            {
              name: "test3",
              HEX: "#547890",
              RGB: "rbg(0,0,255)"
            },
            {
              name: "test3",
              HEX: "#902380",
              RGB: "rbg(0,0,255)"
            },
            {
              name: "test3",
              HEX: "#451287",
              RGB: "rbg(0,0,255)"
            },
            {
              name: "test3",
              HEX: "#782392",
              RGB: "rbg(0,0,255)"
            },
            {
              name: "test3",
              HEX: "#907823",
              RGB: "rbg(0,0,255)"
            },
            {
              name: "test3",
              HEX: "#782310",
              RGB: "rbg(0,0,255)"
            }
          ],
          [{
              name: "test3",
              HEX: "#0000ff",
              RGB: "rbg(0,0,255)"
            },
            {
              name: "test1",
              HEX: "#341245",
              RGB: "rbg(255,0,0)"
            },
            {
              name: "test1",
              HEX: "#148535",
              RGB: "rbg(255,0,0)"
            },
            {
              name: "test1",
              HEX: "#526623",
              RGB: "rbg(255,0,0)"
            },
            {
              name: "test1",
              HEX: "#124895",
              RGB: "rbg(255,0,0)"
            }
          ]
        ]
      };
    },
    mounted() {
      console.log(this.colorList);
    }
  };
</script>

<style lang="stylus">
.container {
  // min-width: 900px;
  // max-width: 600px;
  margin: 0 auto;
  background: #e1e1e1;
}

.title {
  width: 140px;
  padding: 10px 0;
  margin: 20px 10px;
  border-bottom: 1px solid #f1f1f1;
  font-size: 20px;
}

.contents {
  .items {
    padding: 20px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    .wrapper {
      box-shadow: 0px 6px 18px 2px rgba(25,25,25,0.15);
      border-radius: 4px;
      margin-right: 40px;
      font-size: 14px;
      background #f0f0f0;
      .color-value {
        padding: 4px;
      }
    }
    .cls-item {
      font-size: 16px;
      font-weight: 600;
      color: #000;
    }
  }

  .background-panel {
    position: relative;
    height: 110px;
    border-radius: 4px 4px 0 0/4px 4px 0 0;
    margin: 8px 0;
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
