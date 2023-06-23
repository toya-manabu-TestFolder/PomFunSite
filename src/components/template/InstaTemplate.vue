<script lang="ts">
import InstaParts from "../parts/InstaParts.vue";

export default {
  name: "InstaTemplate",
  props: ["FetchApiData"],
  components: {
    InstaParts,
  },
  mounted() {},
  updated() {},
  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
  <div class="insta-section">
    <div class="instagram">
      <span class="title">INSTAGRAM</span>
    </div>
    <InstaParts :FetchApiData="FetchApiData" />
  </div>
</template>

<style lang="scss" scoped>
.insta-section {
  height: 520px;
  margin-top: 50px;
  .instagram {
    position: relative;
    width: 100vw;
    height: 100px;
    font-family: Sigmar One;
    font-size: 55px;
    letter-spacing: 0.2em;
    .title {
      position: absolute;
      right: 60px;
      color: #fff;
    }
  }
}
</style>
