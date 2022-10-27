const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');
const commentRoutes = require('./comment-route');

router.use('/users', userRoutes);
router.use("/blogpost", blogRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
