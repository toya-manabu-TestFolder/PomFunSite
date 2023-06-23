<script lang="ts">
import whipMotionVue from "../motionPlugins/whipMotion.vue";
import tartoMotionVue from "../motionPlugins/tartoMotion.vue";

export default {
  name: "motionPlagin",
  components: {
    tartoMotionVue,
    whipMotionVue,
  },
  mounted() {},
};
</script>

<template>
  <!-- タルト -->
  <div class="tartoMotionBox">
    <tartoMotionVue />
  </div>
  <div class="tartoHome">
    <div class="charaName">
      <span class="kanaName">タルト</span>
      <span class="alphaName">TARTO</span>
    </div>
    <img src="/Characters/tarto.png" alt="タルトの画像" />
  </div>

  <!-- ホイップ -->
  <div class="whipMotionBox">
    <whipMotionVue />
  </div>
  <div class="whipHome">
    <div class="charaName">
      <span class="kanaName">ホイップ</span>
      <span class="alphaName">WHIP</span>
    </div>
    <img src="/Characters/whip.png" alt="ホイップの画像" />
  </div>
</template>
<style lang="scss" scoped>
$kanaNameSize: 14px;
$alphaNameSize: 40px;

.charaName {
  position: relative;
  height: 60px;
  width: 436px;
  font-weight: normal;
  margin-bottom: 25px;
  .kanaName {
    position: absolute;
    top: 0;
    height: 20px;
    font-family: BIZ UDPGothic;
    font-size: 14px;
    font-weight: bold;
  }
  .alphaName {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    height: 40px;
    font-family: Sigmar One;
    color: #fff;
    font-size: 40px;
  }
}
.tartoHome {
  position: absolute;
  bottom: 0%;
  left: 500px;
  width: 170px;
  height: 245px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 158px;
  }
}
.tartoMotionBox {
  position: absolute;
  overflow: hidden;
  left: 35px;
  height: 100%;
  width: 660px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}

.whipHome {
  position: absolute;
  bottom: 0%;
  left: 1200px;
  width: 140px;
  height: 252px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 168px;
  }
}
.whipMotionBox {
  position: absolute;
  overflow: hidden;
  left: 1000px;
  height: 100%;
  width: 800px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}
</style>
