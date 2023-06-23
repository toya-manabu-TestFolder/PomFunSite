<script lang="ts">
import TwitterInfoCarouselView from "../template/TwitterInfoCarouselView.vue";
export default {
  name: "TwitterView",
  props: ["twitterData"],
  components: {
    TwitterInfoCarouselView,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>
<template>
  <div class="twitterBody">
    <div class="title">
      <span>TWITTER</span>
    </div>
    <TwitterInfoCarouselView :FetchApiData="twitterData" />
  </div>
</template>
<style lang="scss" scoped>
.twitterBody {
  width: 100%;
  background-color: #fbd13d;
  .title {
    position: relative;
    width: 100%;
    height: 2.5em;

    font-family: Sigmar One;
    font-size: 55px;
    letter-spacing: 0.2em;
    span {
      position: absolute;
      left: 60px;
      bottom: 0px;
      color: #fff;
    }
  }
}
</style>
