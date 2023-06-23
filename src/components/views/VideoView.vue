<template>
  <section class="video-sec">
    <div class="videoBox">
      <video autoplay muted loop playsinline class="videoJs">
        <source src="/Videos/TopVideo.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.video-sec {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbd13d;
  height: 120vh;
  width: 100%;
  .videoBox {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 100%;
    width: 100%;
    border-bottom: 5px #fff solid;
    .videoJs {
      border-radius: 40px;
      width: 95vw;
      height: 95vh;
      object-fit: cover;
    }
  }
}
</style>
