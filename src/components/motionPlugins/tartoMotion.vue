<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "tartoMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.to(".tartoText", {
      duration: 25,
      rotation: -60,
      repeat: -1,
      repeatDelay: 17,
      yoyo: false,
      ease: "linear",
      stagger: 1,
      motionPath: {
        path: "#svgPath_tarto",
        align: "#svgPath_tarto",
        curviness: 1,
      },
    });
    gsap.to(".tartoText2", {
      duration: 25,
      delay: 23,
      rotation: -60,
      repeat: -1,
      repeatDelay: 17,
      yoyo: false,
      ease: "linear",
      stagger: 1,
      motionPath: {
        path: "#svgPath_tarto",
        align: "#svgPath_tarto",
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="tartoText">冒</span>
  <span class="tartoText">険</span>
  <span class="tartoText">好</span>
  <span class="tartoText">き</span>
  <span class="tartoText">な</span>
  <span class="tartoText tartoPointText2">ロ</span>
  <span class="tartoText tartoPointText2">ッ</span>
  <span class="tartoText tartoPointText2">プ</span>
  <span class="tartoText tartoPointText2">イ</span>
  <span class="tartoText tartoPointText2">ヤ</span>
  <span class="tartoText tartoPointText2">ー</span>
  <span class="tartoText">く</span>
  <span class="tartoText">ん</span>
  <span class="tartoText">。</span>

  <span class="tartoText2">冒</span>
  <span class="tartoText2">険</span>
  <span class="tartoText2">好</span>
  <span class="tartoText2">き</span>
  <span class="tartoText2">な</span>
  <span class="tartoText2 tartoPointText2">ロ</span>
  <span class="tartoText2 tartoPointText2">ッ</span>
  <span class="tartoText2 tartoPointText2">プ</span>
  <span class="tartoText2 tartoPointText2">イ</span>
  <span class="tartoText2 tartoPointText2">ヤ</span>
  <span class="tartoText2 tartoPointText2">ー</span>
  <span class="tartoText2">く</span>
  <span class="tartoText2">ん</span>
  <span class="tartoText2">。</span>

  <svg id="svgBox_tarto">
    <path id="svgPath_tarto" d="M 470 500  C -497 502 380 -442 470 500"></path>
  </svg>

  <div class="seecletBox_tarto"></div>
</template>

<style lang="scss" scoped>
.tartoText {
  position: absolute;
  right: 150px;
  bottom: 210px;
  font-size: 25px;
}
.tartoText2 {
  position: absolute;
  right: 150px;
  bottom: 210px;
  font-size: 25px;
}
.tartoPointText2 {
  font-size: 25px;
  color: #fff;
}

#svgBox_tarto {
  position: absolute;
  bottom: 190px;
  width: 100%;
  height: 535px;
  opacity: 0;
}

.seecletBox_tarto {
  position: absolute;
  left: 460px;
  bottom: 195px;
  width: 50px;
  height: 50px;
  background-color: #fbd13d;
}
</style>
