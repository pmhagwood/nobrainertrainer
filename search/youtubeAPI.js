// add our requires
require('dotenv').config();
const { google } = require('googleapis');

google
  .youtube('v3')
  .search.list({
    key: process.env.YOUTUBE_TOKEN,
    part: 'snippet',
    q: 'workout',
  })
  .then((response) => {
    //restructure some data...
    const { data } = response;
    data.items.forEach((item) => {
      console.log(
        `Title: ${item.snippet.title}\nDescription: ${item.snippet.description}\n`
      );
    });
  })
  .catch((err) => console.log(err));
