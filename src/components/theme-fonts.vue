<template>
  <div class="container">
    <div class="title">
        <div>文字</div>
        <div class="middle">
            <span>的</span>
            <div class="letter-common">
                <div>The ——</div>
                <div class="letter-center">charm of</div>
                <div>of words</div>
            </div>
        </div>
        <div>魅力</div>
    </div>
    <div class="title">
          <div>文字</div>
          <div class="middle">
              <span>的</span>
              <div class="letter-common letters">
                  <div>The ——</div>
                  <div class="letter-center">charm of</div>
                  <div>of words</div>
              </div>
          </div>
          <div>魅力</div>
    </div>
    <div class="rotate-letters">
        <!-- <div class="contents">Typefaces</div> -->
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.container {
    margin: 50px 100px;
}

.title {
    font-size: 50px;
    font-weight: 600;
    text-shadow: 6px 4px 2px #ccc, -2px 0px 2px #ccc;

    .middle {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: left;

        .letter-common {
            align-self: stretch;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: 700;

            &.letters {
                transform: rotateZ(90deg);
            }

            .letter-center {
                margin: 3px 0;
            }
        }
    }
}

.rotate-letters {
    .contents {
        // transform-origin 50% 0
        font-size: 120px;
        // text-shadow: 4px 4px 2px #ccc, 6px 6px 2px #cacaca, 8px 8px 2px #c8c8c8, 10px 10px 2px #c6c6c6, 12px 12px 2px #c4c4c4, 14px 14px 2px #ccc, 16px 16px 2px #c2c2c2, 18px 18px 2px #ccc
        color: #cdcfcf;
        // transform rotateZ(90deg)
    }
}
</style>

