<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "powderMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".powderText", {
      duration: 30,
      repeat: -1,
      repeatDelay: 28,
      yoyo: false,
      ease: "linear",
      stagger: 0.7,
      motionPath: {
        path: "#circlePath_powder",
        align: "#circlePath_powder",
        curviness: 1,
      },
    });
    gsap.to(".powderText2", {
      duration: 30,
      delay: 30,
      repeat: -1,
      repeatDelay: 28,
      yoyo: false,
      ease: "linear",
      stagger: 0.7,
      motionPath: {
        path: "#circlePath_powder",
        align: "#circlePath_powder",
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="powderText">お</span>
  <span class="powderText">人</span>
  <span class="powderText">好</span>
  <span class="powderText">し</span>
  <span class="powderText">で</span>
  <span class="powderText">、</span>
  <span class="powderText">ち</span>
  <span class="powderText">ょ</span>
  <span class="powderText">っ</span>
  <span class="powderText">ぴ</span>
  <span class="powderText">り</span>
  <span class="powderText">人</span>
  <span class="powderText">見</span>
  <span class="powderText">知</span>
  <span class="powderText">り</span>
  <span class="powderText">な</span>
  <span class="powderText powderPointText2">ウ</span>
  <span class="powderText powderPointText2">サ</span>
  <span class="powderText powderPointText2">ギ</span>
  <span class="powderText">の</span>
  <span class="powderText">女</span>
  <span class="powderText">の</span>
  <span class="powderText">コ</span>
  <span class="powderText">。</span>

  <span class="powderText2">お</span>
  <span class="powderText2">人</span>
  <span class="powderText2">好</span>
  <span class="powderText2">し</span>
  <span class="powderText2">で</span>
  <span class="powderText2">、</span>
  <span class="powderText2">ち</span>
  <span class="powderText2">ょ</span>
  <span class="powderText2">っ</span>
  <span class="powderText2">ぴ</span>
  <span class="powderText2">り</span>
  <span class="powderText2">人</span>
  <span class="powderText2">見</span>
  <span class="powderText2">知</span>
  <span class="powderText2">り</span>
  <span class="powderText2">な</span>
  <span class="powderText2 powderPointText2">ウ</span>
  <span class="powderText2 powderPointText2">サ</span>
  <span class="powderText2 powderPointText2">ギ</span>
  <span class="powderText2">の</span>
  <span class="powderText2">女</span>
  <span class="powderText2">の</span>
  <span class="powderText2">コ</span>
  <span class="powderText2">。</span>

  <svg id="circlePathBox_powder">
    <path
      d="M 625 660 Q 248 547 186 323 A 1 1 0 0 1 628 211 A 1 1 0 0 1 287 286 A 1 1 0 0 1 539 243"
      id="circlePath_powder"
    ></path>
  </svg>
  <div class="seecletBox_powder"></div>
</template>

<style lang="scss" scoped>
.powderText {
  position: absolute;
  bottom: 40px;
  right: 160px;
  font-size: 25px;
}
.powderText2 {
  position: absolute;
  bottom: 40px;
  right: 160px;
  font-size: 25px;
}
.powderPointText2 {
  font-size: 25px;
  color: #fff;
}
#circlePathBox_powder {
  position: absolute;
  bottom: 600px;
  opacity: 0;
}
.seecletBox_powder {
  position: absolute;
  bottom: 470px;
  right: 237px;
  width: 50px;
  height: 50px;

  background-color: #fbd13d;
}
</style>
