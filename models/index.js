const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comments');


BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
})

User.belongsToMany(BlogPost, {
  through: {
    model: Comment,
    unique: false,
  },
  onDelete: "CASCADE",
});

BlogPost.belongsToMany(User, {
  through: {
    model: Comment,
    unique: false,
  },
  onDelete: "CASCADE",
});

User.hasMany(BlogPost,{
  foreignKey: 'user_id'
})

module.exports = { User, BlogPost, Comment };
