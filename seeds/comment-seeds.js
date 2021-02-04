const { Comment } = require('../models');


const commentdata = [
    {
      comment_text: 'jkdf dkfjdkjfdk .',
      user_id: 6,
      post_id: 1
    },
    {
      comment_text: 'kldjf  kjdskjd slkj dkjs kldj k.',
      user_id: 6,
      post_id: 8
    },
    {
      comment_text: 'afjdksjf k.',
      user_id: 3,
      post_id: 10
    },
    {
      comment_text: 'edfdsfj lk.',
      user_id: 3,
      post_id: 18
    },
    {
      comment_text: 'dfdskjf .',
      user_id: 7,
      post_id: 5
    },

];



const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
