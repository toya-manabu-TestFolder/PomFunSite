<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "topTitle",
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".topTitleBg", { y: -2000 });

    const custom_anime = gsap.timeline({
      scrollTrigger: {
        trigger: ".topTitle",
        start: "top top",
        end: "bottom 60%",
        scrub: 1,
      },
    });

    custom_anime.to(".topTitleBg", {
      keyframes: [{ y: -500 }, { y: -1450 }],
    });

    gsap.to(".topTitleImg", {
      y: -1000,
      scrollTrigger: {
        trigger: ".topTitle",
        start: "center top",
        end: "bottom -70%",
        scrub: 1,
      },
    });
  },
  methods: {
    postTest() {
      console.log("check");
      const data = {
        name: "suzuka",
      };
      this.axios
        .post("/api/post", { name: "suzuka" })
        .then((res) => console.log(res));
    },
  },
};
</script>

<template>
  <div class="topTitle">
    <div class="topTitleBg">
      <img src="/TopTitle/TopBg.png" alt="背景画像" />
    </div>
    <div class="topTitleMenu" @click="postTest">
      <img src="/TopTitle/TopMenuBtn.png" alt="メニュー" />
    </div>
    <div class="topTitleImg">
      <img src="/TopTitle/TopTitle.png" alt="タイトル" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.topTitle {
  position: relative;
  width: 100%;
  height: 300vh;
  background-color: #fbd13d;
  .topTitleBg {
    position: fixed;
    overflow: hidden;

    width: 100%;
    height: 2000px;
    img {
      max-width: 100%;
      max-height: 100%;
      @media screen and (max-width: 1600px) {
        width: 100%;
        height: 100%;
      }
    }
  }
  .topTitleMenu {
    position: fixed;
    top: 5%;
    right: 3%;
    z-index: 1;
    width: 180px;
    height: 118px;
    cursor: pointer;
    @media screen and (max-width: 1600px) {
      width: 150px;
      height: 100px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .topTitleImg {
    position: fixed;
    top: 28%;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 1;
    img {
      max-width: 100%;
      max-height: 100%;
      width: 1102px;
      height: 260px;
      @media screen and (max-width: 1600px) {
        width: 50%;
        height: 50%;
      }
    }
  }
}
</style>
