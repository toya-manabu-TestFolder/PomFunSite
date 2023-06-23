<script lang="ts">
import { gsap } from "gsap/dist/gsap";

export default {
  name: "ClickEventView",
  props: ["clickEventNum"],
  data() {
    return {
      img: [
        "/Infomation/clickImg/bagelpng.png",
        "/Infomation/clickImg/coconut.png",
        "/Infomation/clickImg/custard.png",
        "/Infomation/clickImg/mint.png",
        "/Infomation/clickImg/muffin.png",
        "/Infomation/clickImg/powder.png",
        "/Infomation/clickImg/Scone.png",
        "/Infomation/clickImg/tart.png",
        "/Infomation/clickImg/vanilla.png",
        "/Infomation/clickImg/whip.png",
      ],
    };
  },
  mounted() {
    gsap.to(".eventTextBox", {
      duration: 4,
      scaleX: -1,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  },
};
</script>

<template>
  <div class="eventTextBox">
    <span class="eventText">CLICK</span>
  </div>
  <div class="eventImgBox">
    <img class="eventImg" :src="img[clickEventNum]" alt="画像" />
  </div>
</template>

<style lang="scss" scoped>
.eventTextBox {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 40%;
  z-index: 1;

  .eventText {
    font-family: Sigmar One;
    font-size: 55px;
    font-weight: normal;
    letter-spacing: 0.15em;
    color: #fbd13d;
    transform: scaleX(-1);
  }
}
.eventImgBox {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;
  .eventImg {
    max-width: 70%;
    max-height: 70%;
    z-index: 1;
  }
}
</style>
