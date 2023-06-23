<script lang="ts">
import TwitterCarouselParts from "../parts/TwitterSection/TwitterCarouselParts.vue";
export default {
  name: "TwitterInfoCarouselView",
  components: {
    TwitterCarouselParts,
  },
  props: ["FetchApiData"],
  mounted() {},
  data() {
    return {};
  },
};
</script>
<template>
  <div class="twitter-carousel-section">
    <div class="twitter-carousel-wrap">
      <TwitterCarouselParts :FetchApiData="FetchApiData" />
    </div>
  </div>
</template>
<style lang="scss">
.twitter-carousel-section {
  position: relative;
  display: flex;
  justify-content: center;
  padding: 5% 0;
  border-bottom: 5px solid #fff;
  border-top: 5px solid #fff;
  .twitter-carousel-wrap {
    display: flex;
    width: 90%;
  }
}
</style>
