<script lang="ts">
import { gsap } from "gsap/dist/gsap";
import ClickEventView from "../template/ClickEventView.vue";

export default {
  name: "NewGoodsParts",
  props: ["FetchApiData"],
  components: {
    ClickEventView,
  },
  mounted() {
    console.log(this.FetchApiData);
    const duration = 100;
    const delay = duration / 2;
    gsap.set(".newgoods-gsap0", { x: -1950 });
    gsap.to(".newgoods-gsap0", {
      duration: duration,
      ease: "linear",
      repeat: 0,
      repeatDelay: 0,
      x: -5850,
    }),
      gsap.to(".newgoods-gsap1", {
        duration: duration,
        ease: "linear",
        repeat: -1,
        repeatDelay: 0,
        x: -3900,
      }),
      gsap.to(".newgoods-gsap2", {
        duration: duration,
        delay: delay,
        ease: "linear",
        repeat: -1,
        repeatDelay: 0,
        x: -3900,
      });
  },
  updated() {},
  data() {
    return {
      goodsIconFlag: false,
      goodsIconIndex: 0,
      clickEventNum: 0,
    };
  },

  methods: {
    goodsIconFlagOver(index: number) {
      this.goodsIconFlag = true;
      this.goodsIconIndex = index;
    },
    goodsIconFlagLeave() {
      this.goodsIconFlag = false;
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
      :class="['newgoods-gsap' + index]"
    >
      <div v-for="(goods, index) in FetchApiData" class="ItemBox" :key="index">
        <div
          class="Img"
          v-on:mouseover="goodsIconFlagOver(index)"
          v-on:mouseleave="goodsIconFlagLeave()"
        >
          <img :src="goods.img" alt="商品画像" />
          <div
            class="newGoodsClickBox"
            v-show="goodsIconFlag && goodsIconIndex === index"
          >
            <ClickEventView :clickEventNum="clickEventNum" />
          </div>
        </div>
        <div class="title">
          <span>{{ goods.title }}</span>
        </div>
        <div class="amount">
          <span>{{ goods.amount }}&nbsp;（税込み）</span>
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
  left: 1950px;
  display: flex;
  width: 1950px;
  height: 100%;
  // -----------------------------
  .ItemBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    width: 390px;
    height: 100%;
    padding: 20px 70px;
    font-family: "BIZ UDPGothic";
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
    .Img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 250px;
      overflow: hidden;

      background: #ffffff;
      border-radius: 134px;
      border: #583225 solid 5px;
      .newGoodsClickBox {
        position: absolute;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 134px;
        width: 250px;
        height: 250px;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-color: #000;
          opacity: 0.5;
          border-radius: 134px;
          width: 250px;
          height: 250px;
        }
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 74px;
      margin: 10px 0;
    }
  }
}
</style>
