<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "CarouselComponent",
  components: { Carousel, Slide, Pagination, Navigation },
  mounted() {},
  updated() {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
  <!-- ↓でオプション追加 -->
  <carousel
    :items-to-show="1.5"
    :autoplay="1"
    :wrap-around="true"
    :transition="5000"
  >
    <slide v-for="slide in 10" :key="slide">
      <div class="img-box">{{ slide }}</div>
    </slide>

    <!-- ↓制御ボタン等の部品 -->
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style lang="scss" scoped>
.img-box {
  z-index: 1;
  width: 100px;
  height: 100px;
}
</style>
