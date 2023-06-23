<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Article1 from "../articles/article1.vue";
import Article2 from "../articles/article2.vue";
import Article3 from "../articles/article3.vue";
import Article4 from "../articles/article4.vue";
import Menu from "../template/Menu.vue";
import MenuList from "../Modals/MenuList.vue";
import bgOnp1 from "../motionPlugins/Bgonps/onpMotion1.vue";
import bgOnp2 from "../motionPlugins/Bgonps/onpMotion2.vue";
import bgOnp3 from "../motionPlugins/Bgonps/onpMotion3.vue";
import bgOnp4 from "../motionPlugins/Bgonps/onpMotion4.vue";

export default {
  name: "scroll",
  components: {
    MenuList,
    Article1,
    Article2,
    Article3,
    Article4,
    Menu,
    bgOnp1,
    bgOnp2,
    bgOnp3,
    bgOnp4,
  },
  data() {
    return {
      modalState: false,
      charaPageX: 0,
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const jsArea: any = this.$refs.jsArea;
    const jsWrap: any = this.$refs.jsWrap;
    const jsItems = document.querySelectorAll(".jsItems");
    const num = jsItems.length;

    // クリック後Charactersへの自動スクロール座標
    // 最終的にはcharactersより上に何ページあるかで自動数値変更にする。
    this.charaPageX = jsArea.getBoundingClientRect().top;

    gsap.set(jsWrap, { width: num * 1920 + "px" });
    gsap.set(jsItems, { width: 100 / num + "%" });

    gsap.to(jsItems, {
      xPercent: -100 * (num - 1),
      ease: "none",
      scrollTrigger: {
        trigger: jsArea,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });
  },
  methods: {
    chgMenuModal(e: boolean) {
      this.modalState = e;
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    perrentFun(el: number) {
      el = this.charaPageX;
      window.scrollTo({
        top: el,
        behavior: "smooth",
      });
    },
  },
};
</script>

<template>
  <div ref="jsArea" class="area">
    <div ref="jsWrap" class="wrap">
      <header>
        <div class="headerLogoBox" @click="scrollTop">
          <img src="../../assets/logo.png" alt="ロゴ画像" class="headerLogo" />
        </div>
        <Menu v-on:chgMenuModal="chgMenuModal" :modalState="modalState" />
      </header>

      <MenuList
        v-on:chgMenuModal="chgMenuModal"
        :modalState="modalState"
        v-show="modalState"
        v-on:scrollCharaPage="perrentFun"
      />

      <div class="item jsItems item1" ref="article1">
        <Article1 />
        <bgOnp1 />
      </div>
      <div class="item jsItems item2">
        <div ref="test2"></div>
        <Article2 />
        <bgOnp2 />
      </div>
      <div class="item jsItems item3">
        <Article3 />
        <bgOnp3 />
      </div>
      <div class="item jsItems item4">
        <Article4 />
        <bgOnp4 />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.area {
  overflow: hidden;
  z-index: 2;
}
.wrap {
  position: relative;
  display: flex;
  background-color: #fbd13d;
}
.item {
  height: 100vh;
  font-size: 50px;
  font-weight: bold;
  color: #000;
}
.item2 {
  height: 100vh;
  font-size: 50px;
  font-weight: bold;
  color: #000;
}
header {
  position: absolute;
  width: 100vw;
  height: 30%;
  z-index: 1;
  .headerLogoBox {
    position: absolute;
    top: 40px;
    left: 40px;
    width: 124px;
    height: 124px;
    cursor: pointer;
    .headerLogo {
      width: 100%;
      height: 100%;
    }
  }
}
// .item1 {
//   background-color: rgb(246, 13, 13);
// }
// .item2 {
//   background-color: rgb(10, 232, 6);
// }
// .item3 {
//   background-color: rgb(76, 0, 255);
// }
// .item4 {
//   background-color: rgb(0, 132, 255);
// }
</style>
