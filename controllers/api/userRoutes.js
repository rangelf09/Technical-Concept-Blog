const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try{
    const userData = await User.create({
        username: req.body.username,
        password: req.body.password,
    });

    req.session.save(() => {
        req.session.logged_in =true;

        res.status(200).json
    });
    } catch (err)
{
    res.status(500).json(err);
}
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!userData) {
            res.status(400).json({message: "inorrect username or password."});
            return;
        };
        const correctPw = userData.checkPassword(req.body.password);

        if(!correctPw) {
            res.status(400).json({message: "inorrect username or password."});
            return;
        };
        
        req.session.save(() => {
            req.session.logged_in =true;
            req.status(200).json({ user: userData, message: 'You are logged in'});
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res)=> {
    if (req.session.logged_in) {
        req.session.destroy(()=>{
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;