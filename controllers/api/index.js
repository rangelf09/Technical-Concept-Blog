const router = require('express').Router();

const userRoutes = require ('.user-routes');

router.use('/user', userRoutes);

modeule.exports = router;