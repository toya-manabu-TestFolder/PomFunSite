<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "coconutMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".coconutText", {
      duration: 13,
      rotation: -90,
      repeat: -1,
      repeatDelay: 13,
      yoyo: false,
      ease: "linear",
      stagger: 0.5,
      motionPath: {
        path: "#circlePath_coconut",
        align: "#circlePath_coconut",
        curviness: 1,
      },
    });
    gsap.to(".coconutText2", {
      duration: 13,
      delay: 16,
      rotation: -90,
      repeat: -1,
      repeatDelay: 13,
      yoyo: false,
      ease: "linear",
      stagger: 0.5,
      motionPath: {
        path: "#circlePath_coconut",
        align: "#circlePath_coconut",
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="coconutText">明</span>
  <span class="coconutText">る</span>
  <span class="coconutText">く</span>
  <span class="coconutText">て</span>
  <span class="coconutText">陽</span>
  <span class="coconutText">気</span>
  <span class="coconutText">な</span>
  <span class="coconutText">男</span>
  <span class="coconutText">の</span>
  <span class="coconutText">コ</span>
  <span class="coconutText">の</span>
  <span class="coconutText coconutPointText2">お</span>
  <span class="coconutText coconutPointText2">サ</span>
  <span class="coconutText coconutPointText2">ル</span>
  <span class="coconutText">さ</span>
  <span class="coconutText">ん</span>
  <span class="coconutText">。</span>

  <span class="coconutText2">明</span>
  <span class="coconutText2">る</span>
  <span class="coconutText2">く</span>
  <span class="coconutText2">て</span>
  <span class="coconutText2">陽</span>
  <span class="coconutText2">気</span>
  <span class="coconutText2">な</span>
  <span class="coconutText2">男</span>
  <span class="coconutText2">の</span>
  <span class="coconutText2">コ</span>
  <span class="coconutText2">の</span>
  <span class="coconutText2 coconutPointText2">お</span>
  <span class="coconutText2 coconutPointText2">サ</span>
  <span class="coconutText2 coconutPointText2">ル</span>
  <span class="coconutText2">さ</span>
  <span class="coconutText2">ん</span>
  <span class="coconutText2">。</span>

  <svg id="circlePathBox_coconut">
    <path id="circlePath_coconut" d="M 680 340 A 1 1 0 0 0 0 340"></path>
  </svg>

  <div class="seecletBox_coconut"></div>
  <div class="seecletBox_coconut2"></div>
</template>

<style lang="scss" scoped>
.coconutText {
  position: absolute;
  left: 698px;
  bottom: 60px;
  transform: rotate(90deg);
  font-size: 25px;
}
.coconutText2 {
  position: absolute;
  left: 698px;
  bottom: 60px;
  transform: rotate(90deg);
  font-size: 25px;
}
.coconutPointText2 {
  font-size: 25px;
  color: #fff;
}
#circlePathBox_coconut {
  position: absolute;
  bottom: 150px;
  left: 50px;
  width: 680px;
  height: 290px;
  opacity: 0;
}
.seecletBox_coconut {
  position: absolute;
  left: 19px;
  bottom: 53px;
  width: 50px;
  height: 50px;
  background-color: #fbd13d;
}
.seecletBox_coconut2 {
  position: absolute;
  left: 698px;
  bottom: 53px;
  width: 50px;
  height: 50px;
  background-color: #fbd13d;
}
</style>
