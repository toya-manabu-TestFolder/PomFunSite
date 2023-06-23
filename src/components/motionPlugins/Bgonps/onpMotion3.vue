<script lang="ts">
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "onps3Bg",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    const onps3Box: any = document.querySelector(".onps3Box");
    // onps31
    const onps3Create = () => {
      const onps3NumArr = ["1", "2", "3", "4"];
      let xChange = true;
      for (const onps3Num of onps3NumArr) {
        // let onps3position = () => {
        //   if (onps3Num === "1") {
        //     return "-70px";
        //   } else if (onps3Num === "2") {
        //     return "-75px";
        //   } else if (onps3Num === "3") {
        //     return "-80px";
        //   } else if (onps3Num === "4") {
        //     return "-85px";
        //   }}

        // };

        let onps3 = document.createElement("img");
        onps3.src = "/Onp/onp" + onps3Num + ".png";
        onps3.style.position = "absolute";
        onps3.style.bottom =
          onps3Num === "1"
            ? "-70px"
            : "" || onps3Num === "2"
            ? "-140px"
            : "" || onps3Num === "3"
            ? "-210px"
            : "" || onps3Num === "4"
            ? "-280px"
            : "";
        onps3.style.left = Math.floor(Math.random() * 1920) + "px";
        onps3.style.width = 33 + "px";
        onps3.style.height = 57 + "px";
        onps3.style.opacity = "0.5";

        onps3.style.rotate = Math.floor(Math.random() * 180) + "deg";

        onps3Box.appendChild(onps3);
        gsap.to(onps3, {
          duration: 30,
          y: -1300,
          x: xChange ? 500 : -500,
          ease: "linear",
        });
        gsap.to(onps3, {
          duration: 3 + Math.random() * 10,
          rotate: 360 * Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "linear",
        });
        xChange = xChange ? false : true;
        setTimeout(() => {
          onps3.remove();
        }, 30000);
      }
    };
    setInterval(onps3Create, 6000);
  },
};
</script>
<template>
  <div class="onps3Box"></div>
</template>
<style scoped lang="scss">
.onps3Box {
  width: 100%;
  height: 100%;
}
</style>
