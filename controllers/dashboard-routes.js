const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// ALL POSTS DASHBOARD
router.get('/', withAuth, async (req, res) => {
  try {

    const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
console.log(posts);
    res.render('all-posts', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// AFTER CLICK ON NEW POST BUTTON
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    layout: 'dashboard',
  });
});



module.exports = router;