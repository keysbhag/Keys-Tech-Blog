const { Comment } = require('../models');

const commentdata = [
  {
    comment: "Blossoming Apricot",
    date_posted: "November 23, 2022",
    user_id: 3,
    post_id: 1,
  },
  {
    comment: "awesome pawesome",
    date_posted: "November 31, 2022",
    user_id: 2,
    post_id: 1,
  },
  {
    comment: "holy canoli!",
    date_posted: "November 30, 2022",
    user_id: 1,
    post_id: 2,
  },
  {
    comment: "BING BONG",
    date_posted: "November 23, 2022",
    user_id: 5,
    post_id: 3,
  },
  {
    comment: "WOW i cant believe its not butter",
    date_posted: "November 25, 2022",
    user_id: 3,
    post_id: 4,
  },
  {
    comment: "it dun make sense",
    date_posted: "November 28, 2022",
    user_id: 4,
    post_id: 5,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
