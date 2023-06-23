<script lang="ts">
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import custerdMotionVue from "../motionPlugins/custerdMotion.vue";

export default {
  name: "MenuList",
  props: ["modalState"],
  components: {
    custerdMotionVue,
  },
  methods: {
    closeMenuModal() {
      gsap.to(".menuBox", {
        duration: 0.8,
        x: 0,
        ease: "power2.out",
        overwrite: true,
      });
      setTimeout(() => {
        this.$emit("chgMenuModal", false);
      }, 800);
    },
    charactersScroll() {
      this.$emit("scrollCharaPage", 0);
    },
  },
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
  },
  updated() {
    if (this.modalState === true) {
      gsap.to(".menuBox", {
        duration: 0.8,
        x: -410,
        overwrite: true,
      });
    }
  },
};
</script>

<template>
  <div class="menuBox">
    <div class="closeBtn" @click="closeMenuModal">
      <span>×</span>
    </div>

    <div class="homeCustard">
      <div class="imgBox">
        <img src="/menu.png" alt="カスタードの画像" />
      </div>
      <div class="charaName">
        <span class="kanaName">カスタード</span>
        <span class="alphaName">CUSTARD</span>
      </div>
      <div class="MotionBox">
        <custerdMotionVue />
      </div>
    </div>

    <div class="menuList">
      <ul>
        <li>TOP</li>
        <li @click="charactersScroll">CHARACTERS</li>
        <li>GOODS</li>
      </ul>
    </div>

    <div class="footer">&copy;&nbsp;PomFun</div>
  </div>
</template>
<style lang="scss" scoped>
.menuBox {
  display: inline-block;

  position: fixed;
  right: -410px;
  background-color: #7e262b;
  height: 100vh;
  width: 406px;
  opacity: 80%;
  padding-left: 20px;
  z-index: 1;
  .closeBtn {
    height: 70px;

    display: flex;
    align-items: center;

    font-family: Sigmar One;
    font-size: 40px;
    font-weight: normal;
    color: #fbd13d;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }

  .homeCustard {
    display: flex;
    width: 100%;
    height: 290px;
    flex-direction: column;
    align-items: center;
    .imgBox {
      width: 200px;
      img {
        width: 163px;
        height: 117px;
      }
    }

    .charaName {
      position: relative;
      height: 60px;
      width: 200px;
      font-weight: normal;
      margin-top: 25px;
      .kanaName {
        position: absolute;
        top: 0;
        height: 20px;
        font-family: BIZ UDPGothic;
        font-size: 14px;
        font-weight: bold;
      }
      .alphaName {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        height: 40px;
        font-family: Sigmar One;
        color: #fff;
        font-size: 40px;
      }
    }

    .MotionBox {
      position: relative;
      overflow: hidden;
      width: 360px;
      height: 80px;
    }
  }

  .menuList {
    ul {
      list-style: none;
      li {
        width: 302px;
        height: 66px;
        font-family: Sigmar One;
        font-size: 40px;
        color: #fbd13d;
        text-decoration-line: underline;
        cursor: pointer;
        &:hover {
          color: #000;
        }
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 20px;
    font-family: "Sigmar One";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
}
</style>
