const { Post } = require('../models');


const postdata = [
    {
      title: 'test test .',
      post_url: 'https://expressjs.com/en/guide/using-middleware.html',
      user_id: 15
    },
    {
      title: 'test test test .',
      post_url: 'https://devcenter.heroku.com/articles/heroku-cli',
      user_id: 6
    },
    {
      title: 'test test test test .',
      post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
      user_id: 1
    }

    ];
    
    
const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;