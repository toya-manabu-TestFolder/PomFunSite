<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "bagelMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".bagelText", {
      duration: 25,
      rotation: 360,
      repeat: -1,
      repeatDelay: 19,
      yoyo: false,
      ease: "linear",
      stagger: 0.5,
      motionPath: {
        path: "#circlePath",
        align: "#circlePath",
        curviness: 1,
      },
    });

    gsap.to(".bagelText2", {
      duration: 25,
      delay: 24,
      rotation: 360,
      repeat: -1,
      repeatDelay: 19,
      yoyo: false,
      ease: "linear",
      stagger: 0.5,
      motionPath: {
        path: "#circlePath",
        align: "#circlePath",
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="bagelText">甘</span>
  <span class="bagelText">〜</span>
  <span class="bagelText">い</span>
  <span class="bagelText">も</span>
  <span class="bagelText">の</span>
  <span class="bagelText">が</span>
  <span class="bagelText">大</span>
  <span class="bagelText">好</span>
  <span class="bagelText">き</span>
  <span class="bagelText">、</span>
  <span class="bagelText">は</span>
  <span class="bagelText">り</span>
  <span class="bagelText">き</span>
  <span class="bagelText">り</span>
  <span class="bagelText">屋</span>
  <span class="bagelText">の</span>
  <span class="bagelText bagelPointText2">リ</span>
  <span class="bagelText bagelPointText2">ス</span>
  <span class="bagelText">く</span>
  <span class="bagelText">ん</span>
  <span class="bagelText">。</span>

  <span class="bagelText2">甘</span>
  <span class="bagelText2">〜</span>
  <span class="bagelText2">い</span>
  <span class="bagelText2">も</span>
  <span class="bagelText2">の</span>
  <span class="bagelText2">が</span>
  <span class="bagelText2">大</span>
  <span class="bagelText2">好</span>
  <span class="bagelText2">き</span>
  <span class="bagelText2">、</span>
  <span class="bagelText2">は</span>
  <span class="bagelText2">り</span>
  <span class="bagelText2">き</span>
  <span class="bagelText2">り</span>
  <span class="bagelText2">屋</span>
  <span class="bagelText2">の</span>
  <span class="bagelText2 bagelPointText2">リ</span>
  <span class="bagelText2 bagelPointText2">ス</span>
  <span class="bagelText2">く</span>
  <span class="bagelText2">ん</span>
  <span class="bagelText2">。</span>

  <svg id="circleBox">
    <path
      d="M 100,400 A 300,300 0 1,1 700,400 A 300,300 0 1,1 100,400 z"
      id="circlePath"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>
.bagelText {
  position: absolute;
  left: 450px;
  bottom: 60px;
  font-size: 25px;
}
.bagelText2 {
  position: absolute;
  left: 450px;
  bottom: 60px;
  font-size: 25px;
}
.bagelPointText2 {
  font-size: 25px;
  color: #fff;
}

#circleBox {
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 700px;
  height: 700px;
  transform: rotate(-90deg);
  opacity: 0;
}
</style>
