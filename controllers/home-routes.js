const router = require('express').Router();
const { User, Planner } = require('../models');
const withAuth = require('../');

//still need to add middleware but for now leave as is for testing
router.get('/', withAuth, async (req, res) => {
    try {
        const plannerData = await Planner.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const itineraries = plannerData.map((plan) => plan.get({ plain: true }));

        res.render('homepage', { itineraries, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login', { layout: false });
});

router.get('/signup', async (req, res) => {
    res.render('signup', { layout: false });
})

module.exports = router;