<script lang="ts">
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "Menu",
  props: ["modalState"],
  data() {
    return {
      //
      hoverOn: true,
    };
  },
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
  },
  updated() {
    // menuボタンフェードイン
    if (this.modalState === false) {
      gsap.to(".menu", {
        duration: 1,
        repeat: 0,
        overwrite: true,
        motionPath: [{ x: 0, y: 0 }],
      });
    }
    setTimeout(() => {
      this.hoverOn = this.modalState ? false : true;
    }, 1000);
  },
  methods: {
    chgHover() {
      // 初回hoverはON
      if (this.hoverOn === true) {
        gsap.to(".menu", {
          duration: 1,
          repeat: 1,
          yoyo: true,
          ease: "linear",
          motionPath: [
            { x: 0, y: 30 },
            { x: 0, y: 0 },
          ],
        });
      }
    },
    chgMenuModal() {
      // menuボタンがフェードアウト
      gsap.to(".menu", {
        duration: 0.9,
        repeat: 0,
        overwrite: true,
        motionPath: [
          { x: -40, y: 40 },
          { x: 200, y: 100 },
        ],
      });

      setTimeout(() => {
        this.$emit("chgMenuModal", true);
      }, 900);
    },
  },
};
</script>

<template>
  <div class="menu" @click="chgMenuModal" @mouseover="chgHover">
    <img src="/menu.png" alt="メニュー" />
  </div>
</template>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 40px;
  right: 40px;
  width: 169px;
  height: 117px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
