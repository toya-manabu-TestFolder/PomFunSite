<script lang="ts">
import powderMotionVue from "../motionPlugins/powderMotion.vue";
import coconutMotionVue from "../motionPlugins/coconutMotion.vue";
import vanillaMotionVue from "../motionPlugins/vanillaMotion.vue";

export default {
  name: "motionPlagin",
  components: {
    powderMotionVue,
    coconutMotionVue,
    vanillaMotionVue,
  },
  mounted() {},
};
</script>

<template>
  <!-- パウダー -->
  <div class="powderMotionBox">
    <powderMotionVue />
  </div>
  <div class="powderHome">
    <div class="charaName">
      <span class="kanaName">パウダー</span>
      <span class="alphaName">POWDER</span>
    </div>
    <img src="/Characters/powder.png" alt="スコーンの画像" />
  </div>

  <!-- ココナッツ -->
  <div class="coconutMotionBox">
    <coconutMotionVue />
  </div>
  <div class="coconutHome">
    <div class="charaName">
      <span class="kanaName">ココナッツ</span>
      <span class="alphaName">COCONUT</span>
    </div>
    <img src="/Characters/coconut.png" alt="ココナッツの画像" />
  </div>
  <!-- バニラ -->
  <div class="vanillaMotionBox">
    <vanillaMotionVue />
  </div>
  <div class="vanillaHome">
    <div class="charaName">
      <span class="kanaName">バニラ</span>
      <span class="alphaName">VANILLA</span>
    </div>
    <img src="/Characters/vanilla.png" alt="バニラの画像" />
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
.powderHome {
  position: absolute;
  bottom: 0%;
  left: 200px;
  width: 215px;
  height: 324px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 239px;
  }
}
.powderMotionBox {
  position: absolute;
  overflow: hidden;
  left: -380px;
  height: 100%;
  width: 820px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}

.coconutHome {
  position: absolute;
  bottom: 0%;
  left: 900px;
  width: 225px;
  height: 290px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 207px;
  }
}
.coconutMotionBox {
  position: absolute;
  overflow: hidden;
  left: 600px;
  height: 100%;
  width: 800px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}
.vanillaHome {
  position: absolute;
  bottom: 0%;
  left: 1650px;
  width: 220px;
  height: 315px;
  z-index: 1;
  img {
    max-width: 100%;
    max-height: 100%;
    height: 233px;
  }
}
.vanillaMotionBox {
  position: absolute;
  overflow: hidden;
  left: 1350px;
  height: 100%;
  width: 600px;
  color: #7e262b;
  font-size: 16px;
  font-family: BIZ UDPGothic;
  line-height: 16px;
  letter-spacing: 0.5em;
}
</style>
