const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
const withAuth = require("../utils/auth");

// GET all blog posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await BlogPost.findAll({
      attributes: ['title', 'content', 'date_created'],
      include: [ 
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogposts = dbBlogData.map((posts) =>
      posts.get({ plain: true })
    );
    res.render('homepage', {
      blogposts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/blogpost/:id", async (req, res) => {
  try {
    const blogData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const blogpick = blogData.get({ plain: true });

    res.render("blogposts", {
      ...blogpick,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(1, {
      attributes: { exclude: ['password'] },
      include: [
        { 
          model: BlogPost,
          attributes: ['title','content','date_created']
        }
      ],
    });

    console.log(userData);
    
    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
