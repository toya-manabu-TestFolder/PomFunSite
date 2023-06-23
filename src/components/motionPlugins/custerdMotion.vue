<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "custerdMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".custerdMotion", {
      duration: 10,
      repeat: -1,
      repeatDelay: 10,
      yoyo: false,
      ease: "linear",
      stagger: 0.4,
      motionPath: {
        path: [
          { x: -100, y: 50 },
          { x: -300, y: 0 },
          { x: -500, y: 150 },
        ],
        curviness: 1,
      },
    });

    gsap.to(".custerdMotion2", {
      duration: 10,
      delay: 13,
      repeat: -1,
      repeatDelay: 10,
      yoyo: false,
      ease: "linear",
      stagger: 0.4,
      motionPath: {
        path: [
          { x: -100, y: 50 },
          { x: -300, y: 0 },
          { x: -500, y: 150 },
        ],
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="custerdMotion">幸</span>
  <span class="custerdMotion">せ</span>
  <span class="custerdMotion">探</span>
  <span class="custerdMotion">し</span>
  <span class="custerdMotion">の</span>
  <span class="custerdMotion">旅</span>
  <span class="custerdMotion">が</span>
  <span class="custerdMotion">好</span>
  <span class="custerdMotion">き</span>
  <span class="custerdMotion">な</span>
  <span class="custerdMotion">小</span>
  <span class="custerdMotion">鳥</span>
  <span class="custerdMotion">さ</span>
  <span class="custerdMotion">ん</span>
  <span class="custerdMotion">。</span>

  <span class="custerdMotion2">幸</span>
  <span class="custerdMotion2">せ</span>
  <span class="custerdMotion2">探</span>
  <span class="custerdMotion2">し</span>
  <span class="custerdMotion2">の</span>
  <span class="custerdMotion2">旅</span>
  <span class="custerdMotion2">が</span>
  <span class="custerdMotion2">好</span>
  <span class="custerdMotion2">き</span>
  <span class="custerdMotion2">な</span>
  <span class="custerdMotion2">小</span>
  <span class="custerdMotion2">鳥</span>
  <span class="custerdMotion2">さ</span>
  <span class="custerdMotion2">ん</span>
  <span class="custerdMotion2">。</span>
</template>

<style scoped>
.custerdMotion {
  position: absolute;
  font-family: BIZ UDPGothic;
  right: -20px;
  color: #fbd13d;
}
.custerdMotion2 {
  position: absolute;
  font-family: BIZ UDPGothic;
  right: -20px;
  color: #fbd13d;
}
</style>
