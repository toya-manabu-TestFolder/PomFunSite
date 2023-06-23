<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "sconeMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".sconeText", {
      duration: 26.5,
      repeatDelay: 12.8,
      rotation: 60,
      repeat: -1,
      yoyo: false,
      ease: "linear",
      stagger: 0.8,
      motionPath: {
        path: "#svgPath_scone",
        align: "#svgPath_scone",
        curviness: 1,
      },
    });
    gsap.to(".sconeText2", {
      duration: 35,
      rotation: 60,
      repeat: -1,
      yoyo: false,
      ease: "linear",
      stagger: 0.8,
      motionPath: {
        path: "#svgPath_scone2",
        align: "#svgPath_scone2",
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="sconeText">が</span>
  <span class="sconeText">ん</span>
  <span class="sconeText">ば</span>
  <span class="sconeText">り</span>
  <span class="sconeText">屋</span>
  <span class="sconeText">さ</span>
  <span class="sconeText">ん</span>
  <span class="sconeText">で</span>
  <span class="sconeText2">し</span>
  <span class="sconeText2">っ</span>
  <span class="sconeText2">か</span>
  <span class="sconeText2">り</span>
  <span class="sconeText2">者</span>
  <span class="sconeText2">の</span>
  <span class="sconeText2 sconePointText2">ネ</span>
  <span class="sconeText2 sconePointText2">ズ</span>
  <span class="sconeText2 sconePointText2">ミ</span>
  <span class="sconeText2">く</span>
  <span class="sconeText2">ん</span>
  <span class="sconeText2">。</span>

  <svg id="svgBox_scone">
    <path id="svgPath_scone" d="M 290 930 Q -381 855 700 0 M 700 0"></path>
  </svg>
  <svg id="svgBox_scone2">
    <path
      id="svgPath_scone2"
      d="M 290 930 C 515 935 698 695 409 654 C -98 583 535 156 698 1"
    ></path>
  </svg>
</template>

<style scoped>
.sconeText {
  position: absolute;
  left: 255px;
  bottom: 45px;
  font-size: 25px;
}
.sconeText2 {
  position: absolute;
  left: 255px;
  bottom: 45px;
  font-size: 25px;
}
.sconePointText2 {
  font-size: 25px;
  color: #fff;
}

#svgBox_scone {
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: 930px;
  opacity: 0;
}
#svgBox_scone2 {
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: 930px;
  opacity: 0;
}
</style>
