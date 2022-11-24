const sequelize = require("..config/connection");
const { User, Comments, Post } = require("../models");

const dataUser = require("./userData.json");
const postData = require("./postData.json");
const commentsData = require("./commentsData.json");

const seedData = async () => {
    await sequelize.sync ({ force:true});

    const user = await User.bulkCreate( dataUser,{
        individualHooks: true,
        returning: true,
    });
    for (const post of postData) {
        await Post.create({
            ...post,
            user_id: user[Math.floor(Math.random * user.lenght)].id,
        });
    }
};

seedData();


