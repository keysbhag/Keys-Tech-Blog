const sequelize = require('../config/connection');
const seedBlogPost = require('./blogPostData');
const seedComment = require('./commentData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlogPost();

  await seedComment();

  await seedUsers();

  process.exit(0);
};

seedAll();
