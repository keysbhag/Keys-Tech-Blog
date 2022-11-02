const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  console.log("hello");
  console.log(req.body.title);
  console.log(req.body.content);
  console.log(req.params.id);
  try{
    const change = {
      title: req.body.title,
      content: req.body.content,

    };
    console.log(change);
    const blogData = await BlogPost.update(change, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No Post found with this id!" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    console.log(req.params.id)
    console.log(req.session.user_id)
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;