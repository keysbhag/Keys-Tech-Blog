const { BlogPost } = require('../models');

const blogdata = [
  {
    title: "Printemps",
    content: "This is my cool blog post",
    date_created: "October 21, 2022",
    user_id: 1,
  },
  {
    title: "Printps",
    content: "This is my dope blog post",
    date_created: "October 21, 2022",
    user_id: 2,
  },
  {
    title: "colememps",
    content: "This is my trrir blog post",
    date_created: "October 21, 2022",
    user_id: 3,
  },
  {
    title: "bimtemps",
    content: "This is my pop pop blog post",
    date_created: "October 21, 2022",
    user_id: 4,
  },
  {
    title: "Pmps",
    content: "This is my boom boom blog post",
    date_created: "October 21, 2022",
    user_id: 5,
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogdata);

module.exports = seedBlogPost;
