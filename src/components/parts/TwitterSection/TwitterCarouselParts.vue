<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import ImgBtnParts from "../ImgBtnParts.vue";

export default {
  name: "TwitterCarouselParts",
  props: ["FetchApiData"],
  components: { Carousel, Slide, ImgBtnParts, Pagination },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    next() {
      (this.$refs.carousel as any).next();
    },
    prev() {
      (this.$refs.carousel as any).prev();
    },
  },
};
</script>
<template>
  <div class="carousel-btn-wrap" @click="prev">
    <ImgBtnParts
      :imgUrl="'/TwitterSectionImg/BeforeBtn.png'"
      :title="'PREV'"
      :gsapName="'lBtnGsap'"
    />
  </div>
  <div class="slide-section">
    <Carousel ref="carousel" :items-to-Show="1" :wrap-around="true">
      <Slide v-for="(item, index) in FetchApiData" :key="index">
        <div class="slide-wrap">
          <div class="slide-header">
            <div class="twitter-icon">
              <img src="/public/TwitterSectionImg/twitterIcon.png" alt="" />
            </div>
            <div class="twitter-other-info">
              <div class="twitter-link">
                <a :href="item.itemLink">@PURIN-SANRIO</a>
              </div>
              <div class="twitter-posted-date">
                <span>{{ item.updateTime }}の投稿</span>
              </div>
            </div>
          </div>

          <div class="slide-text">
            <span class="twitter-text">{{ item.itemText }}</span>
          </div>
          <div class="slide-img">
            <img class="twitter-img" :src="item.img" alt="" />
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
  <div class="carousel-btn-wrap" @click="next">
    <ImgBtnParts
      :imgUrl="'/TwitterSectionImg/NextBtn.png'"
      :title="'NEXT'"
      :gsapName="'rBtnGsap'"
    />
  </div>
</template>
<style lang="scss" scoped>
// TT
.thumnails {
  height: 10%;
  width: 10%;
}
.slide-section {
  width: 58%;
  height: 100%;

  .slide-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    height: 100%;
    padding: 5%;
    background-color: #faf9a6;
    border-radius: 10%;
    border: 5px solid #583225;
    .slide-header {
      display: flex;
      width: 100%;
      height: 10%;
      margin-bottom: 2.5%;
      .twitter-icon {
        height: 100%;
        margin-right: 5%;
        border-radius: 50%;
        border: 3px solid #583225;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .twitter-other-info {
        height: 100%;
        width: 80%;
        display: block;
        font-family: "BIZ UDPGothic";
        font-style: normal;
        .twitter-link {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
          height: 50%;
          width: 100%;
          margin-bottom: 0.3rem;
          a {
            color: #fbd13d;
          }
        }
        .twitter-posted-date {
          display: flex;
          align-items: center;
          height: 50%;
          width: 100%;
          font-size: 1rem;
          font-weight: bold;
          color: #7e262b;
          span {
          }
        }
      }
    }
    .slide-text {
      display: flex;
      align-items: center;
      width: 100%;
      height: 15%;
      margin-bottom: 2.5%;
      span {
        font-family: "BIZ UDPGothic";
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        color: #583225;
        letter-spacing: 0.2em;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;

        /*IE対策*/
        line-height: 160%;
        max-height: 4.5em;
      }
    }
    .slide-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 70%;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}
.carousel-btn-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21%;
  height: 100%;
}
</style>
