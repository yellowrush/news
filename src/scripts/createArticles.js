const fs = require('node:fs');
const news = require('../db/index');
const todayNews = require('../db/todayNews');

const data = [].concat(news).concat(todayNews);

if (data.length > 0) {
  for (let i = 0; i < data.length; i++) {
    const image = data[i].image ?? '';
    const images = data[i].images;

    const content = `---
sidebar: auto
---

<newsDetail
  :comments-count="${data[i].commentsCount}"
  :like-count="${data[i].likeCount}"
  :liked="${data[i].liked}"
  :images="${
    images ? '[' + images.map((img) => "'" + img + "'") + ']' : undefined
  }"
  id="${data[i].id}"
  title="${data[i].title}"
  sub-title="${data[i].subTitle}"
  news-from="${data[i].newsFrom}"
  date="${data[i].date}"
  image="${image}"
  :article-content="'${data[i].articleContent?.replace(/"/g, "'")}'"
/>
`;
    fs.writeFile(`src/articles/${data[i].id}.md`, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  }
}
