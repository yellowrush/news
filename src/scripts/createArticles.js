const fs = require('node:fs');
const news = require('../db/index');
const todayNews = require('../db/todayNews');

const data = [].concat(news).concat(todayNews);

if (data.length > 0) {
  for (let i = 0; i < data.length; i++) {
    const content = `
<newsItem
  :id="'${data[i].id}'"
  :title="'${data[i].title}'"
  :news-from="'${data[i].newsFrom}'"
  :comments-count="${data[i].commentsCount}"
  :date="'${data[i].date}'"
  :image="'${data[i].image}'"
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
