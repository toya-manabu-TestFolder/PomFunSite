<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "vanillaMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".vanillaText", {
      duration: 25,
      rotation: 90,
      repeat: -1,
      repeatDelay: 26,
      yoyo: false,
      ease: "linear",
      stagger: 0.7,
      motionPath: {
        path: [
          { x: -250, y: -50 },
          { x: -100, y: -500 },
          { x: -200, y: -1000 },
        ],
        curviness: 1,
      },
    });
    gsap.to(".vanillaText2", {
      duration: 25,
      delay: 29,
      rotation: 90,
      repeat: -1,
      repeatDelay: 26,
      yoyo: false,
      ease: "linear",
      stagger: 0.7,
      motionPath: {
        path: [
          { x: -250, y: -50 },
          { x: -100, y: -500 },
          { x: -200, y: -1000 },
        ],
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="vanillaText">ア</span>
  <span class="vanillaText">イ</span>
  <span class="vanillaText">ス</span>
  <span class="vanillaText">ク</span>
  <span class="vanillaText">リ</span>
  <span class="vanillaText">ー</span>
  <span class="vanillaText">ム</span>
  <span class="vanillaText">が</span>
  <span class="vanillaText">大</span>
  <span class="vanillaText">好</span>
  <span class="vanillaText">き</span>
  <span class="vanillaText">な</span>
  <span class="vanillaText vanillaPointText2">し</span>
  <span class="vanillaText vanillaPointText2">ろ</span>
  <span class="vanillaText vanillaPointText2">く</span>
  <span class="vanillaText vanillaPointText2">ま</span>
  <span class="vanillaText">く</span>
  <span class="vanillaText">ん</span>
  <span class="vanillaText">。</span>

  <span class="vanillaText2">ア</span>
  <span class="vanillaText2">イ</span>
  <span class="vanillaText2">ス</span>
  <span class="vanillaText2">ク</span>
  <span class="vanillaText2">リ</span>
  <span class="vanillaText2">ー</span>
  <span class="vanillaText2">ム</span>
  <span class="vanillaText2">が</span>
  <span class="vanillaText2">大</span>
  <span class="vanillaText2">好</span>
  <span class="vanillaText2">き</span>
  <span class="vanillaText2">な</span>
  <span class="vanillaText2 vanillaPointText2">し</span>
  <span class="vanillaText2 vanillaPointText2">ろ</span>
  <span class="vanillaText2 vanillaPointText2">く</span>
  <span class="vanillaText2 vanillaPointText2">ま</span>
  <span class="vanillaText2">く</span>
  <span class="vanillaText2">ん</span>
  <span class="vanillaText2">。</span>
</template>

<style lang="scss" scoped>
.vanillaText {
  position: absolute;
  right: 195px;
  bottom: 20px;
  font-size: 25px;
}
.vanillaText2 {
  position: absolute;
  right: 195px;
  bottom: 20px;
  font-size: 25px;
}
.vanillaPointText2 {
  font-size: 25px;
  color: #fff;
}
</style>
