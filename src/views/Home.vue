<script lang="ts">
import VideoView from "../components/views/VideoView.vue";
import CharactersView from "../components/views/CharactersView.vue";
import TopTitleView from "../components/views/TopTitleView.vue";
import TwitterView from "../components/views/TwitterView.vue";
import InfomationView from "../components/views/InfomationView.vue";
import CarouselComponent from "../components/views/CarouselComponent.vue";

export default {
  name: "Home",
  components: {
    VideoView,
    CharactersView,
    TopTitleView,
    InfomationView,
    CarouselComponent,
    TwitterView,
  },
  data() {
    return {
      twitterData: "",
      newGoodsData: "",
      instaData: "",
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    getApiData: async function () {
      await this.axios
        .get("/api/get")
        .then((res) => {
          this.newGoodsData = res.data.newGoodesData;
          this.instaData = res.data.instaData;
          this.twitterData = res.data.twitterData;
        })
        .catch((e: any) => alert(e));
    },
  },
};
</script>

<template>
  <TopTitleView />
  <VideoView />
  <InfomationView :newGoodsData="newGoodsData" :instaData="instaData" />
  <TwitterView :twitterData="twitterData" />
  <CharactersView />
</template>
<style lang="scss" scoped></style>
