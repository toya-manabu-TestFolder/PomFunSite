<script lang="ts">
import NewGoodsTemplate from "../template/NewGoodsTemplate.vue";
import InstaTemplate from "../template/InstaTemplate.vue";

export default {
  name: "InfomationView",
  components: {
    NewGoodsTemplate,
    InstaTemplate,
  },
  props: ["newGoodsData", "instaData"],
  data() {
    return {};
  },
  mounted() {},
};
</script>

<template>
  <div class="infomation">
    <NewGoodsTemplate :FetchApiData="newGoodsData" />
    <InstaTemplate :FetchApiData="instaData" />
  </div>
</template>

<style lang="scss" scoped>
.infomation {
  width: 100%;
  background-color: #fbd13d;
  overflow: hidden;
  color: #fff;
}
</style>
