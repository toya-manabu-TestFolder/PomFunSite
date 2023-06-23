<script lang="ts">
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "onps2Bg",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    const onps2Box: any = document.querySelector(".onps2Box");
    // onps21
    const onps2Create = () => {
      const onps2NumArr = ["1", "2", "3", "4"];
      let xChange = true;
      for (const onps2Num of onps2NumArr) {
        // let onps2position = () => {
        //   if (onps2Num === "1") {
        //     return "-70px";
        //   } else if (onps2Num === "2") {
        //     return "-75px";
        //   } else if (onps2Num === "3") {
        //     return "-80px";
        //   } else if (onps2Num === "4") {
        //     return "-85px";
        //   }}

        // };

        let onps2 = document.createElement("img");
        onps2.src = "/Onp/onp" + onps2Num + ".png";
        onps2.style.position = "absolute";
        onps2.style.bottom =
          onps2Num === "1"
            ? "-70px"
            : "" || onps2Num === "2"
            ? "-140px"
            : "" || onps2Num === "3"
            ? "-210px"
            : "" || onps2Num === "4"
            ? "-280px"
            : "";
        onps2.style.left = Math.floor(Math.random() * 1920) + "px";
        onps2.style.width = 33 + "px";
        onps2.style.height = 57 + "px";
        onps2.style.opacity = "0.5";

        onps2.style.rotate = Math.floor(Math.random() * 180) + "deg";

        onps2Box.appendChild(onps2);
        gsap.to(onps2, {
          duration: 30,
          y: -1300,
          x: xChange ? 500 : -500,
          ease: "linear",
        });
        gsap.to(onps2, {
          duration: 3 + Math.random() * 10,
          rotate: 360 * Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "linear",
        });
        xChange = xChange ? false : true;
        setTimeout(() => {
          onps2.remove();
        }, 30000);
      }
    };
    setInterval(onps2Create, 6000);
  },
};
</script>
<template>
  <div class="onps2Box"></div>
</template>
<style scoped lang="scss">
.onps2Box {
  width: 100%;
  height: 100%;
}
</style>
