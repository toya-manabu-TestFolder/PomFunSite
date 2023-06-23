<script lang="ts">
import muffinMotionVue from "../motionPlugins/muffinMotion.vue";
import bagelMotionVue from "../motionPlugins/bagelMotion.vue";
import sconeMotionVue from "../motionPlugins/sconeMotion.vue";

export default {
  name: "motionPlagin",
  components: {
    muffinMotionVue,
    bagelMotionVue,
    sconeMotionVue,
  },
  mounted() {},
};
</script>

<template>
  <!-- マフィン -->
  <div class="muffinMorionBox">
    <muffinMotionVue />
  </div>
  <div class="muffinHome">
    <div class="charaName">
      <span class="kanaName">マフィン</span>
      <span class="alphaName">MUFFIN</span>
    </div>
    <img src="/Characters/muffin.png" alt="マフィン君の画像" />
  </div>

  <div class="bagelMotionBox">
    <bagelMotionVue />
  </div>
  <div class="bagelHome">
    <div class="charaName">
      <span class="kanaName">ベーグル</span>
      <span class="alphaName">BAGEL</span>
    </div>
    <img src="/Characters/bagel.png" alt="ベーグルの画像" />
  </div>

  <!-- スコーン -->
  <div class="sconeMotionBox">
    <sconeMotionVue />
  </div>
  <div class="sconeHome">
    <div class="charaName">
      <span class="kanaName">スコーン</span>
      <span class="alphaName">SCONE</span>
    </div>
    <img src="/Characters/scone.png" alt="スコーンの画像" />
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
.muffinHome {
  position: absolute;
  bottom: 0%;
  left: 0px;
  width: 190px;
  height: 262px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 182px;
  }
}
.muffinMorionBox {
  position: absolute;
  overflow: hidden;
  left: -750px;
  height: 100%;
  width: 870px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}

.bagelHome {
  position: absolute;
  bottom: 0%;
  left: 700px;
  width: 195px;
  height: 243px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 158px;
  }
}
.bagelMotionBox {
  position: absolute;
  overflow: hidden;
  left: 370px;
  height: 100%;
  width: 750px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}

.sconeHome {
  position: absolute;
  bottom: 0%;
  left: 1400px;
  width: 178px;
  height: 243px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 155px;
  }
}
.sconeMotionBox {
  position: absolute;
  left: 1150px;
  height: 100%;
  width: 795px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}
</style>
