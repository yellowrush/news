const fs = require('node:fs');
const news = require('../db/index');
const todayNews = require('../db/todayNews');

const data = [].concat(news).concat(todayNews);

if (data.length > 0) {
  for (let i = 0; i < data.length; i++) {
    const image = data[i].image ?? '';
    const images = data[i].images?.map((img) => `'${img}'`);

    const content = `
<newsItem
  :comments-count="${data[i].commentsCount}"
  :images="[${images}]"
  id="${data[i].id}"
  title="${data[i].title}"
  news-from="${data[i].newsFrom}"
  date="${data[i].date}"
  image="${image}"
/>
`;
    fs.writeFile(`src/article/${data[i].id}.md`, content, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  }
}
