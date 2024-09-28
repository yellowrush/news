const fs = require('node:fs');
const data = require('../db/index');

if (data.length > 0) {
  for (let i = 0; i < data.length; i++) {
    const content = `
<newsItem
  :id="'${data[i].id}'"
  :title="'${data[i].title}'"
  :news-from="'${data[i].newsFrom}'"
  :comments-count="'${data[i].commentsCount}'"
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
