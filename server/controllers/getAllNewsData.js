const NewsAPI = require('newsapi');
require('env2')('./config.env');
const newsApi = new NewsAPI(`${process.env.API_KEY}`);

module.exports = (req, res) => {
 newsApi.v2.everything({
  q: 'technology',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk, techcrunch.com',
  from: '2020-11-10',
  to: '2020-11-20',
  language: 'en',
  sortBy: 'relevancy',
  page: 2
}).then(response => {
      res.send({
      response,
      seo: {
        description: 'News',
        keywords: 'technology'
      }})
  }).catch(err => res.send(err))
}

