const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "check time",
    "postContent": "time for bed",
    "userId": 1
  },
  {
    "postTitle": "tiered",
    "postContent": "time for bed",
    "userId": 2
  },
  {
    "postTitle": "is it bed time?",
    "postContent": "yes!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;