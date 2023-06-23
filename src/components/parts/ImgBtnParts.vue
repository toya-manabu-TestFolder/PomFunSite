<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "ImgBtnParts",
  props: ["imgUrl", "title", "gsapName"],
  mounted() {
    function setScrollTtiggerOfBtn(gsapName: string) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.set(".lBtnGsap", { x: -500 });
      gsap.set(".rBtnGsap", { x: 500 });

      gsap.to(`.${gsapName}`, {
        x: 0,
        scrollTrigger: {
          trigger: `.${gsapName}`,
          start: "top bottom",
          end: "bottom center",
          scrub: 1,
        },
      });
    }
    setScrollTtiggerOfBtn(this.gsapName);
  },
};
</script>
<template>
  <div class="btn-box" :class="gsapName">
    <div class="btn-text">
      <span>{{ title }}</span>
    </div>
    <div class="img-box">
      <img class="btn-img" :src="imgUrl" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.btn-box {
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  width: 100%;
  height: 40%;
  transition: 0.2s linear;
  &:hover {
    height: 50%;
    font-size: 4rem;
  }
  .btn-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    margin-bottom: 5%;
    font-family: "Sigmar One";
    font-style: normal;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0.2em;
  }
  .img-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    cursor: pointer;

    .btn-img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
