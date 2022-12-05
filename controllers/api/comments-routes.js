const {Comments} =  require("../../models/Comments");
const router = require("express").Router();

router.post("/", async (req, res) => {
    try {
        const user_id = req.session.user_id;
        const {post_id,  text} = req.body;

        if(!user_id || ! post_id || !text){
            res.json({message: "Insufficient Data"})
        }
        const newComment = await Comments.create({
            text,
            post_id,
            user_id
        })
        res.status(200).json(newComment)

    } catch (err){ 
        res.status(500).json(err)        
    }
})

module.exports = router;