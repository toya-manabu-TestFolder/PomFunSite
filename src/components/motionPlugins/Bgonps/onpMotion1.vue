<script lang="ts">
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "onps1Bg",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    const onps1Box: any = document.querySelector(".onps1Box");
    // onps11
    const onps1Create = () => {
      const onps1NumArr = ["1", "2", "3", "4"];
      let xChange = true;
      for (const onps1Num of onps1NumArr) {
        // let onps1position = () => {
        //   if (onps1Num === "1") {
        //     return "-70px";
        //   } else if (onps1Num === "2") {
        //     return "-75px";
        //   } else if (onps1Num === "3") {
        //     return "-80px";
        //   } else if (onps1Num === "4") {
        //     return "-85px";
        //   }}

        // };

        let onps1 = document.createElement("img");
        onps1.src = "/Onp/onp" + onps1Num + ".png";
        onps1.style.position = "absolute";
        onps1.style.bottom =
          onps1Num === "1"
            ? "-70px"
            : "" || onps1Num === "2"
            ? "-140px"
            : "" || onps1Num === "3"
            ? "-210px"
            : "" || onps1Num === "4"
            ? "-280px"
            : "";
        onps1.style.left = Math.floor(Math.random() * 1920) + "px";
        onps1.style.width = 33 + "px";
        onps1.style.height = 57 + "px";
        onps1.style.opacity = "0.5";

        onps1.style.rotate = Math.floor(Math.random() * 180) + "deg";

        onps1Box.appendChild(onps1);
        gsap.to(onps1, {
          duration: 30,
          y: -1300,
          x: xChange ? 500 : -500,
          ease: "linear",
        });
        gsap.to(onps1, {
          duration: 3 + Math.random() * 10,
          rotate: 360 * Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "linear",
        });
        xChange = xChange ? false : true;
        setTimeout(() => {
          onps1.remove();
        }, 30000);
      }
    };
    setInterval(onps1Create, 6000);
  },
};
</script>
<template>
  <div class="onps1Box"></div>
</template>
<style scoped lang="scss">
.onps1Box {
  width: 100%;
  height: 100%;
}
</style>
