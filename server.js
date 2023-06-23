const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const port = 3000;

// GET
let getResData = {
  newGoodesData: [],
  instaData: [],
  twitterData: [],
};

app.get("/api/get", (req, res) => {
  res.json(getResData);
});

// newGoodes
const URL = "https://shop.sanrio.co.jp/item?character_id=4";
axios(URL).then((res) => {
  const htmlParser = res.data;
  const $ = cheerio.load(htmlParser);

  $(".c-goods-item", htmlParser).each(function (index) {
    const goodsName = $(this).find(".c-goods-item__name").text();
    const goodsImg = $(this).find(".swiper-lazy").data().src;
    const goodsAmount = $(this).find(".price").text();
    getResData.newGoodesData.push({
      img: "https://shop.sanrio.co.jp" + goodsImg,
      title: goodsName,
      amount: goodsAmount.trim(),
    });
    if (index === 4) return false;
  });
});

// instaData
const URL2 = "https://www.sanrio.co.jp/characters/pompompurin/";
axios(URL2).then((res) => {
  const htmlParser = res.data;
  const $ = cheerio.load(htmlParser);

  $(".p-characterDetailProfile__snsInstagramItem", htmlParser).each(function (
    index
  ) {
    const instaImg = $(this).find("img")[0].attribs.src;
    getResData.instaData.push({
      img: instaImg,
    });
    if (index === 3) return false;
  });
});

// twitter
axios(URL2).then((res) => {
  const htmlParser = res.data;
  const $ = cheerio.load(htmlParser);

  $(".p-characterDetailProfile__snsTwitterItem", htmlParser).each(function () {
    const Img = $(this)
      .find(".p-characterDetailProfile__snsTwitterItemPic")
      .children("img")[0].attribs.src;
    const UpdateTime = $(this)
      .find(".p-characterDetailProfile__snsTwitterItemProfTime")
      .text();
    const ItemText = $(this)
      .find(".p-characterDetailProfile__snsTwitterItemText")
      .text();
    const ItemLink = $(this).find("a")[0].attribs.href;
    getResData.twitterData.push({
      img: Img,
      updateTime: UpdateTime,
      itemText: ItemText,
      itemLink: ItemLink,
    });
  });
});

// POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/api/post", (req, res) => {});

app.listen(port);

app.use(express.static(__dirname + "/dist"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});
