<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import ClickEventView from "../template/ClickEventView.vue";

export default {
  name: "InstaParts",
  props: ["FetchApiData"],
  components: {
    ClickEventView,
  },
  mounted() {
    const duration = 100;
    const delay = duration / 2;
    gsap.set(".instagram-gsap0", { x: 1950 });
    gsap.to(".instagram-gsap0", {
      duration: duration,
      ease: "linear",
      repeat: 0,
      repeatDelay: 0,
      x: 5850,
    }),
      gsap.to(".instagram-gsap1", {
        duration: duration,
        ease: "linear",
        repeat: -1,
        repeatDelay: 0,
        x: 3900,
      }),
      gsap.to(".instagram-gsap2", {
        duration: duration,
        delay: delay,
        ease: "linear",
        repeat: -1,
        repeatDelay: 0,
        x: 3900,
      });
  },
  updated() {},
  data() {
    return {
      instaSecOfFlag: true,
      instaImgOfFlag: false,
      instaItemNum: 0,
      clickEventNum: 0,
    };
  },

  methods: {
    instaItemOver(index: number) {
      this.instaImgOfFlag = true;
      this.instaItemNum = index;
    },
    instaItemLeave() {
      this.instaImgOfFlag = false;
      this.clickEventNum = Math.floor(Math.random() * 10);
    },
  },
};
</script>

<template>
  <div class="wrpper">
    <div
      v-for="(n, index) in 3"
      :key="n"
      class="sectionBox1"
      :class="['instagram-gsap' + index]"
      v-on:mouseover="instaSecOfFlag = false"
      v-on:mouseleave="instaSecOfFlag = true"
    >
      <div
        v-for="(insta, index) in FetchApiData"
        class="ItemBox"
        :key="index"
        v-on:mouseover="instaItemOver(index)"
        v-on:mouseleave="instaItemLeave()"
      >
        <img :src="insta.img" alt="商品画像" />
        <div
          class="instaClickBox"
          v-show="instaImgOfFlag && instaItemNum === index"
        >
          <ClickEventView :clickEventNum="clickEventNum" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrpper {
  position: relative;
  display: flex;
  width: 3900px;
  height: 420px;
  border-top: 5px #fff solid;
  border-bottom: 5px #fff solid;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.3;
  }
}

.sectionBox1 {
  position: absolute;
  overflow: hidden;
  left: -1950px;
  display: flex;
  align-items: center;
  width: 1950px;
  height: 100%;
  // -----------------------------
  .ItemBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: relative;

    width: 387.5px;
    height: 90%;
    margin: 0 50px;

    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10%;
      border: #583225 solid 5px;
    }

    .instaClickBox {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      font-family: "BIZ UDPGothic";
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      z-index: 1;
      cursor: pointer;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #000;
        opacity: 0.5;
        border-radius: 10%;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
