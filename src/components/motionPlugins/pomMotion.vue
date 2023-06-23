<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "pomMotion",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);

    gsap.to(".pomText", {
      duration: 40,
      rotation: 70,
      repeat: -1,
      repeatDelay: 51,
      yoyo: false,
      ease: "linear",
      stagger: 0.8,
      motionPath: {
        path: [
          { x: -500, y: -200 },
          { x: -200, y: -400 },
          { x: -1500, y: -900 },
        ],
        curviness: 1,
      },
    });
    gsap.to(".pomText2", {
      duration: 40,
      delay: 55,
      rotation: 70,
      repeat: -1,
      repeatDelay: 51,
      yoyo: false,
      ease: "linear",
      stagger: 0.8,
      motionPath: {
        path: [
          { x: -500, y: -200 },
          { x: -200, y: -400 },
          { x: -1500, y: -900 },
        ],
        curviness: 1,
      },
    });
  },
};
</script>

<template>
  <span class="pomText pomPointText2">ゴ</span>
  <span class="pomText pomPointText2">ー</span>
  <span class="pomText pomPointText2">ル</span>
  <span class="pomText pomPointText2">デ</span>
  <span class="pomText pomPointText2">ン</span>
  <span class="pomText pomPointText2">レ</span>
  <span class="pomText pomPointText2">ト</span>
  <span class="pomText pomPointText2">リ</span>
  <span class="pomText pomPointText2">バ</span>
  <span class="pomText pomPointText2">ー</span>
  <span class="pomText">の</span>
  <span class="pomText">男</span>
  <span class="pomText">の</span>
  <span class="pomText">コ</span>
  <span class="pomText">。</span>
  <span class="pomText">の</span>
  <span class="pomText">ん</span>
  <span class="pomText">び</span>
  <span class="pomText">り</span>
  <span class="pomText">屋</span>
  <span class="pomText">で</span>
  <span class="pomText">、</span>
  <span class="pomText">好</span>
  <span class="pomText">き</span>
  <span class="pomText">な</span>
  <span class="pomText">言</span>
  <span class="pomText">葉</span>
  <span class="pomText">は</span>
  <span class="pomText">「</span>
  <span class="pomText">お</span>
  <span class="pomText">で</span>
  <span class="pomText">か</span>
  <span class="pomText">け</span>
  <span class="pomText">」</span>
  <span class="pomText">、</span>
  <span class="pomText">嫌</span>
  <span class="pomText">い</span>
  <span class="pomText">な</span>
  <span class="pomText">言</span>
  <span class="pomText">葉</span>
  <span class="pomText">は</span>
  <span class="pomText">「</span>
  <span class="pomText">お</span>
  <span class="pomText">る</span>
  <span class="pomText">す</span>
  <span class="pomText">ば</span>
  <span class="pomText">ん</span>
  <span class="pomText">」</span>
  <span class="pomText">。</span>

  <span class="pomText2 pomPointText2">ゴ</span>
  <span class="pomText2 pomPointText2">ー</span>
  <span class="pomText2 pomPointText2">ル</span>
  <span class="pomText2 pomPointText2">デ</span>
  <span class="pomText2 pomPointText2">ン</span>
  <span class="pomText2 pomPointText2">レ</span>
  <span class="pomText2 pomPointText2">ト</span>
  <span class="pomText2 pomPointText2">リ</span>
  <span class="pomText2 pomPointText2">バ</span>
  <span class="pomText2 pomPointText2">ー</span>
  <span class="pomText2">の</span>
  <span class="pomText2">男</span>
  <span class="pomText2">の</span>
  <span class="pomText2">コ</span>
  <span class="pomText2">。</span>
  <span class="pomText2">の</span>
  <span class="pomText2">ん</span>
  <span class="pomText2">び</span>
  <span class="pomText2">り</span>
  <span class="pomText2">屋</span>
  <span class="pomText2">で</span>
  <span class="pomText2">、</span>
  <span class="pomText2">好</span>
  <span class="pomText2">き</span>
  <span class="pomText2">な</span>
  <span class="pomText2">言</span>
  <span class="pomText2">葉</span>
  <span class="pomText2">は</span>
  <span class="pomText2">「</span>
  <span class="pomText2">お</span>
  <span class="pomText2">で</span>
  <span class="pomText2">か</span>
  <span class="pomText2">け</span>
  <span class="pomText2">」</span>
  <span class="pomText2">、</span>
  <span class="pomText2">嫌</span>
  <span class="pomText2">い</span>
  <span class="pomText2">な</span>
  <span class="pomText2">言</span>
  <span class="pomText2">葉</span>
  <span class="pomText2">は</span>
  <span class="pomText2">「</span>
  <span class="pomText2">お</span>
  <span class="pomText2">る</span>
  <span class="pomText2">す</span>
  <span class="pomText2">ば</span>
  <span class="pomText2">ん</span>
  <span class="pomText2">」</span>
  <span class="pomText2">。</span>
</template>

<style scoped>
.pomText {
  position: absolute;
  left: 670px;
  bottom: 230px;
  font-size: 25px;
}
.pomText2 {
  position: absolute;
  left: 670px;
  bottom: 230px;
  font-size: 25px;
}
.pomBigText {
  font-size: 40px;
  font-weight: bold;
}
.pomPointText {
  font-size: 40px;
  font-weight: bold;
  color: crimson;
}
.pomPointText2 {
  font-size: 25px;
  color: #fff;
}
</style>
