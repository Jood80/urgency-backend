const NewsAPI = require('newsapi');
require('env2')('./config.env');
const newsApi = new NewsAPI(`${process.env.API_KEY}`);

module.exports = (req, res) => {
  newsApi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then(response => {
     res.send({
      response,
      seo: {
        description: 'News',
        keywords: 'technology'
      }})
  }).catch(err => res.send(err))
}

