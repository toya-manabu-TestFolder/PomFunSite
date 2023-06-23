<script lang="ts">
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default {
  name: "onps4Bg",
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    const onps4Box: any = document.querySelector(".onps4Box");
    // onps41
    const onps4Create = () => {
      const onps4NumArr = ["1", "2", "3", "4"];
      let xChange = true;
      for (const onps4Num of onps4NumArr) {
        // let onps4position = () => {
        //   if (onps4Num === "1") {
        //     return "-70px";
        //   } else if (onps4Num === "2") {
        //     return "-75px";
        //   } else if (onps4Num === "3") {
        //     return "-80px";
        //   } else if (onps4Num === "4") {
        //     return "-85px";
        //   }}

        // };

        let onps4 = document.createElement("img");
        onps4.src = "/Onp/onp" + onps4Num + ".png";
        onps4.style.position = "absolute";
        onps4.style.bottom =
          onps4Num === "1"
            ? "-70px"
            : "" || onps4Num === "2"
            ? "-140px"
            : "" || onps4Num === "3"
            ? "-210px"
            : "" || onps4Num === "4"
            ? "-280px"
            : "";
        onps4.style.left = Math.floor(Math.random() * 1920) + "px";
        onps4.style.width = 33 + "px";
        onps4.style.height = 57 + "px";
        onps4.style.opacity = "0.5";

        onps4.style.rotate = Math.floor(Math.random() * 180) + "deg";

        onps4Box.appendChild(onps4);
        gsap.to(onps4, {
          duration: 30,
          y: -1300,
          x: xChange ? 500 : -500,
          ease: "linear",
        });
        gsap.to(onps4, {
          duration: 3 + Math.random() * 10,
          rotate: 360 * Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "linear",
        });
        xChange = xChange ? false : true;
        setTimeout(() => {
          onps4.remove();
        }, 30000);
      }
    };
    setInterval(onps4Create, 6000);
  },
};
</script>
<template>
  <div class="onps4Box"></div>
</template>
<style scoped lang="scss">
.onps4Box {
  width: 100%;
  height: 100%;
}
</style>
