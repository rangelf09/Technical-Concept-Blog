const router = require('express').Router();
const userRoutes = require ('./userRoutes');
const commentsRoutes = require ('./commentsRoutes');
const postRoutes = require ('./postRoutes');

router.use('/user', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/post', postRoutes);

modeule.exports = router;