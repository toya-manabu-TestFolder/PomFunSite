<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "muffinMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".muffinText", {
      duration: 40,
      repeat: -1,
      repeatDelay: 54,
      yoyo: false,
      ease: "linear",
      stagger: 0.7,
      motionPath: {
        path: "#svgPath_muffin",
        align: "#svgPath_muffin",
        curviness: 1,
      },
    });
    gsap.to(".muffinText2", {
      duration: 40,
      delay: 55,
      repeat: -1,
      repeatDelay: 54,
      yoyo: false,
      ease: "linear",
      stagger: 0.7,
      motionPath: {
        path: "#svgPath_muffin2",
        align: "#svgPath_muffin2",
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="muffinText">ち</span>
  <span class="muffinText">ゃ</span>
  <span class="muffinText">っ</span>
  <span class="muffinText">か</span>
  <span class="muffinText">り</span>
  <span class="muffinText">も</span>
  <span class="muffinText">の</span>
  <span class="muffinText">で</span>
  <span class="muffinText">食</span>
  <span class="muffinText">い</span>
  <span class="muffinText">し</span>
  <span class="muffinText">ん</span>
  <span class="muffinText">坊</span>
  <span class="muffinText">の</span>
  <span class="muffinText muffinPointText2">ハ</span>
  <span class="muffinText muffinPointText2">ム</span>
  <span class="muffinText muffinPointText2">ス</span>
  <span class="muffinText muffinPointText2">タ</span>
  <span class="muffinText muffinPointText2">ー</span>
  <span class="muffinText">く</span>
  <span class="muffinText">ん</span>
  <span class="muffinText">。</span>

  <span class="muffinText2">ち</span>
  <span class="muffinText2">ゃ</span>
  <span class="muffinText2">っ</span>
  <span class="muffinText2">か</span>
  <span class="muffinText2">り</span>
  <span class="muffinText2">も</span>
  <span class="muffinText2">の</span>
  <span class="muffinText2">で</span>
  <span class="muffinText2">食</span>
  <span class="muffinText2">い</span>
  <span class="muffinText2">し</span>
  <span class="muffinText2">ん</span>
  <span class="muffinText2">坊</span>
  <span class="muffinText2">の</span>
  <span class="muffinText2 muffinPointText2">ハ</span>
  <span class="muffinText2 muffinPointText2">ム</span>
  <span class="muffinText2 muffinPointText2">ス</span>
  <span class="muffinText2 muffinPointText2">タ</span>
  <span class="muffinText2 muffinPointText2">ー</span>
  <span class="muffinText2">く</span>
  <span class="muffinText2">ん</span>
  <span class="muffinText2">。</span>

  <svg id="svgBox_muffin">
    <path
      id="svgPath_muffin"
      d="M 870 900 Q 241 751 412 394 A 1 1 0 0 1 753 624 Q 333 986 39 5"
    ></path>
  </svg>
  <svg id="svgBox_muffin2">
    <path
      id="svgPath_muffin2"
      d=" M 39 0 Q 333 980 750 624 A 1 1 0 0 0 412 393 Q 242 748 870 900"
    ></path>
  </svg>
</template>

<style scoped>
.muffinText {
  position: absolute;
  right: -50px;
  bottom: 100px;
  font-size: 25px;
}
.muffinText2 {
  position: absolute;
  right: -50px;
  bottom: 100px;
  font-size: 25px;
}
.muffinPointText2 {
  font-size: 25px;
  color: #fff;
}
#svgBox_muffin {
  position: absolute;
  bottom: 90px;
  width: 100%;
  height: 900px;
  opacity: 0;
}
#svgBox_muffin2 {
  position: absolute;
  bottom: 90px;
  width: 100%;
  height: 900px;
  opacity: 0;
}
</style>
