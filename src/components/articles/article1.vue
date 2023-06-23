<script lang="ts">
import pomMotionVue from "../motionPlugins/pomMotion.vue";

export default {
  name: "motionPlagin",
  components: {
    pomMotionVue,
  },
  mounted() {},
};
</script>

<template>
  <div class="sectionTitle">
    <span>CHARACTERS</span>
  </div>
  <div class="pomMorionBox">
    <pomMotionVue />
  </div>
  <div class="pomHome">
    <div class="charaName">
      <span class="kanaName">ポムポムプリン</span>
      <span class="alphaName">POMPOMPURIN</span>
    </div>
    <img src="/Characters/pom.png" alt="ポムポムプリンの画像" />
  </div>
</template>
<style lang="scss" scoped>
$kanaNameSize: 14px;
$alphaNameSize: 40px;

.sectionTitle {
  display: flex;
  position: absolute;
  height: 100%;
  left: 250px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  span {
    color: #fff;
    font-family: Sigmar One;
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 50px;
    font-weight: normal;
    letter-spacing: -30px;
  }
}
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
.pomHome {
  position: absolute;
  bottom: 0%;
  left: 900px;
  width: 436px;
  height: 518px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 433px;
  }
}
.pomMorionBox {
  position: absolute;
  overflow: hidden;
  left: 260px;
  height: 100%;
  width: 680px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}
</style>
