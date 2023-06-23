<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "whipMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".whipText", {
      duration: 35,
      rotation: -90,
      repeat: -1,
      repeatDelay: 35,
      yoyo: false,
      ease: "linear",
      stagger: 0.8,
      motionPath: {
        path: "#svgPath_whip",
        align: "#svgPath_whip",
        curviness: 1,
      },
    });
    gsap.to(".whipText2", {
      duration: 35,
      delay: 36,
      rotation: -90,
      repeat: -1,
      repeatDelay: 35,
      yoyo: false,
      ease: "linear",
      stagger: 0.8,
      motionPath: {
        path: "#svgPath_whip",
        align: "#svgPath_whip",
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="whipText">甘</span>
  <span class="whipText">え</span>
  <span class="whipText">ん</span>
  <span class="whipText">坊</span>
  <span class="whipText">の</span>
  <span class="whipText whipPointText2">ペ</span>
  <span class="whipText whipPointText2">ン</span>
  <span class="whipText whipPointText2">ギ</span>
  <span class="whipText whipPointText2">ン</span>
  <span class="whipText">く</span>
  <span class="whipText">ん</span>
  <span class="whipText">。</span>

  <span class="whipText2">甘</span>
  <span class="whipText2">え</span>
  <span class="whipText2">ん</span>
  <span class="whipText2">坊</span>
  <span class="whipText2">の</span>
  <span class="whipText2 whipPointText2">ペ</span>
  <span class="whipText2 whipPointText2">ン</span>
  <span class="whipText2 whipPointText2">ギ</span>
  <span class="whipText2 whipPointText2">ン</span>
  <span class="whipText2">く</span>
  <span class="whipText2">ん</span>
  <span class="whipText2">。</span>

  <svg id="svgBox_whip">
    <path
      id="svgPath_whip"
      d="M 679 0 Q 617 639 161 596 A 1 1 0 0 1 228 271 Q 519 374 262 940"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>
.whipText {
  position: absolute;
  left: 255px;
  bottom: 25px;
  font-size: 25px;
}
.whipText2 {
  position: absolute;
  left: 255px;
  bottom: 25px;
  font-size: 25px;
}
.whipPointText2 {
  color: #fff;
}
#svgBox_whip {
  position: absolute;
  bottom: 40px;
  width: 100%;
  height: 937px;
  opacity: 0;
}
</style>
