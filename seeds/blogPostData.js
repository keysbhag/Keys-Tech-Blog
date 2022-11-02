const { BlogPost } = require('../models');

const blogdata = [
  {
    title: "Flexbox",
    content: "Flexbox is great! use it!",
    date_created: "October 21, 2022",
    user_id: 1,
  },
  {
    title: "Just posted my app on heroku",
    content: "I made a cool app",
    date_created: "October 21, 2022",
    user_id: 2,
  },
  {
    title: "Whats the best node library",
    content: "Someone tell me!",
    date_created: "October 21, 2022",
    user_id: 3,
  },
  {
    title: "I need some help in the backend",
    content: "Any developers out there that can code backend?",
    date_created: "October 22, 2022",
    user_id: 4,
  },
  {
    title: "I love bootstrap",
    content: "Boot Strap is awesome i love to use it",
    date_created: "October 21, 2022",
    user_id: 5,
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogdata);

module.exports = seedBlogPost;
