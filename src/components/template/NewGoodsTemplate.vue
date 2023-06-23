<script lang="ts">
import NewGoodsParts from "../parts/NewGoodsParts.vue";

export default {
  name: "NewGoodsTemplate",
  props: ["FetchApiData"],
  components: {
    NewGoodsParts,
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
  <div class="newgoods-section">
    <div class="NEWGOODS">
      <span class="text1">NEWGOODS</span>
    </div>
    <NewGoodsParts :FetchApiData="FetchApiData" />
  </div>
</template>

<style lang="scss" scoped>
.newgoods-section {
  height: 520px;
  .NEWGOODS {
    position: relative;
    font-family: Sigmar One;
    width: 100vw;
    height: 100px;
    .text1 {
      position: absolute;
      left: 60px;
      font-size: 55px;
      letter-spacing: 0.2em;
      color: #fff;
    }
  }
}
</style>
